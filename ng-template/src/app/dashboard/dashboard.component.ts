import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  colorselected:string="";
  userColor:string="";
  changecolor() {
    this.colorselected = this.userColor.trim();
    console.log(this.colorselected)   
    };
}

