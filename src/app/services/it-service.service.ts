import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ItServiceService {

    public url = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getServers() {
        return this.http.get(this.url + '/marketServerIt');
    }

    getDatabases() {
        return this.http.get(this.url + '/marketDatabaseIt');
    }

    getBusinnesService() {
        return this.http.get(this.url + '/businessServiceIt');
    }
}
