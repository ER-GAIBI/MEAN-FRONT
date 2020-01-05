import { Component, OnInit } from '@angular/core';
import {GrServiceService} from '../services/gr-service.service';

@Component({
    selector: 'app-gr',
    templateUrl: './gr.component.html',
    styleUrls: ['./gr.component.scss'],
    providers: [GrServiceService]
})
export class GrComponent implements OnInit {

    public display = true;
    public server = false;
    public database = false;
    public data: any;

    constructor(private grService: GrServiceService) { }

    ngOnInit() {
        this.getBusinnesService();
    }

    getServers() {
        this.grService.getServers().subscribe((data: any) => {
            this.display = false;
            this.server = true;
            this.data = data;
        });
    }

    getDatabases() {
        this.grService.getDatabases().subscribe((data: any) => {
            this.display = false;
            this.database = true;
            this.data = data;
        });
    }

    getBusinnesService() {
        this.grService.getBusinnesService().subscribe((data: any) => {
            console.log(data);
        });
    }

}
