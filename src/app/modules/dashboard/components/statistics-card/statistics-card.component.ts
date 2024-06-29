import { Component, InputSignal, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { IStatisticsItem } from '@modules/dashboard/models/statistics.model';

@Component({
  selector: 'app-statistics-card',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.scss'
})
export class StatisticsCardComponent {
  config: InputSignal<IStatisticsItem> = input.required(); 
}
