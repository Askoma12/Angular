import { Component, OnInit } from '@angular/core';
import {MyTryService} from './my-try.service'; //==---==//

@Component({
  selector: 'app-my-try',
  templateUrl: './my-try.component.html',
  providers: [MyTryService] //==---==//
})
export class MyTryComponent implements OnInit {
public info : string;
  constructor(private dataTry: MyTryService) { } //==---==//

  ngOnInit() {
    this.info = this.dataTry.information;
  }

}
