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

    getTechnicalService() {
        return this.http.get(this.url + '/technicalServiceForUk');
    }

    getPdf(pdfName: any) {
        this.http.post(this.url + '/pdf', pdfName, {responseType: 'blob'}).subscribe(data => {
            window.open(window.URL.createObjectURL(data));
        });
    }

    addDataToServer(s: any) {
        return this.http.post(this.url + '/addToServerUk', s);
    }

    addDataToDatabase(s: any) {
        return this.http.post(this.url + '/addToDatabaseUk', s);
    }

    deleteMarketServer(s: any) {
        return this.http.post(this.url + '/deleteFromServerUk', s);
    }

    deleteDatabase(s: any) {
        return this.http.post(this.url + '/deleteFromDatabaseUk', s);
    }
}
