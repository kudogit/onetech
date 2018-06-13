import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';


@Component({
  selector: 'app-client-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit , AfterViewInit {
  constructor(public _scriptLoader: ScriptLoaderService) {

  }

  ngOnInit() {

  }

  
  ngAfterViewInit(): void {
    this._scriptLoader.loadScripts("app-client-home", [
        'assets/js/jquery.min.js',
        'assets/js/bootstrap.min.js',
        "assets/js/slick.min.js",
        "assets/js/nouislider.min.js",
        "assets/js/jquery.zoom.min.js",
        "assets/js/main.js"
    ], true)
  }
}
