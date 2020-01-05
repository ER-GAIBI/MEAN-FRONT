import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EsServiceService {

  public url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getServers() {
    return this.http.get(this.url + '/marketServerEs');
  }

  getDatabases() {
    return this.http.get(this.url + '/marketDatabaseEs');
  }

  getBusinnesService() {
    return this.http.get(this.url + '/businessServiceEs');
  }
}
