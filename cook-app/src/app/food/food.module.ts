import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ApiModule } from "src/app/api/api.module";

import { FoodPage } from './food.page';

const routes: Routes = [
  {
    path: '',
    component: FoodPage
  }
];

@NgModule({
  imports: [
    ApiModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodPage]
})
export class FoodPageModule {}
