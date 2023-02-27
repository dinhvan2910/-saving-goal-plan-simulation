import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { NgxMaskModule } from 'ngx-mask';

import { SavingGoalPlanRoutingModule } from './saving-goal-plan-routing.module';
import { SavingGoalPlanComponent } from './saving-goal-plan.component';


@NgModule({
  imports: [
    SavingGoalPlanRoutingModule,
    CoreModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    SavingGoalPlanComponent,
  ],
})
export class SavingGoalPlanModule { }
