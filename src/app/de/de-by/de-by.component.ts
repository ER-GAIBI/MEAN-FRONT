import {Component, OnInit} from '@angular/core';
import {DeByServiceService} from '../../services/de-by-service.service';

@Component({
    selector: 'app-de-by',
    templateUrl: './de-by.component.html',
    styleUrls: ['./de-by.component.scss'],
    providers: [DeByServiceService]
})
export class DeByComponent implements OnInit {

    public display = true;
    public server = false;
    public database = false;
    public data: any;

    constructor(private deByService: DeByServiceService) { }

    ngOnInit() {
        this.getBusinnesService();
    }

    getServers() {
        this.deByService.getServers().subscribe((data: any) => {
            this.display = false;
            this.server = true;
            this.data = data;
        });
    }

    getDatabases() {
        this.deByService.getDatabases().subscribe((data: any) => {
            this.display = false;
            this.database = true;
            this.data = data;
        });
    }

    getBusinnesService() {
        this.deByService.getBusinnesService().subscribe((data: any) => {
            console.log(data);
        });
    }


}
