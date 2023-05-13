import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BindsPage } from './binds.page';

import { BindsPageRoutingModule } from './binds-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BindsPageRoutingModule
  ],
  declarations: [BindsPage]
})
export class BindsPageModule {}
