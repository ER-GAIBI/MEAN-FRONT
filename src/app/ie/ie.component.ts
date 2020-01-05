import { Component, OnInit } from '@angular/core';
import {IeServiceService} from '../services/ie-service.service';

@Component({
    selector: 'app-ie',
    templateUrl: './ie.component.html',
    styleUrls: ['./ie.component.scss'],
    providers: [IeServiceService]
})
export class IeComponent implements OnInit {

    public display = true;
    public server = false;
    public database = false;
    public data: any;

    constructor(private ieService: IeServiceService) { }

    ngOnInit() {
        this.getBusinnesService();
    }

    getServers() {
        this.ieService.getServers().subscribe((data: any) => {
            this.display = false;
            this.server = true;
            this.data = data;
        });
    }

    getDatabases() {
        this.ieService.getDatabases().subscribe((data: any) => {
            this.display = false;
            this.database = true;
            this.data = data;
        });
    }

    getBusinnesService() {
        this.ieService.getBusinnesService().subscribe((data: any) => {
            console.log(data);
        });
    }


}
