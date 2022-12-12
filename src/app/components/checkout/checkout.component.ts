import { Component } from '@angular/core';
import { EViewNames } from './EViewNames';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css']

})
export class checkoutComponent {

  public viewActive: string = EViewNames.StepOne;

  public viewOne = EViewNames.StepOne;

  public viewTwo = EViewNames.StepTwo;

  public viewThree = EViewNames.StepThree;

   subtotal:number = 300;
   total:number = 0;
   propina:number =0;


  changeActiveView(viewName: string): void {
    this.viewActive = viewName;
  }

  sumar(){
    this.total = this.subtotal+this.propina;

  }

}
