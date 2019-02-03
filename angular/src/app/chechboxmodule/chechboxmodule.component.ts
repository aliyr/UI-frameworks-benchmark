import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './chechboxmodule.component.html',
  styleUrls: ['./chechboxmodule.component.scss']
})
export class ChechboxmoduleComponent implements OnInit {


setValue(){
  if(this.checked){
     this.checked = false;

    }else{
    this.checked = true;
  }
}


  constructor() { }

  @Input() checked : boolean = false;
  @Input() name = "asdbakdj";
  @Input() customStyle :object;

  ngOnInit() {
alert(this.customStyle)
alert(typeof(this.customStyle))

  }

}
