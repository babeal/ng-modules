import "rxjs/add/operator/let";
import "rxjs/add/observable/of";
import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { BooksService } from "./books.service";

@Component({
    selector: "sdo-book-list",
    template: `            
        <ul>
            <li *ngFor="let book of books$ | async">{{ book }}</li>
        </ul>
  `,
    styles: [
        `            
  `,
    ],
})
export class BookListComponent {

    public books$: Observable<string[]>;

    constructor(service: BooksService) {
        this.books$ = Observable.of([
            "book1",
            "book2",
            "book3"
        ]);
    }
}
