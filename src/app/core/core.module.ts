
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@core/components';
import { MaterialModule } from '@core/material';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    HeaderComponent,
  ],
  declarations: [
    HeaderComponent,
  ],
})
export class CoreModule { }
