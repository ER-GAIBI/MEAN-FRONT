import {Component, OnInit} from '@angular/core';
import {QaServiceService} from '../services/qa-service.service';

@Component({
    selector: 'app-qa',
    templateUrl: './qa.component.html',
    styleUrls: ['./qa.component.scss'],
    providers: [QaServiceService]
})
export class QaComponent implements OnInit {

    public display = true;
    public server = false;
    public database = false;
    public data: any;

    constructor(private qaService: QaServiceService) { }

    ngOnInit() {
        this.getBusinnesService();
    }

    getServers() {
        this.qaService.getServers().subscribe((data: any) => {
            this.display = false;
            this.server = true;
            this.data = data;
        });
    }

    getDatabases() {
        this.qaService.getDatabases().subscribe((data: any) => {
            this.display = false;
            this.database = true;
            this.data = data;
        });
    }

    getBusinnesService() {
        this.qaService.getBusinnesService().subscribe((data: any) => {
            console.log(data);
        });
    }

}
