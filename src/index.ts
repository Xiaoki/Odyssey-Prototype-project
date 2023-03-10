import './style.css';
import { scene, engine, SetupEnvironment, LoadModels, player, objectsWithUpdate, UIReference } from './js/init';

SetupEnvironment();
LoadModels();


// Called every frame.
engine.runRenderLoop( () => {
    
    scene.render(); 
    player.Update();

    // Trigger the Update function on all objects in this array.
    if (objectsWithUpdate) {
        objectsWithUpdate.forEach( (object) => {
            if(object.Update()){
                object.Update();
            }
        })
    }
});

// Listen for resize event of the browser.
window.addEventListener("resize", () => {
    engine.resize();
    UIReference.ResetUIElements();

})


