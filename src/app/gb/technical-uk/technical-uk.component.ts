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
    public report$ = new BehaviorSubject(false);
    listApplicationRequirement = [{Requirement_Monitor_Type: '-- Select Requirement --'}];
    public data: any;
    link = 'https://www.webpagetest.org/';

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
