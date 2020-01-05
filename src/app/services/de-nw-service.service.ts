import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DeNwServiceService {

    public url = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getServers() {
        return this.http.get(this.url + '/marketServerDeNw');
    }

    getDatabases() {
        return this.http.get(this.url + '/marketDatabaseDeNw');
    }

    getBusinnesService() {
        return this.http.get(this.url + '/businessServiceDeNw');
    }
}
