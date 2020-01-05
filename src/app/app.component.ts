import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  context01: CanvasRenderingContext2D;

  @ViewChild('mycanvas01',{static:true}) mycanvas01: ElementRef;

  ngOnInit() {
    this.context01 = this.mycanvas01.nativeElement.getContext('2d');
    let mycanvas01 = new Chart(this.context01, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Data01',
          backgroundColor: 'rgba(255, 255, 153, 0.5)',
          borderColor: "rgba(255, 99, 132, 0)",
          pointRadius: 0,
          fill: true,
          data: [
            { x: 0, y: 2 },
            { x: 1, y: 1 },
            { x: 2, y: 2.5 },
            { x: 3, y: 5 },
            { x: 4, y: 3 },
            { x: 5, y: 4 },
            { x: 6, y: 9 },
            { x: 7, y: 7 },
            { x: 8, y: 12 },
          ],
        },{
          label: 'Data02',
          backgroundColor: 'rgba(153, 255, 255, 0.5)',
          borderColor: "rgba(255, 99, 132, 0)",
          pointRadius: 0,
          fill: true,
          data: [
            { x: 0, y: 1 },
            { x: 1, y: 4 },
            { x: 2, y: 8 },
            { x: 3, y: 12 },
            { x: 4, y: 1 },
            { x: 5, y: 5 },
            { x: 6, y: 2 },
            { x: 7, y: 3 },
            { x: 8, y: 1 },
          ],
        }]
      },
      options: {
        responsive: true,
        tooltips: {
          mode: 'index',
      intersect: false,
        },
        title: {
          display: true,
          text: 'Angular & Chart.js'
        },
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            scaleLabel: {
              labelString: 'X',
              display: true,
            }
          }],
          yAxes: [{
            type: 'linear',
            scaleLabel: {
              labelString: 'Y',
              display: true
            }
          }]
        }
      }
    });
  }
}
