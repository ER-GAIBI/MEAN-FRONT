import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TechnicalService} from '../../services/technical.service';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'app-technical-uk',
    templateUrl: './technical-uk.component.html',
    styleUrls: ['./technical-uk.component.scss'],
    providers: [TechnicalService]
})
export class TechnicalUkComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private technicalService: TechnicalService,
                private router: Router) { }

    public selectedElement: string;
    public selectedRequirement: string;

    public server$ = new BehaviorSubject(true);
    public database$ = new BehaviorSubject(false);
    public application$ = new BehaviorSubject(false);
    public application = false;
    public addDataDiv = false;
    public deleteDiv = false;
    public report$ = new BehaviorSubject(false);
    listApplicationRequirement = [{Requirement_Monitor_Type: '-- Select Requirement --'}];
    public data: any;
    link = 'https://www.webpagetest.org/';
    public deleteId: string;

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

    ngOnInit() {
        this.selectedElement = this.route.snapshot.paramMap.get('selected');
        this.getTechnicalServerApplicationRequirementUk();
        this.server$.subscribe(nextValue => {
            if (nextValue) {
                this.database$.next(false);
                this.application$.next(false);
                this.report$.next(false);
            }
        });

        this.database$.subscribe(nextValue => {
            if (nextValue) {
                this.server$.next(false);
                this.application$.next(false);
                this.report$.next(false);
            }
        });

        this.application$.subscribe(nextValue => {
            if (nextValue) {
                this.server$.next(false);
                this.database$.next(false);
                this.report$.next(false);
            }
        });

        this.report$.subscribe(nextValue => {
            if (nextValue) {
                this.server$.next(false);
                this.database$.next(false);
                this.application$.next(false);
            }
        });
        this.getTechnicalServersApplicationServers();

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
            this.technicalService.addDataToServer(addTechnical).subscribe((data) => {
                this.data = data;
            });
        }
        if (this.database$.value) {
            this.technicalService.addDataToDatabase(addTechnical).subscribe((data) => {
                this.data = data;
            });
        }
    }

    delete() {
        this.deleteDiv = false;
        const s = {s: this.deleteId};
        if (this.server$.value) {
            this.technicalService.deleteMarketServer(s).subscribe((data) => {
                this.data = data;
            });
        }
        if (this.database$.value) {
            this.technicalService.deleteDatabase(s).subscribe((data) => {
                this.data = data;
            });
        }
    }

    getTechnicalServersApplicationServers() {
        console.log(this.selectedElement);
        this.technicalService.getTechnicalServerApplicationServersUk(this.selectedElement).subscribe((data: any) => {
            this.data = data;
            console.log(data);
            this.server$.next(true);
        });
    }

    getTechnicalServersApplicationDatabases() {
        this.technicalService.getTechnicalServerApplicationDatabasesUk(this.selectedElement).subscribe((data: any) => {
            this.data = data;
            this.database$.next(true);
        });
    }

    getTechnicalServerApplicationRequirementUk() {
        this.technicalService.getTechnicalServerApplicationRequirementUk(this.selectedElement).subscribe((data: any) => {
            this.listApplicationRequirement = [{Requirement_Monitor_Type: '-- Select Requirement --'}, ...data];
        });
    }

    applicationChange(event) {
        this.application = event.target.value !== '-- Select Requirement --';
        this.application$.next(this.application);
        this.selectedRequirement = event.target.value;
        this.router.navigate(['/gbRequirement', {technicalSelected: this.selectedElement, requirementSelected: this.selectedRequirement}]);
    }

    openLink() {
        this.report$.next(true);
    }
}
