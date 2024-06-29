import { Component } from '@angular/core';
import { SUMMARY_FOOTER_STATISTICS, SUMMARY_HEADER_STATISTICS } from '@modules/dashboard/constants/statistics.constant';
import { IStatisticsItem } from '@modules/dashboard/models/statistics.model';
import { StatisticsCardComponent } from '../statistics-card/statistics-card.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    StatisticsCardComponent
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  headerStatistics: IStatisticsItem[] = SUMMARY_HEADER_STATISTICS;
  footerStatistics: IStatisticsItem[] = SUMMARY_FOOTER_STATISTICS;
}
