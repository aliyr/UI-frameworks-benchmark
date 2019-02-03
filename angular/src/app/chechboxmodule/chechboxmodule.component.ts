import {
  Component,
  Input
} from '@angular/core';


@Component({
  selector: 'checkbox',
  templateUrl: './chechboxmodule.component.html',
  styleUrls: ['./chechboxmodule.component.scss']
})

export class ChechboxmoduleComponent {


  @Input() checked: boolean = false
  @Input() name = "qwerty";
  @Input() customStyle: object;


  setValue() {

    if (this.checked) {
      this.checked = false;

    } else {
      this.checked = true;
    }

  }
  constructor() {

  }



}
