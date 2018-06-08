import { Component , OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../helpers/script-loader.service';


@Component({
    selector:'app-admin-home',
    templateUrl:'home.component.html',
    styleUrls:['home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit{
    constructor(private _script: ScriptLoaderService) {

    }
    
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-admin-home',
            [
                "assets/global/plugins/jquery.min.js",
                "assets/global/plugins/bootstrap/js/bootstrap.min.js",
                "assets/global/plugins/js.cookie.min.js",
                "assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js",
                "assets/global/plugins/jquery.blockui.min.js",
                "assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js",
                "assets/global/plugins/moment.min.js" ,
                "assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js" ,
                "assets/global/plugins/morris/morris.min.js" ,
                "assets/global/plugins/morris/raphael-min.js" ,
                "assets/global/plugins/counterup/jquery.waypoints.min.js" ,
                "assets/global/plugins/counterup/jquery.counterup.min.js" ,
                "assets/global/plugins/amcharts/amcharts/amcharts.js" ,
                "assets/global/plugins/amcharts/amcharts/serial.js" ,
                "assets/global/plugins/amcharts/amcharts/pie.js" ,
                "assets/global/plugins/amcharts/amcharts/radar.js" ,
                "assets/global/plugins/amcharts/amcharts/themes/light.js" ,
                "assets/global/plugins/amcharts/amcharts/themes/patterns.js" ,
                "assets/global/plugins/amcharts/amcharts/themes/chalk.js" ,
                "assets/global/plugins/amcharts/ammap/ammap.js" ,
                "assets/global/plugins/amcharts/ammap/maps/js/worldLow.js" ,
                "assets/global/plugins/amcharts/amstockcharts/amstock.js" ,
                "assets/global/plugins/fullcalendar/fullcalendar.min.js" ,
                "assets/global/plugins/horizontal-timeline/horizontal-timeline.js" ,
                "assets/global/plugins/flot/jquery.flot.min.js" ,
                "assets/global/plugins/flot/jquery.flot.resize.min.js" ,
                "assets/global/plugins/flot/jquery.flot.categories.min.js" ,
                "assets/global/plugins/jquery-easypiechart/jquery.easypiechart.min.js" ,
                "assets/global/plugins/jquery.sparkline.min.js" ,
                "assets/global/plugins/jqvmap/jqvmap/jquery.vmap.js" ,
                "assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.russia.js" ,
                "assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.world.js" ,
                "assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.europe.js" ,
                "assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.germany.js" ,
                "assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.usa.js" ,
                "assets/global/plugins/jqvmap/jqvmap/data/jquery.vmap.sampledata.js" ,
                "assets/global/scripts/app.min.js",
                "assets/pages/scripts/dashboard.min.js",
                "assets/layouts/layout6/scripts/layout.min.js",
                "assets/layouts/global/scripts/quick-sidebar.min.js",
                "assets/layouts/global/scripts/quick-nav.min.js"
            ]);
    }
}