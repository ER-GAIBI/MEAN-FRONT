import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_region_usa_caLow from '@amcharts/amcharts4-geodata/germanyHigh';
import {Router} from '@angular/router';

@Component({
  selector: 'app-de',
  templateUrl: './de.component.html',
  styleUrls: ['./de.component.scss']
})
export class DeComponent implements OnInit {


  @ViewChild('chartElement') chartElement: ElementRef<HTMLElement>;

  constructor(private router: Router) { }

  ngOnInit() {

    // Create map instance
    // const chart = am4core.create(this.chartElement.nativeElement, am4maps.MapChart);
    const chart = am4core.create('germanyDiv', am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_region_usa_caLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.heatRules.push({
      property: 'fill',
      target: polygonSeries.mapPolygons.template,
      min: am4core.color('#ff0006'),
      max: am4core.color('#ff0006'),
    });

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}';
    // @ts-ignore
    polygonTemplate.fill = am4core.color('#a6aaa8');

    // Create hover state and set alternative fill color
    // const hs = polygonTemplate.states.create('hover');

    // tslint:disable-next-line:only-arrow-functions
    polygonSeries.mapPolygons.template.events.on('hit', function(event)  {
      const gov = (event.target.dataItem.dataContext as any).id;
      switch (gov) {
        case 'DE-NW' : {
          this.router.navigateByUrl('/de-nw');
          break;
        }
        case 'DE-BY' : {
          this.router.navigateByUrl('/de-by');
          break;
        }
      }
    }, this);

    // hs.properties.fill = am4core.color('#ff0006');

    polygonSeries.data = [
      {id: 'DE-BY', value: 0},
      {id: 'DE-NW', value: 0},
    ];

    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      document.getElementById('germanyRoot').style.display = 'block';
    }, 100);
  }

}
