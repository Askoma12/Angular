import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-name-card',
    templateUrl: './name-card.component.html',
    inputs: ['firstName', 'lastName']
})
export class NameCardComponent {
    firstName: string;
    private _lastName: string;
    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = 'Ya' + value;
    }

    get fullName(): string {
        return this.firstName + ' ' + this._lastName;
    }
}
