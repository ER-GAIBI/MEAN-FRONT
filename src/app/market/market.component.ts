import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { Router } from '@angular/router';


@Component({
    selector: 'app-market',
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        const chart = am4core.create('chartdiv', am4maps.MapChart);
        chart.geodata = am4geodata_worldLow;
        chart.projection = new am4maps.projections.Miller();
        const title = chart.chartContainer.createChild(am4core.Label);
        title.text = 'Please Select Your Market';
        title.fontSize = 30;
        title.paddingTop = 10;
        title.align = 'center';

        const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        const polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = '{name}';
        polygonSeries.heatRules.push({
            property: 'fill',
            target: polygonSeries.mapPolygons.template,
            min: am4core.color('#ff0006'),
            max: am4core.color('#ff0006'),
        });
        polygonSeries.useGeodata = true;


// add heat legend
        const heatLegend = chart.chartContainer.createChild(am4maps.HeatLegend);
        /*heatLegend.valign = 'bottom';
        heatLegend.align = 'left';
        heatLegend.width = am4core.percent(100);
        heatLegend.series = polygonSeries;
        heatLegend.orientation = 'horizontal';
        heatLegend.margin(20, 20, 20, 20);
        heatLegend.valueAxis.renderer.labels.template.fontSize = 10;
        heatLegend.valueAxis.renderer.minGridDistance = 40;*/
        // tslint:disable-next-line:only-arrow-functions
        polygonSeries.mapPolygons.template.events.on('over', function(event) {
            handleHover(event.target);
        });
        // tslint:disable-next-line:only-arrow-functions
        polygonSeries.mapPolygons.template.events.on('hit', function(event)  {
            handleHover(event.target);
            const country = (event.target.dataItem.dataContext as any).id;
            switch (country) {
                case 'DE': {
                    this.router.navigateByUrl('/de');
                    break;
                }
                case 'GB': {
                    this.router.navigateByUrl('/gb');
                    break;
                }
                case 'GR': {
                    this.router.navigateByUrl('/gr');
                    break;
                }
                case 'IE': {
                    this.router.navigateByUrl('/ie');
                    break;
                }
                case 'IT': {
                    this.router.navigateByUrl('/it');
                    break;
                }
                case 'PT': {
                    this.router.navigateByUrl('/pt');
                    break;
                }
                case 'QA': {
                    this.router.navigateByUrl('/qa');
                    break;
                }
                case 'ES': {
                    this.router.navigateByUrl('/es');
                    break;
                }

            }
        }, this);

        function handleHover(mapPolygon) {
            if (!isNaN(mapPolygon.dataItem.value)) {
                heatLegend.valueAxis.showTooltipAt(mapPolygon.dataItem.value);
            } else {
                heatLegend.valueAxis.hideTooltip();
            }
        }

        polygonSeries.mapPolygons.template.strokeOpacity = 0.4;
        // tslint:disable-next-line:only-arrow-functions
        polygonSeries.mapPolygons.template.events.on('out', function(event) {
            heatLegend.valueAxis.hideTooltip();
        });

        chart.zoomControl = new am4maps.ZoomControl();

// life expectancy data
        polygonSeries.data = [
            {id: 'DE', value: 0},
            {id: 'GB', value: 0},
            {id: 'GR', value: 0},
            {id: 'IE', value: 0},
            {id: 'IT', value: 0},
            {id: 'PT', value: 0},
            {id: 'QA', value: 0},
            {id: 'ES', value: 0}
        ];

// excludes Antarctica
        polygonSeries.exclude = ['AQ'];


        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function() {
            document.getElementById('root').style.display = 'block';
        }, 0);

    }



}
