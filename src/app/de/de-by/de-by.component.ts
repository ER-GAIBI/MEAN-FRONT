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
    public openUrl = false;
    public data: any;
    link = 'https://www.webpagetest.org/';

    constructor(private deByService: DeByServiceService) { }

    ngOnInit() {
        this.getBusinnesService();
    }

    getServers() {
        this.deByService.getServers().subscribe((data: any) => {
            this.display = false;
            this.server = true;
            this.openUrl = false;
            this.data = data;
        });
    }

    getDatabases() {
        this.deByService.getDatabases().subscribe((data: any) => {
            this.display = false;
            this.database = true;
            this.openUrl = false;
            this.data = data;
        });
    }

    getBusinnesService() {
        this.deByService.getBusinnesService().subscribe((data: any) => {
            console.log(data);
        });
    }

    openLink() {
        this.display = false;
        this.openUrl = true;
        this.server = false;
        this.database = false;
    }
}
