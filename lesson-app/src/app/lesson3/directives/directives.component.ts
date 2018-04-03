import {Component, OnInit, NgModule} from '@angular/core';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    settings = {
        qaccent: false,
        error: true,
        highlighted: false
    }
}
