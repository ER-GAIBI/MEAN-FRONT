import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class QaServiceService {

    public url = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getServers() {
        return this.http.get(this.url + '/marketServerQa');
    }

    getDatabases() {
        return this.http.get(this.url + '/marketDatabaseQa');
    }

    getBusinnesService() {
        return this.http.get(this.url + '/businessServiceQa');
    }
}
