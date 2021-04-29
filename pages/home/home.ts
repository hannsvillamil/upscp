import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
height: number;
  volumeL: number;
  volumemL: number;
  Cost: number; 
  UPA: number;
  UPB: number;
  Savings: number;   
  SavingsMessage: string;

calculateUPA () {
  this.UPA = this.Cost / (this.volumemL * 1000);

}
calculateUPB (){
  this.UPB = this.Cost / this.volumeL;
}
calculateSavings () {
  this.Savings = this.UPB - this.UPA;
  this.Savings = parseFloat(this.Savings.toFixed(2));

  if (this.UPA > this.UPB) {
    this.SavingsMessage = "Option B is Cheaper!";
  } else if (this.UPA < this.UPB) {
    this.SavingsMessage = "Option A is Cheaper!";
  } else {
    this.SavingsMessage = "Option A and B are the same price!";
  }

}
}