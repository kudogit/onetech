import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../helpers/script-loader.service';

@Component({
  selector: 'app-client-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private _script: ScriptLoaderService) {

  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this._script.loadScripts('app-client-home',
      [
        '../../../assets/js/jquery-3.3.1.min.js',
        '../../../assets/styles/bootstrap4/popper.js',
        '../../../assets/styles/bootstrap4/bootstrap.min.js',
        '../../../assets/plugins/greensock/TweenMax.min.js',
        '../../../assets/plugins/greensock/TimelineMax.min.js',
        '../../../assets/plugins/scrollmagic/ScrollMagic.min.js',
        '../../../assets/plugins/greensock/animation.gsap.min.js',
        '../../../assets/plugins/greensock/ScrollToPlugin.min.js',
        '../../../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js',
        '../../../assets/plugins/slick-1.8.0/slick.js',
        '../../../assets/plugins/easing/easing.js',
        '../../../assets/js/custom.js',
      ]);
  }
}
