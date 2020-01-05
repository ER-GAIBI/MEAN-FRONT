import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {GbService} from '../services/gbService';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

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
    public openUrl = false;
    public data: any;
    link = 'https://www.webpagetest.org/';

    constructor(private gbService: GbService) { }

    ngOnInit() {
        this.getBusinnesService();
    }

    getServers() {
        this.gbService.getServers().subscribe((data: any) => {
            this.display = false;
            this.server = true;
            this.openUrl = false;
            this.data = data;
        });
    }

    getDatabases() {
        this.gbService.getDatabases().subscribe((data: any) => {
            this.display = false;
            this.database = true;
            this.openUrl = false;
            this.data = data;
        });
    }

    getBusinnesService() {
        this.gbService.getBusinnesService().subscribe((data: any) => {
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
