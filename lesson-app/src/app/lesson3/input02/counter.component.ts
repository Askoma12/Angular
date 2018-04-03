import { Component, Input } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'counter',
    templateUrl: './counter.component.html',
    inputs: ['name']
})
export class CounterComponent {
    name: string = 'Name';
    @Input()
    counterValue: number = 0;
    @Input('step')
    counterStep: number = 1;
    inkrement() {
        this.counterValue = this.counterValue + this.counterStep;
    }
}
