import { Component, ViewEncapsulation, AfterViewInit , OnInit } from '@angular/core';
import { ScriptLoaderService } from '../helpers/script-loader.service';

@Component({
    selector:'app-client',
    templateUrl:'client.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls:['client.component.css']
})

export class ClientComponent implements OnInit{
    
   
    constructor(private _scriptLoader : ScriptLoaderService){
      
    }

    ngOnInit(): void {
    }

    
}