import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {DataService } from "./data.service";
import { DataListComponent} from "./data-list.component";

@NgModule({
    imports: [CommonModule],
    declarations: [DataListComponent],
    providers: [DataService] 
})
export class SimpleServiceModule {
}


