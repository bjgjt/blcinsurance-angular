import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumerMainComponent } from './main/consumer-main/consumer-main.component';
import { ConsumerSidebarComponent } from './main/consumer-main/consumer-sidebar/consumer-sidebar.component';
import { HospitalMainComponent } from './main/hospital-main/hospital-main.component';
import { HospitalSidebarComponent } from './main/hospital-main/hospital-sidebar/hospital-sidebar.component';
import { InsuranceMainComponent } from './main/insurance-main/insurance-main.component';
import { InsuranceSidebarComponent } from './main/insurance-main/insurance-sidebar/insurance-sidebar.component';
import { InformationComponent } from './pages/consumer-page/information/information.component';
import { ViewRequestComponent } from './pages/consumer-page/view-request/view-request.component';
import { AddNewConsumerComponent } from './pages/hospital-page/add-new-consumer/add-new-consumer.component';
import { AddConsumerHistoryComponent } from './pages/hospital-page/add-consumer-history/add-consumer-history.component';
import { SendRequestComponent } from './pages/insurance-page/send-request/send-request.component';
import { GetConsumerInformationComponent } from './pages/insurance-page/get-consumer-information/get-consumer-information.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerMainComponent,
    ConsumerSidebarComponent,
    HospitalMainComponent,
    HospitalSidebarComponent,
    InsuranceMainComponent,
    InsuranceSidebarComponent,
    InformationComponent,
    ViewRequestComponent,
    AddNewConsumerComponent,
    AddConsumerHistoryComponent,
    SendRequestComponent,
    GetConsumerInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
