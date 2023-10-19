import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CheckComponent } from './check/check.component';
import { AssetItemsComponent } from './asset-items/asset-items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AssetComponent } from './asset/asset.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    LayoutComponent,
    InputComponent,
    HomeComponent,
    AboutComponent,
    CheckComponent,
    AssetItemsComponent,
    ItemDetailsComponent,
    BreadcrumbComponent,
    AssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  exports:[
    SidebarComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
