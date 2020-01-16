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
}
