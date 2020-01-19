import {Component, OnInit, Pipe, PipeTransform, SecurityContext, ViewChild} from '@angular/core';
import {GbService} from '../services/gbService';
import {DomSanitizer} from '@angular/platform-browser';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap';

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
    public addDataDiv = false;
    public deleteDiv = false;
    public addId: string;
    public deleteId: string;

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

    public Technical_Service_ID: any;
    public Technical_Service: any;
    public Component: any;
    public Server_Name: any;
    public Propagation_Rule: any;
    public Type: any;
    public Database: any;
    public IP_address: any;
    public IP_address_2: any;
    public OS: any;
    public Physical_VM: any;
    public Location: any;
    public System_Owner: any;
    public Level_Support_1: any;
    public Level_Support_2: any;
    public Level_Support_3: any;
    public user: any;
    public port: any;

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

    addData() {
        this.addDataDiv = true;
        this.deleteDiv = false;
    }
    deleteData() {
        this.deleteDiv = true;
        this.addDataDiv = false;
    }
    send() {
        this.addDataDiv = false;
        const addTechnical = {Technical_Service_ID: this.Technical_Service_ID,
                    Technical_Service: this.Technical_Service,
                    Component: this.Component,
                    Server_Name: this.Server_Name,
                    Propagation_Rule: this.Propagation_Rule,
                    Type: this.Type,
                    Database: this.Database,
                    IP_address: this.IP_address,
                    IP_address_2: this.IP_address_2,
                    OS: this.OS,
                    Physical_VM: this.Physical_VM,
                    Locat: this.Location,
                    System_Owner: this.System_Owner,
                    Level_Support_1: this.Level_Support_1,
                    Level_Support_2: this.Level_Support_2,
                    Level_Support_3: this.Level_Support_3,
                    user: this.user,
                    port: this.port
        };
        if (this.server$.value) {
            this.gbService.addDataToServer(addTechnical).subscribe((data) => {
                this.data = data;
            });
        }
        if (this.database$.value) {
            this.gbService.addDataToDatabase(addTechnical).subscribe((data) => {
                this.data = data;
            });
        }
    }
    delete() {
        this.deleteDiv = false;
        const s = {s: this.deleteId};
        if (this.server$.value) {
            this.gbService.deleteMarketServer(s).subscribe((data) => {
                this.data = data;
            });
        }
        if (this.database$.value) {
            this.gbService.deleteDatabase(s).subscribe((data) => {
                this.data = data;
            });
        }
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
        const pdfName =  {pdfName: event.target.value};
        this.display$.next(true);
        this.gbService.getPdf(pdfName);
    }

}
