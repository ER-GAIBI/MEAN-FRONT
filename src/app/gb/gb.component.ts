import {Component, OnInit, Pipe, PipeTransform, SecurityContext} from '@angular/core';
import {GbService} from '../services/gbService';
import {DomSanitizer} from '@angular/platform-browser';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

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

    public selectedElement: string;
    public display$ = new BehaviorSubject(true);
    public server$ = new BehaviorSubject(false);
    public database$ = new BehaviorSubject(false);
    public openUrl$ = new BehaviorSubject(false);
    public technicalService$ = new BehaviorSubject(false);
    public businessService$ = new BehaviorSubject(false);

    public display = true;
    public server = false;
    public database = false;
    public openUrl = false;
    public businessService = false;
    public data: any;
    public technicalService = false;
    public businnessService = false;
    link = 'https://www.webpagetest.org/';
    listTechServices = [{Technical_Service: '-- Select Technical Service --'}];
    listBusinessServices = [{Technical_Service: '-- Select Business Service --'}];

    constructor(private gbService: GbService,
                private router: Router) {
    }

    ngOnInit() {
        this.getBusinnesService();
        this.getTechnicalService();
        this.technicalService$.subscribe(nextValue => {
            if (nextValue) {
                this.display$.next(false);
                this.server$.next(false);
                this.openUrl$.next(false);
                this.database$.next(false);
                this.businessService$.next(false);
            }
        });
        this.businessService$.subscribe(nextValue => {
            if (nextValue) {
                this.display$.next(false);
                this.server$.next(false);
                this.openUrl$.next(false);
                this.database$.next(false);
                this.technicalService$.next(false);
            }
        });
        this.display$.subscribe(nextValue => {
            if (nextValue) {
                this.technicalService$.next(false);
                this.server$.next(false);
                this.openUrl$.next(false);
                this.database$.next(false);
                this.businessService$.next(false);
            }
        });
        this.server$.subscribe(nextValue => {
            if (nextValue) {
                this.technicalService$.next(false);
                this.display$.next(false);
                this.openUrl$.next(false);
                this.database$.next(false);
                this.businessService$.next(false);
            }
        });
        this.openUrl$.subscribe(nextValue => {
            if (nextValue) {
                this.technicalService$.next(false);
                this.server$.next(false);
                this.display$.next(false);
                this.database$.next(false);
            }
        });
        this.database$.subscribe(nextValue => {
            if (nextValue) {
                this.technicalService$.next(false);
                this.server$.next(false);
                this.openUrl$.next(false);
                this.display$.next(false);
                this.businessService$.next(false);
            }
        });
    }

    getServers() {
        this.gbService.getServers().subscribe((data: any) => {
            this.server$.next(true);
            this.data = data;
        });
    }

    getDatabases() {
        this.gbService.getDatabases().subscribe((data: any) => {
            this.data = data;
            this.database$.next(true);
        });
    }

    openLink() {
        this.openUrl$.next(true);
    }

    getTechnicalService() {
        this.gbService.getTechnicalService().subscribe((data: any) => {
            this.listTechServices = [{Technical_Service: '-- Select Technical Service --'}, ...data];
        });
    }

    getBusinnesService() {
        this.gbService.getTechnicalService().subscribe((data: any) => {
            this.listBusinessServices = [{Technical_Service: '-- Select Businness Service --'}, ...data];
        });
    }

    techServiceChange(event) {
        this.technicalService = event.target.value !== '-- Select Technical Service --';
        this.technicalService$.next(this.technicalService);
        this.selectedElement = event.target.value;
        this.router.navigate(['/gbTechnical', {selected: this.selectedElement}]);
    }

    businessServiceChange(event) {
        this.businnessService = event.target.value !== '-- Select Businness Service --';
        // this.businessService$.next(this.businnessService);
        this.display$.next(true);
        this.gbService.getPdf();
    }

}
