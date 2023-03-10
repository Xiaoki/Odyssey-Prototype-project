import { AdvancedDynamicTexture, Button} from 'babylonjs-gui';
import {canvas, scene, engine } from './init';
import fullscreenImage from '../assets/fullscreen.png';

export class UIController 
{

    advancedTexture : AdvancedDynamicTexture;
    fullScreenButton : Button;

    constructor() {

        // Create Dynamic Texture for overlay of UI.
        this.advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI('UI');
        this.fullScreenButton = Button.CreateImageOnlyButton('fullscreenbtn', fullscreenImage);
        //this.fullScreenButton = Button.CreateSimpleButton("fullscreenbtn", "Fullscreen");

        this._SetFullScreenButton();
        
    }

    _SetFullScreenButton = () => {

        this.fullScreenButton.width = "50px";
        this.fullScreenButton.height = "50px";
        this.fullScreenButton.thickness = 0;
        this.fullScreenButton.top = ( canvas.height /2 ) - 70;
        this.fullScreenButton.left = ( canvas. width /2 ) - 100;

        this.fullScreenButton.onPointerUpObservable.add(function() {
            engine.enterFullscreen(false);
        });

        this.advancedTexture.addControl(this.fullScreenButton);

    }

    ResetUIElements = () => {
        
        this.fullScreenButton.top = ( canvas.height /2 ) -70;
        this.fullScreenButton.left = ( canvas. width /2 ) - 100;
    }

}