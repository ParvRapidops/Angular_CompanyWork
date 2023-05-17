import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options, SeriesOptionsType } from 'highcharts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A_highCharts';
  public Highcharts = Highcharts;
  public chartOptions : Options= {
    title: { text: 'My First Chart' },
    series: [{ data: [1, 2, 3] }] as SeriesOptionsType[]
  };
}
