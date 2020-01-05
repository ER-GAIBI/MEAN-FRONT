import {Component, OnInit} from '@angular/core';
import {DeNwServiceService} from '../../services/de-nw-service.service';

@Component({
    selector: 'app-de-nw',
    templateUrl: './de-nw.component.html',
    styleUrls: ['./de-nw.component.scss'],
    providers: [DeNwServiceService]
})
export class DeNwComponent implements OnInit {

    public display = true;
    public server = false;
    public database = false;
    public data: any;

    constructor(private deNwService: DeNwServiceService) { }

    ngOnInit() {
        this.getBusinnesService();
    }

    getServers() {
        this.deNwService.getServers().subscribe((data: any) => {
            this.display = false;
            this.server = true;
            this.data = data;
        });
    }

    getDatabases() {
        this.deNwService.getDatabases().subscribe((data: any) => {
            this.display = false;
            this.database = true;
            this.data = data;
        });
    }

    getBusinnesService() {
        this.deNwService.getBusinnesService().subscribe((data: any) => {
            console.log(data);
        });
    }



}
