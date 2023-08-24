import ExpoModulesCore
import CoreHaptics

public class AhapModule: Module {
    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    public func definition() -> ModuleDefinition {
        var engine: CHHapticEngine?
        
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('Ahap')` in JavaScript.
        Name("Ahap")
        
        
        // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
        Function("hello") { (patternDict: [CHHapticPattern.Key: Any]) in
            do {
                if engine == nil {
                    engine = try CHHapticEngine(audioSession: .sharedInstance())
                }
            } catch let error {
                print("Error creating haptic pattern: \(error)")
            }
            
            if let engine = engine {
                // Start the haptic engine to prepare it for use.
                do {
                    try engine.start()
                } catch let error {
                    print("The engine failed to start with error: \(error)")
                }
                
                // Create a pattern from the dictionary.
                let pattern = try CHHapticPattern(dictionary: patternDict)
                let collisionPlayerSmall = try? engine.makePlayer(with: pattern)

                do {
                    try collisionPlayerSmall?.start(atTime: CHHapticTimeImmediate)
                } catch let error {
                    print("Error starting haptic player: \(error)")
                }
            }
        }

    }
}
