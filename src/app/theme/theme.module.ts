import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule,Routes } from '@angular/router';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    LayoutComponent  ],
  imports: [
    RouterModule,
    CommonModule,
    AppModule
  ],
  exports: [
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class ThemeModule { }
