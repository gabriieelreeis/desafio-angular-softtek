import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
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
  declarations: [AppComponent, NavbarComponent, HeaderComponent],
  imports: [BrowserModule, FontAwesomeModule, RouterModule.forRoot(routes)],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
