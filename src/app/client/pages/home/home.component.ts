import { Component , OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../helpers/script-loader.service';

@Component({
    selector:'app-client-home',
    templateUrl:'home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent implements OnInit , AfterViewInit{
    constructor(private _script: ScriptLoaderService) {

    }
    
    ngOnInit() {

    }

    ngAfterViewInit(): void {
        this._script.loadScripts('app-client-home',
        [
            "assets/js/jquery.min.js",
            "assets/js/bootstrap.min.js",
            "assets/js/slick.min.js",
            "assets/js/nouislider.min.js",
            "assets/js/jquery.zoom.min.js",
            "assets/js/main.js"
        ]);
    }
   
}