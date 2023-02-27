import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    CoreModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule { }
