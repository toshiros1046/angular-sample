import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ChartID } from '../chart';
import { MOCKCHARTS } from '../mock_charts';

@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.css']
})
export class ChartTestComponent implements OnInit {

  chart_id: ChartID = {
    id: 1,
    name: 'Windstorm'
  };

  chartslist =  MOCKCHARTS ;
  selectedChart: ChartID;

  constructor() { }

  ngOnInit() {
  }

  onSelect(chart: ChartID): void {
    this.selectedChart = chart;
  }

}
