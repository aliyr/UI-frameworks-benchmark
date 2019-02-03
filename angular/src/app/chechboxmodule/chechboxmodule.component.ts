import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'checkbox',
  templateUrl: './chechboxmodule.component.html',
  styleUrls: ['./chechboxmodule.component.scss']
})

export class ChechboxmoduleComponent  {
  

  @Input() checked: boolean = false 
  @Input() name = "asdbakdj";
  @Input() customStyle :object ;




setValue(){
  
  if(this.checked){
     this.checked = false;

    }else{
    this.checked = true;
  }
  alert(this.checked)
  console.log(typeof(this.checked))
  console.log(this.checked)
}
  constructor() {
    
   }



}
