import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { provideEnvironmentNgxMask } from 'ngx-mask';

const routes: Routes = [
  {
    path: 'admission',
    loadChildren: () =>
      import('./routes/admission/admission.module').then(
        (m) => m.AdmissionModule
      ),
  },
  {
    path: '**',
    redirectTo: 'admission',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    BreadcrumbComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, RouterModule.forRoot(routes)],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
