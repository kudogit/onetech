import { Component, ViewEncapsulation, AfterViewInit, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../_services/script-loader.service';


@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class ClientComponent implements OnInit {


  constructor(private _scriptLoader: ScriptLoaderService) {

  }

  ngOnInit(){
    
  }
}
