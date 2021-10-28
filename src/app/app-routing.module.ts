import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumerMainComponent } from './main/consumer-main/consumer-main.component';
import { HospitalMainComponent } from './main/hospital-main/hospital-main.component';
import { InsuranceMainComponent } from './main/insurance-main/insurance-main.component';
import { InformationComponent } from './pages/consumer-page/information/information.component';
import { ViewRequestComponent } from './pages/consumer-page/view-request/view-request.component';


const routes: Routes = [
  {
    path: 'app/consumer',
    component: ConsumerMainComponent,
    children: [
      {
        path: 'information',
        component: InformationComponent
      },
      {
        path: 'view-request',
        component: ViewRequestComponent
      }
    ]
  },
  {
    path: 'app/hospital',
    component: HospitalMainComponent,
    // children: [
    //   {}
    // ]
  },
  {
    path: 'app/insurance',
    component: InsuranceMainComponent,
    // children: [
    //   {}
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
