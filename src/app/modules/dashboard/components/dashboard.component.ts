import { Component } from '@angular/core';
import { StatisticsCardComponent } from './statistics-card/statistics-card.component';
import { IStatisticsItem } from '../models/statistics.model';
import { STATISTICS } from '../constants/statistics.constant';
import { SummaryComponent } from './summary/summary.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    StatisticsCardComponent,
    SummaryComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {
  statistics: IStatisticsItem[] = STATISTICS;
}
