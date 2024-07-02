import { Component } from '@angular/core';
import { SUMMARY_FOOTER_STATISTICS, SUMMARY_HEADER_STATISTICS } from '@modules/dashboard/constants/statistics.constant';
import { IStatisticsItem } from '@modules/dashboard/models/statistics.model';
import { StatisticsCardComponent } from '../statistics-card/statistics-card.component';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    StatisticsCardComponent,
    BaseChartDirective
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  headerStatistics: IStatisticsItem[] = SUMMARY_HEADER_STATISTICS;
  footerStatistics: IStatisticsItem[] = SUMMARY_FOOTER_STATISTICS;
  barChartLegend = true;
  barChartPlugins = [];
  dataCount:number = 7;
  numberCFG = {count: this.dataCount, min: 0, max: 100};

  barChartData: ChartConfiguration<'line' | 'bar'>['data'] = {
    labels: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ],
    datasets: [
      {
        label: '',
        data: [ 65, 59, 50, 81, 56, 55, 40 ],
        borderColor: "#828ca0",
        backgroundColor: "#828ca0",
        stack: 'combined',
        type: 'bar'
      },
      {
        label: '',
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        borderColor: "#828ca0",
        backgroundColor: "#828ca0",
        stack: 'combined',
        barThickness: 20,
        pointBorderWidth: 10,
        pointStyle: 'rect'
      }
    ]
  };

  barChartOptions: ChartConfiguration<'bar' | 'line'>['options'] = {
    responsive: false,
    scales: {
      y: {
        stacked: true
      }
    }
  };
}
