import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GbService} from '../services/gbService';
import {Router} from '@angular/router';

@Component({
    selector: 'app-gb',
    templateUrl: './gb.component.html',
    styleUrls: ['./gb.component.scss'],
    providers: [GbService]
})
export class GbComponent implements OnInit {

    public display = true;
    public server = false;
    public database = false;
    public data: any;

    constructor(private gbService: GbService) { }

    ngOnInit() {
        this.getBusinnesService();
    }

    getServers() {
        this.gbService.getServers().subscribe((data: any) => {
            this.display = false;
            this.server = true;
            this.data = data;
        });
    }

    getDatabases() {
        this.gbService.getDatabases().subscribe((data: any) => {
            this.display = false;
            this.database = true;
            this.data = data;
        });
    }

    getBusinnesService() {
        this.gbService.getBusinnesService().subscribe((data: any) => {
           console.log(data);
        });
    }

}
