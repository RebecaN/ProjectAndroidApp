import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ApiModule } from "src/app/api/api.module";

import { DesertPage } from './desert.page';

const routes: Routes = [
  {
    path: '',
    component: DesertPage
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
  declarations: [DesertPage]
})
export class DesertPageModule {}
