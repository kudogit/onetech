import { Component } from '@angular/core';
import { ScriptLoaderService } from '../helpers/script-loader.service';

@Component({
    selector:'app-client',
    templateUrl:'client.component.html'
})

export class ClientComponent{
    constructor(private _scriptLoader : ScriptLoaderService){
        this._scriptLoader.loadScripts("app-client",[
          
        ])
    }
}