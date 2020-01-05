import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DeByServiceService {

    public url = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getServers() {
        return this.http.get(this.url + '/marketServerDeBy');
    }

    getDatabases() {
        return this.http.get(this.url + '/marketDatabaseDeBy');
    }

    getBusinnesService() {
        return this.http.get(this.url + '/businessServiceDeBy');
    }

}
