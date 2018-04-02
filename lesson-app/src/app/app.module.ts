import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {Style01Component} from './style01/style01.component';
import {ChapterComponent} from './style01/chapter.component';
import {Input02Component} from './input02/input02.component';
import {ComponentProps04Component} from './component-props04/component-props04.component';
import {Output03Component} from './output03/output03.component';
import {Projection05Component} from './projection05/projection05.component';
import {CounterComponent} from './input02/counter.component';
import {TimerComponent} from './output03/timer.component';
import {NameCardComponent} from './component-props04/name-card.component';
import {MessageBoxComponent} from './projection05/message-box.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            [
                {path: 'style', component: Style01Component},
                {path: 'input', component: Input02Component},
                {path: 'output', component: Output03Component},
                {path: 'componentProps', component: ComponentProps04Component},
                {path: 'projection', component: Projection05Component},
                {path: '', redirectTo: 'style', pathMatch: 'full'},
            ]
        )],
    declarations: [AppComponent, Style01Component, ChapterComponent, Input02Component, CounterComponent,
        ComponentProps04Component, NameCardComponent, Output03Component, TimerComponent, Projection05Component,
        CounterComponent, MessageBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
