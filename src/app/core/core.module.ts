
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@core/components';
import { MaterialModule } from '@core/material';
import { TranslateModule } from '@ngx-translate/core';

const COMPONENTS = [
  HeaderComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, TranslateModule],
  exports: [CommonModule, MaterialModule, TranslateModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class CoreModule { }
