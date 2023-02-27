import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavingGoalPlanComponent } from './saving-goal-plan.component';

const routes: Routes = [
  {
    path: '',
    component: SavingGoalPlanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavingGoalPlanRoutingModule { }
