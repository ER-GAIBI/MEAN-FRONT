import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PtServiceService {

    public url = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getServers() {
        return this.http.get(this.url + '/marketServerPt');
    }

    getDatabases() {
        return this.http.get(this.url + '/marketDatabasePt');
    }

    getBusinnesService() {
        return this.http.get(this.url + '/businessServicePt');
    }
}
