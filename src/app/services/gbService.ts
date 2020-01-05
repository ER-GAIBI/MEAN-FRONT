import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GbService {

    public url = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getServers() {
        return this.http.get(this.url + '/marketServerUk');
    }

    getDatabases() {
        return this.http.get(this.url + '/marketDatabaseUk');
    }

    getBusinnesService() {
        return this.http.get(this.url + '/businessServiceUk');
    }
}