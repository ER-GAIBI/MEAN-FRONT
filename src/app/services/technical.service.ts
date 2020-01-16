import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TechnicalService {

    public url = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    getTechnicalServerApplicationServersUk(selectedElement: any) {
        return this.http.post(this.url + '/selectedTechnicalServerApplicationServersUk?selectedElement=' + selectedElement, null);
    }

    getTechnicalServerApplicationDatabasesUk(selectedElement: any) {
        return this.http.post(this.url + '/selectedTechnicalServerApplicationDatabasesUk?selectedElement=' + selectedElement, null);
    }

    getTechnicalServerApplicationRequirementUk(selectedElement: any) {
        return this.http.post(this.url + '/selectedTechnicalServerApplicationRequirementUk?selectedElement=' + selectedElement, null);
    }

    getRequirementUk(selectedTechnical: any, selectedRequirement: any) {
        return this.http.post(this.url + '/requirementUk?selectedElement=' + selectedTechnical
            + '&selectedRequirement=' + selectedRequirement, null);
    }
}
