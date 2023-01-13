import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionCheckComponent } from './admission-check/admission-check.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: AdmissionCheckComponent,
  },
];

@NgModule({
  declarations: [AdmissionCheckComponent],
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
