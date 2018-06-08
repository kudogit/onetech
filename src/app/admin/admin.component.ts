import { Component } from '@angular/core';
import { ScriptLoaderService } from '../helpers/script-loader.service';

@Component({
    selector:'app-admin',
    templateUrl:'admin.component.html'
})

export class AdminComponent{
    constructor(private _scriptLoader : ScriptLoaderService){
        this._scriptLoader.loadScripts("admin-client",[
          
        ])
    }
}