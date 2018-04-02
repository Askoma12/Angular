import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'app-timer',
    templateUrl: './timer.component.html',
})
export class TimerComponent {
    private intervalObject: any;
    @Input()
    timerSpeed = 1;

    @Input()
    timerValue = 0;
    @Output()
    tick: EventEmitter<number> = new EventEmitter();

    startTimer() {
        if (this.intervalObject) {
            return;
        }
        this.intervalObject = setInterval(() => {
            this.callback();
        }, this.timerSpeed);
    }

    stopTimer() {
        if (!this.intervalObject) {
            return;
        }
        clearInterval(this.intervalObject);
        this.intervalObject = false;
    }

    private callback() {
        this.timerValue++;
        this.tick.emit(this.timerValue);
    }
}
