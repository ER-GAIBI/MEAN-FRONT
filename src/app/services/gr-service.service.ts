import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GrServiceService {

    public url = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getServers() {
        return this.http.get(this.url + '/marketServerGr');
    }

    getDatabases() {
        return this.http.get(this.url + '/marketDatabaseGr');
    }

    getBusinnesService() {
        return this.http.get(this.url + '/businessServiceGr');
    }
}
