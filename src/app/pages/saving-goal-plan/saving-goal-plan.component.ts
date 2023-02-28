import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LOCAL_STORAGE_KEY } from '@core/configs';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Component({
  selector: 'saving-goal-plan',
  styleUrls: ['./saving-goal-plan.component.scss'],
  templateUrl: './saving-goal-plan.component.html',
})
export class SavingGoalPlanComponent implements OnInit {
  amount: number = 0;
  reachDate: Date = new Date();
  totalMonth: number = 0;
  monthlyAmount: string = '';

  constructor(
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.amount = Number(localStorage.getItem(LOCAL_STORAGE_KEY.amount) || '0');
    if (localStorage.getItem(LOCAL_STORAGE_KEY.reachDate)) {
      this.reachDate = new Date(localStorage.getItem(LOCAL_STORAGE_KEY.reachDate));
      this.setDataMonthly();
    } else {
      this.onChangeMonth('next');
    }
  }

  onChangeMonth(dir: string) {
    const newMonth = this.reachDate.getMonth();
    const currentMonth = Number(moment(this.reachDate).format('MM'));
    const currentYear = Number(moment(this.reachDate).format('YYYY'));
    let currentDay = Number(moment(this.reachDate).format('DD'));
    switch (dir) {
      case 'next':
        const nextLastDate = this.getDaysOfMonth(currentYear, currentMonth + 1);
        currentDay = nextLastDate < currentDay ? nextLastDate : currentDay;
        this.reachDate = new Date(currentYear, newMonth + 1, currentDay);
        break;
      case 'previous':
        if (this.totalMonth > 1) {
          const prevLastDate = this.getDaysOfMonth(currentYear, currentMonth - 1);
          currentDay = prevLastDate < currentDay ? prevLastDate : currentDay;
          this.reachDate = new Date(currentYear, newMonth - 1, currentDay);
          break;
        }
      default:
        break;
    }
    this.setDataMonthly();
  }

  getDaysOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  setDataMonthly() {
    let months: number;
    const currentDate = new Date();
    months = (this.reachDate.getFullYear() - currentDate.getFullYear()) * 12;
    months -= currentDate.getMonth() + 1;
    months += this.reachDate.getMonth();
    if (this.reachDate.getDate() >= currentDate.getDate()) {
      months++;
    }
    this.totalMonth = months <= 0 ? 0 : months;
    const monthlyAmount = this.amount / this.totalMonth;
    this.monthlyAmount = '$' + monthlyAmount.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    localStorage.setItem(LOCAL_STORAGE_KEY.amount, this.amount.toString());
    localStorage.setItem(LOCAL_STORAGE_KEY.reachDate, this.reachDate.toISOString());
  }

  onConfirm() {
    this.snackBar.open(this.translateService.instant('CONFIRM_TITLE'), this.translateService.instant('CLOSE'), {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }
}
