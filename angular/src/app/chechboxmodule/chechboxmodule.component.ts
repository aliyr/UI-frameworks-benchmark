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
  @Input() customStyle: object;
  @Input() eachID: string;



  setValue() {
this.checked = !this.checked
  }
}
