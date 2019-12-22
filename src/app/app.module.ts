import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyNameComponent } from './company-name/company-name.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { CompanyFontComponent } from './company-font/company-font.component';
import { CompanyColorComponent } from './company-color/company-color.component';
import { CompanyLogoComponent } from './company-logo/company-logo.component';
import { RouterModule, Routes } from '@angular/router';
import { CompanyImageComponent } from './company-image/company-image.component';
import { ColorPickerModule } from 'ngx-color-picker';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: CompanyNameComponent },
  { path : 'font', component: CompanyFontComponent },
  { path : 'color', component: CompanyColorComponent },
  { path : 'logo', component: CompanyLogoComponent },
  { path : 'image', component: CompanyImageComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    CompanyNameComponent,
    CompanyFontComponent,
    CompanyColorComponent,
    CompanyLogoComponent,
    CompanyImageComponent,


  ],
  imports: [
    HttpClientModule,
    AngularSvgIconModule,
    NgSelectModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes),
    ColorPickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
