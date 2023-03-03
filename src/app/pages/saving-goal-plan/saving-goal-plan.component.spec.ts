import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';

import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule } from 'ngx-mask';
import { SavingGoalPlanComponent } from './saving-goal-plan.component';

describe('SavingGoalPlanComponent', () => {
  let component: SavingGoalPlanComponent;
  let fixture: ComponentFixture<SavingGoalPlanComponent>;
  const currentDate = new Date();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavingGoalPlanComponent],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        CoreModule,
        MatToolbarModule,
        MatIconModule,
        MatIconTestingModule,
        TranslateModule.forRoot(),
        NgxMaskModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SavingGoalPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('onChangeMonth', () => {

    it(`should call onChangeMonth to change reach date with current reach date next month`, () => {
      component.onChangeMonth('next');
      component.onChangeMonth('next');
      expect(currentDate.getMonth() + 3).toEqual(component.reachDate.getMonth());
    });

    it(`should call onChangeMonth to change reach date with current reach date previous month`, () => {
      component.onChangeMonth('next');
      component.onChangeMonth('next');
      component.onChangeMonth('previous');
      expect(currentDate.getMonth() + 2).toEqual(component.reachDate.getMonth());
    });

    it(`should call setDataMonthly`, () => {
      spyOn(component, 'setDataMonthly');
      component.onChangeMonth('next');
      expect(component.setDataMonthly).toHaveBeenCalled();
    });

    it(`should call getDaysOfMonth`, () => {
      spyOn(component, 'getDaysOfMonth');
      component.getDaysOfMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
      expect(component.getDaysOfMonth).toHaveBeenCalled();
    });
  });

  describe('getDaysOfMonth', () => {
    it('should return date', () => {
      const date = new Date(2023, 2, 1); //01/03/2023
      expect(
        component.getDaysOfMonth(date.getFullYear(), date.getMonth() + 1)
      ).toEqual(31);
    });
  });

  describe('setDataMonthly', () => {
    it(`should call setDataMonthly to return total month`, () => {
      component.reachDate = new Date(2023, 5, 4); //04/06/2023
      component.setDataMonthly();
      expect(component.totalMonth).toEqual(3);
    });

    it(`should call setDataMonthly to return monthly amount`, () => {
      component.amount = 5000;
      component.reachDate = new Date(2027, 4, 4); //04/05/2027
      component.setDataMonthly();
      expect(component.monthlyAmount).toEqual('$100.00');
    });

    it(`should call setDataMonthly to return monthly amount width big amount, totalMonth`, () => {
      component.amount = 524000210000.25;
      component.reachDate = new Date(2060, 0, 10); //10/01/2060
      component.setDataMonthly();
      expect(component.monthlyAmount).toEqual('$1,185,520,837.10');
    });
  });

  describe('onConfirm', () => {
    it('should call open method open of MatSnackBar', () => {
      spyOn(component['snackBar'], 'open');
      component.onConfirm();
      expect(component['snackBar'].open).toHaveBeenCalled();
    });
  });

});
