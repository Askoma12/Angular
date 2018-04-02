import { Component} from '@angular/core';

@Component({
  selector: 'app-output03',
  templateUrl: './output03.component.html',
  styleUrls: ['./output03.component.css']
})
export class Output03Component {
    tickHead1(value) {
    console.log('head1 - ' + value);
    }
    tickHead2(value) {
        console.log('head2 - ' + value);
    }
}
