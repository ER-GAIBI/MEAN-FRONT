import { Component, OnInit } from '@angular/core';
import {PtServiceService} from '../services/pt-service.service';

@Component({
    selector: 'app-pt',
    templateUrl: './pt.component.html',
    styleUrls: ['./pt.component.scss'],
    providers: [PtServiceService]
})
export class PtComponent implements OnInit {

    public display = true;
    public server = false;
    public database = false;
    public data: any;

    constructor(private ptService: PtServiceService) { }

    ngOnInit() {
        this.getBusinnesService()
    }

    getServers() {
        this.ptService.getServers().subscribe((data: any) => {
            this.display = false;
            this.server = true;
            this.data = data;
        });
    }

    getDatabases() {
        this.ptService.getDatabases().subscribe((data: any) => {
            this.display = false;
            this.database = true;
            this.data = data;
        });
    }

    getBusinnesService() {
        this.ptService.getBusinnesService().subscribe((data: any) => {
            console.log(data);
        });
    }
}
