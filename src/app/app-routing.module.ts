// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from './asset/asset.component';
import { AssetItemsComponent } from './asset-items/asset-items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { HomeComponent } from './home/home.component';
import { CheckComponent } from './check/check.component';

const routes: Routes = [
   {path:'',component:CheckComponent},
  { path: 'asset', component: AssetComponent, data: { breadcrumb: 'Asset' } },
  { path: 'asset/items', component: AssetItemsComponent, data: { breadcrumb: 'Items' } },
  { path: 'asset/items/details', component: ItemDetailsComponent, data: { breadcrumb: 'Details' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
