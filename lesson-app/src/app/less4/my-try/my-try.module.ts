import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {MyTryComponent} from "./my-try.component";
import {MyTryService} from "./my-try.service"; //==---==//

@NgModule({
    imports: [CommonModule],
    declarations: [MyTryComponent],
    providers: [MyTryService] //==---==//
})
export class MyTryModule {

}