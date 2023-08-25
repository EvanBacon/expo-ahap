import ExpoModulesCore
import CoreHaptics

struct CurvePoint: Record {
    @Field
    var Time: Float = 0
    
    @Field
    var ParameterValue: Float = 0
}

struct Curve: Record {
    @Field
    var ParameterID: String
    
    @Field
    var Time: Float = 0
    
    @Field
    var ParameterCurveControlPoints: [CurvePoint]
}


struct Send: Record {
    @Field
    var ParameterID: String
    
    @Field
    var Time: Float = 0
    
    @Field
    var ParameterValue: Double!
}


public class AhapModule: Module {
    var engine: CHHapticEngine?
    var players: [String: CHHapticAdvancedPatternPlayer] = [:]
    
    func startEngine() {
        do {
            if engine == nil {
                engine = try CHHapticEngine(audioSession: .sharedInstance())
            }
        } catch let error {
            print("Error creating haptic pattern: \(error)")
        }
    }
    
    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    public func definition() -> ModuleDefinition {
        
        
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('Ahap')` in JavaScript.
        Name("Ahap")
        
        Events(["finished"])
        
        // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
        Function("register") { (name: String, patternDict: [CHHapticPattern.Key: Any]) in
            startEngine()
            
            if let engine = engine {
                // Create a pattern from the dictionary.
                let pattern = try CHHapticPattern(dictionary: patternDict)
                let player = try? engine.makeAdvancedPlayer(with: pattern)
                player?.completionHandler = { (error) in
                    if let error = error {
                        print("Finished with error: \(error)")
                    }
                    self.sendEvent("finished", ["name": name])
                    
                }
                players[name] = player
            }
        }
        
        // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
        Function("unregister") { (name: String) in
            players[name] = nil
        }
        
        // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
        Function("action") { (name: String, action: String, time: TimeInterval?) in
            if let engine = engine {
                
                if let player = players[name] {
                    do {
                        if (action == "start") {
                            // Start the haptic engine to prepare it for use.
                            do {
                                try engine.start()
                            } catch let error {
                                print("The engine failed to start with error: \(error)")
                            }
                            
                            try player.start(atTime: time ?? CHHapticTimeImmediate)
                        } else if (action == "stop") {
                            try player.stop(atTime: time ?? CHHapticTimeImmediate)
                        } else if (action == "pause") {
                            try player.pause(atTime: time ?? CHHapticTimeImmediate)
                        } else if (action == "resume") {
                            try player.resume(atTime: time ?? CHHapticTimeImmediate)
                        } else if (action == "seek") {
                            try player.seek(toOffset: time ?? CHHapticTimeImmediate)
                        }
                    } catch let error {
                        print("Error starting haptic player: \(error)")
                    }
                }
            }
        }
        
        // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
        Function("send") { (name: String, params: [Send], time: TimeInterval?) in
            if let player = players[name] {
                do {
                    try player.sendParameters(params.map({ send in
                        return CHHapticDynamicParameter.init(parameterID: CHHapticDynamicParameter.ID(rawValue: send.ParameterID), value: Float(send.ParameterValue), relativeTime: TimeInterval(send.Time))
                    }), atTime: time ?? CHHapticTimeImmediate)
                } catch let error {
                    print("Error starting haptic player: \(error)")
                }
            }
        }
        
        // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
        Function("schedule") { (name: String, curve: Curve, time: TimeInterval?) in
            
            if let player = players[name] {
                // Convert curve to CHHapticParameterCurve
                let curve = CHHapticParameterCurve(parameterID: CHHapticDynamicParameter.ID(rawValue: curve.ParameterID), controlPoints: curve.ParameterCurveControlPoints.map(
                    { (point: CurvePoint) -> CHHapticParameterCurve.ControlPoint in
                        return CHHapticParameterCurve.ControlPoint(relativeTime: TimeInterval(point.Time), value: point.ParameterValue)
                    }
                ), relativeTime: TimeInterval(curve.Time))
                
                do {
                    try player.scheduleParameterCurve(curve, atTime: time ?? CHHapticTimeImmediate)
                } catch let error {
                    print("Error starting haptic player: \(error)")
                }
            }
        }
        
        Function("getLoopEnabled") { (name: String) -> Bool? in
            if let player = players[name] {
                return player.loopEnabled
            }
            return nil
        }
        
        Function("setLoopEnabled") { (name: String, loopEnabled: Bool) in
            if let player = players[name] {
                player.loopEnabled = loopEnabled
            }
        }
        
        Function("getIsMuted") { (name: String) -> Bool? in
            if let player = players[name] {
                return player.isMuted
            }
            return nil
        }
        
        Function("setIsMuted") { (name: String, isMuted: Bool) in
            if let player = players[name] {
                player.isMuted = isMuted
            }
        }
        
        Function("getPlaybackRate") { (name: String) -> Float? in
            if let player = players[name] {
                return player.playbackRate
            }
            return nil
        }
        
        Function("setPlaybackRate") { (name: String, playbackRate: Float) in
            if let player = players[name] {
                player.playbackRate = playbackRate
            }
        }
        
        Function("getLoopEnd") { (name: String) -> Double? in
            if let player = players[name] {
                return player.loopEnd
            }
            return nil
        }
        
        Function("setLoopEnd") { (name: String, loopEnd: Double) in
            if let player = players[name] {
                player.loopEnd = TimeInterval(loopEnd)
            }
        }
        
        // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
        Function("playAhap") { (patternDict: [CHHapticPattern.Key: Any]) in
            startEngine()
            
            if let engine = engine {
                // Start the haptic engine to prepare it for use.
                do {
                    try engine.start()
                } catch let error {
                    print("The engine failed to start with error: \(error)")
                }
                
                // Create a pattern from the dictionary.
                let pattern = try CHHapticPattern(dictionary: patternDict)
                let player = try? engine.makeAdvancedPlayer(with: pattern)
                
                do {
                    try player?.start(atTime: CHHapticTimeImmediate)
                } catch let error {
                    print("Error starting haptic player: \(error)")
                }
            }
        }
        
    }
}
