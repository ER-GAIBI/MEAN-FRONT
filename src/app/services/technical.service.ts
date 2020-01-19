import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TechnicalService {

    public url = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    selectedElement: any;
    selectedRequirement: any;

    getTechnicalServerApplicationServersUk(selectedElement: any) {
        this.selectedElement = selectedElement;
        return this.http.post(this.url + '/selectedTechnicalServerApplicationServersUk?selectedElement=' + selectedElement, null);
    }

    getTechnicalServerApplicationDatabasesUk(selectedElement: any) {
        this.selectedElement = selectedElement;
        return this.http.post(this.url + '/selectedTechnicalServerApplicationDatabasesUk?selectedElement=' + selectedElement, null);
    }

    getTechnicalServerApplicationRequirementUk(selectedElement: any) {
        return this.http.post(this.url + '/selectedTechnicalServerApplicationRequirementUk?selectedElement=' + selectedElement, null);
    }

    getRequirementUk(selectedTechnical: any, selectedRequirement: any) {
        return this.http.post(this.url + '/requirementUk?selectedElement=' + selectedTechnical
            + '&selectedRequirement=' + selectedRequirement, null);
    }

    addDataToServer(s: any) {
        s.selectedElement = this.selectedElement;
        return this.http.post(this.url + '/addToServerUk', s);
    }

    addDataToDatabase(s: any) {
        s.selectedElement = this.selectedElement;
        return this.http.post(this.url + '/addToDatabaseUk', s);
    }

    deleteMarketServer(s: any) {
        s.selectedElement = this.selectedElement;
        return this.http.post(this.url + '/deleteFromServerUk', s);
    }

    deleteDatabase(s: any) {
        s.selectedElement = this.selectedElement;
        return this.http.post(this.url + '/deleteFromDatabaseUk', s);
    }

    addDataToRequirement(addRequirement: any) {
        return this.http.post(this.url + '/addToRequirementUk', addRequirement);
    }

    deleteRequirement(s: any) {
        return this.http.post(this.url + '/deleteRequirementUk', s);
    }
}
