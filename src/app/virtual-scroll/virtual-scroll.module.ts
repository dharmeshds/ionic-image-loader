import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IonicImageLoader } from '../../../projects/ionic-image-loader/src/lib/ionic-image-loader.module';

import { VirtualScrollPage } from './virtual-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: VirtualScrollPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoader,
    RouterModule.forChild(routes),
  ],
  declarations: [VirtualScrollPage],
})
export class VirtualScrollPageModule {
}