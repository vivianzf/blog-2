import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {SharedModule} from '../../shared/shared.module';
import {LayoutRoutingModule} from './layout-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
    RouterModule,
  ]
})
export class LayoutModule { }
