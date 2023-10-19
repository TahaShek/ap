// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from './asset/asset.component';
import { AssetItemsComponent } from './asset-items/asset-items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [

  { path: 'asset', component: AssetComponent, data: { breadcrumb: 'Asset' } },
  { path: 'asset/items', component: AssetItemsComponent, data: { breadcrumb: 'Items' } },
  { path: 'asset/items/details', component: ItemDetailsComponent, data: { breadcrumb: 'Details' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
