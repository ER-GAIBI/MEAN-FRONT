import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class IeServiceService {

    public url = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getServers() {
        return this.http.get(this.url + '/marketServerIe');
    }

    getDatabases() {
        return this.http.get(this.url + '/marketDatabaseIe');
    }

    getBusinnesService() {
        return this.http.get(this.url + '/businessServiceIe');
    }
}
