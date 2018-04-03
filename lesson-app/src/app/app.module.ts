import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {Style01Component} from './lesson3/style01/style01.component';
import {ChapterComponent} from './lesson3/style01/chapter.component';
import {Input02Component} from './lesson3/input02/input02.component';
import {ComponentProps04Component} from './lesson3/component-props04/component-props04.component';
import {Output03Component} from './lesson3/output03/output03.component';
import {Projection05Component} from './lesson3/projection05/projection05.component';
import {CounterComponent} from './lesson3/input02/counter.component';
import {TimerComponent} from './lesson3/output03/timer.component';
import {NameCardComponent} from './lesson3/component-props04/name-card.component';
import {MessageBoxComponent} from './lesson3/projection05/message-box.component';
import { DirectivesComponent } from './lesson3/directives/directives.component';

import { DataListComponent } from './less4/sample2/data-list.component';
import { SimpleServiceModule } from './less4/sample2/simple-service.module';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SimpleServiceModule,
        RouterModule.forRoot(
            [
                {path: 'style', component: Style01Component},
                {path: 'input', component: Input02Component},
                {path: 'output', component: Output03Component},
                {path: 'componentProps', component: ComponentProps04Component},
                {path: 'projection', component: Projection05Component},
                {path: 'directives', component: DirectivesComponent},
                {path: 'dependensi', component: DataListComponent},
                {path: '', redirectTo: 'style', pathMatch: 'full'},
            ],

        )],

    declarations: [AppComponent, Style01Component, ChapterComponent, Input02Component, CounterComponent,
        ComponentProps04Component, NameCardComponent, Output03Component, TimerComponent, Projection05Component,
        CounterComponent, MessageBoxComponent, DirectivesComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
