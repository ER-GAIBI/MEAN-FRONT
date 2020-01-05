import { Component, OnInit } from '@angular/core';
import {EsServiceService} from '../services/es-service.service';

@Component({
  selector: 'app-es',
  templateUrl: './es.component.html',
  styleUrls: ['./es.component.scss'],
  providers: [EsServiceService]
})
export class EsComponent implements OnInit {

  public display = true;
  public server = false;
  public database = false;
  public data: any;

  constructor(private esService: EsServiceService) { }

  ngOnInit() {
  }

  getServers() {
    this.esService.getServers().subscribe((data: any) => {
      console.log(data);
      this.display = false;
      this.server = true;
      this.data = data;
    });
  }

  getDatabases() {
    this.esService.getDatabases().subscribe((data: any) => {
      console.log(data);
      this.display = false;
      this.database = true;
      this.data = data;
    });
  }

  getBusinnesService() {
    this.esService.getBusinnesService().subscribe((data: any) => {
      console.log(data);
    });
  }

}
