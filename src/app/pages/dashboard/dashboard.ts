import { DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { UserStore } from '../../core/user.store';
import { PageHeaderComponent } from '../../shared/page-header';

@Component({
  imports: [DatePipe, DecimalPipe, PageHeaderComponent, RouterLink, UpperCasePipe],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class DashboardPage {
  protected readonly store = inject(UserStore);
  private readonly route = inject(ActivatedRoute);
  protected readonly accessDeniedReason = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get('accessDenied'))),
    { initialValue: null },
  );
  protected readonly today = new Date();
  protected readonly weeklyActivity = [38, 55, 43, 68, 50, 79, 61, 72, 48, 88, 64, 76, 57, 93, 70, 83, 60, 75, 51, 89, 67, 78, 56, 96, 72, 85, 63, 80];
}