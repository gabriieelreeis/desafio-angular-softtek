import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionCheckComponent } from './admission-check/admission-check.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdmissionFooterComponent } from './components/admission-footer/admission-footer.component';
import { AdmissionBreadcrumbComponent } from './components/admission-breadcrumb/admission-breadcrumb.component';

const routes: Routes = [
  {
    path: '',
    component: AdmissionCheckComponent,
  },
];

@NgModule({
  declarations: [AdmissionCheckComponent, AdmissionFooterComponent, AdmissionBreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    FontAwesomeModule,
  ],
  exports: [RouterModule],
})
export class AdmissionModule {}
