import {Component, OnInit} from '@angular/core';
import {ItServiceService} from '../services/it-service.service';

@Component({
    selector: 'app-it',
    templateUrl: './it.component.html',
    styleUrls: ['./it.component.scss'],
    providers: [ItServiceService]
})
export class ItComponent implements OnInit {

    public display = true;
    public server = false;
    public database = false;
    public data: any;

    constructor(private itService: ItServiceService) { }

    ngOnInit() {
        this.getBusinnesService();
    }

    getServers() {
        this.itService.getServers().subscribe((data: any) => {
            this.display = false;
            this.server = true;
            this.data = data;
        });
    }

    getDatabases() {
        this.itService.getDatabases().subscribe((data: any) => {
            this.display = false;
            this.database = true;
            this.data = data;
        });
    }

    getBusinnesService() {
        this.itService.getBusinnesService().subscribe((data: any) => {
            console.log(data);
        });
    }

}
