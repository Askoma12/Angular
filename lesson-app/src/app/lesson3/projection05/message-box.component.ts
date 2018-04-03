import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
})
export class MessageBoxComponent implements OnInit {
    visible = true;

    hide() {
        this.visible = false;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
