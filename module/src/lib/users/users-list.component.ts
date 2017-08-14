import "rxjs/add/operator/let";
import "rxjs/add/observable/of";
import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { UsersService } from "./users.service";

@Component({
    selector: "sdo-users-list",
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
export class UsersListComponent {

    public books$: Observable<string[]>;

    constructor(service: UsersService) {
        this.books$ = Observable.of([
            "user1",
            "user2",
            "user3"
        ]);
    }
}
