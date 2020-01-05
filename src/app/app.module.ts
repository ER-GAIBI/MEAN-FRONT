import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MarketComponent } from './market/market.component';
import { DeComponent } from './de/de.component';
import {GbComponent, SafePipe} from './gb/gb.component';
import { GrComponent } from './gr/gr.component';
import { IeComponent } from './ie/ie.component';
import { ItComponent } from './it/it.component';
import { PtComponent } from './pt/pt.component';
import { QaComponent } from './qa/qa.component';
import { EsComponent } from './es/es.component';
import { DeNwComponent } from './de/de-nw/de-nw.component';
import { DeByComponent } from './de/de-by/de-by.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MarketComponent,
    DeComponent,
    GbComponent,
    GrComponent,
    IeComponent,
    ItComponent,
    PtComponent,
    QaComponent,
    EsComponent,
    DeNwComponent,
    DeByComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'market', component: MarketComponent},
      {path: 'de', component: DeComponent},
      {path: 'gb', component: GbComponent},
      {path: 'gr', component: GrComponent},
      {path: 'ie', component: IeComponent},
      {path: 'it', component: ItComponent},
      {path: 'pt', component: PtComponent},
      {path: 'qa', component: QaComponent},
      {path: 'es', component: EsComponent},
      {path: 'de-nw', component: DeNwComponent},
      {path: 'de-by', component: DeByComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
