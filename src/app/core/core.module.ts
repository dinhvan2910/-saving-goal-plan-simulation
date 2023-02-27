
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@core/components';
import { MaterialModule } from '@core/material';

const COMPONENTS = [
  HeaderComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [CommonModule, MaterialModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class CoreModule { }
