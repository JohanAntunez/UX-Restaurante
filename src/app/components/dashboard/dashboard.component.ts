import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40, 75, 43, 34, 29, 44 ],
        label: 'Ventas 2021',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,191,0,0.3)'
      },
      {
        data: [ 44, 29, 34, 43, 75, 40, 55, 56, 81, 80, 59, 65 ],
        label: 'Ventas 2022',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(86,175,240,1)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

  //Chart 2
  public polarAreaChartLabels: string[] = [ 'Western Bacon Cheeseburger', 'Pizza Peperoni', 'Boneless', 'Papas fritas', 'Helado' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 178, 50, 350, 500, 269 ], backgroundColor:[ 'rgba(255,191,0,0.5)', 'rgba(86,175,240,0.5)', 'rgba(236,80,108,0.5)', 'rgba(26,200,88,0.5)', 'rgba(55,32,33,0.5)'] }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: true,
    
  };

  


}
