import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BookListComponent } from "./books/book-list.component";
import { UsersListComponent} from "./users/users-list.component";
import {BooksService} from "./books/books.service";
import {UsersService} from "./users/users.service";
import { SubModule } from "./users/sub-module";

export const bookRoutes: any = [
    { path: "find", component: BookListComponent },
    { path: "", component: BookListComponent },
];

export const booksModule: NgModule = {
    declarations: [
        BookListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(bookRoutes),
    ],
    providers: [
        BooksService
    ],

    entryComponents: []
};

export const usersRoutes: any = [
    { path: "find", component: UsersListComponent },
    { path: "", component: UsersListComponent },
];

export const usersModule: NgModule = {
    declarations: [
        UsersListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(usersRoutes),
        SubModule,
    ],
    providers: [
        UsersService
    ],

    entryComponents: []
};

export const menuItems: any =[

]
