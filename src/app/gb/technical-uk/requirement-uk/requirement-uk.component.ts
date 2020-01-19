import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TechnicalService} from '../../../services/technical.service';

@Component({
    selector: 'app-requirement-uk',
    templateUrl: './requirement-uk.component.html',
    styleUrls: ['./requirement-uk.component.scss'],
    providers: [TechnicalService]
})
export class RequirementUkComponent implements OnInit {

    public selectedTechnical: string;
    public selectedRequirement: string;
    public data: any;
    public addDataDiv = false;
    public deleteDiv = false;
    public deleteId: string;

    public Requirement_ID: any;
    public Technical_Service: any;
    public Component: any;
    public Requirement: any;
    public Details: any;
    public Type: any;
    public Business_Service_Group_X: any;
    public Tool: any;
    public Propagation_rule: any;
    public Event_NO_Event: any;
    public KPIs: any;
    public Requirement_Monitor_Type: any;
    public Discovery_Status: any;
    public Firewall_Status: any;
    public Access_Status: any;
    public Monitor_Implementation_Status: any;
    public Overall_Imp_Status: any;
    public QA_Status: any;
    public Testing_Status: any;
    public Blocking_Reasons: any;
    public Comments: any;
    public Demand_ID: any;

    constructor(private route: ActivatedRoute,
                private technicalService: TechnicalService) { }

    ngOnInit() {
        this.selectedTechnical = this.route.snapshot.paramMap.get('technicalSelected');
        this.selectedRequirement = this.route.snapshot.paramMap.get('requirementSelected');
        this.getRequirement();
    }

    getRequirement() {
        this.technicalService.getRequirementUk(this.selectedTechnical, this.selectedRequirement)
            .subscribe((data: any) => {
                this.data = data;
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
        const addRequirement = {Requirement_ID: this.Requirement_ID,
            Technical_Service: this.Technical_Service,
            Component: this.Component,
            Requirement: this.Requirement,
            Details: this.Details,
            Type: this.Type,
            Business_Service_Group_X: this.Business_Service_Group_X,
            Tool: this.Tool,
            Propagation_rule: this.Propagation_rule,
            Event_NO_Event: this.Event_NO_Event,
            Access_Status: this.Access_Status,
            KPIs: this.KPIs,
            Requirement_Monitor_Type: this.Requirement_Monitor_Type,
            Discovery_Status: this.Discovery_Status,
            Firewall_Status: this.Firewall_Status,
            Monitor_Implementation_Status: this.Monitor_Implementation_Status,
            Overall_Imp_Status: this.Overall_Imp_Status,
            QA_Status: this.QA_Status,
            Testing_Status: this.Testing_Status,
            Blocking_Reasons: this.Blocking_Reasons,
            Comments: this.Comments,
            Demand_ID: this.Demand_ID,
            selectedTechnical: this.selectedTechnical,
            selectedRequirement: this.selectedRequirement
        };
        this.technicalService.addDataToRequirement(addRequirement).subscribe((data) => {
            this.data = data;
        });
    }

    delete() {
        this.deleteDiv = false;
        const s = {s: this.deleteId,
            selectedTechnical: this.selectedTechnical,
            selectedRequirement: this.selectedRequirement
        };
        this.technicalService.deleteRequirement(s).subscribe((data) => {
            this.data = data;
        });
    }
}
