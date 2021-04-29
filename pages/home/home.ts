import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
height: number;
  volumemL: number;
  cost1: number; 
  volumeL: number;
  cost2: number; 

  UPA: number;
  UPB: number;
  savings: number;   
  UPS: string;

calculateUPS () {
  this.UPA = (this.cost1 / this.volumemL) * 1000;
  this.UPB = this.cost2 / this.volumeL;
  this.savings = this.UPA - this.UPB;
  this.savings = parseFloat(this.savings.toFixed(2));


  if (this.UPA > this.UPB) {
    this.UPS = "Option B is Cheaper!";
  } else if (this.UPA < this.UPB) {
    this.UPS = "Option A is Cheaper!";
  } else {
    this.UPS = "Option A and B are the same price!";
  }

}
}