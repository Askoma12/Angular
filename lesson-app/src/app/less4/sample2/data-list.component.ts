import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";

@Component({
    selector: "data-list",
    templateUrl: "data-list.component.html"
})
export class DataListComponent implements OnInit {
    public itemsSource: string[];

    // private dataService: DataService внедрение зависимости через конструктор
    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.itemsSource = this.dataService.getData();
    }
}