import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { BookListComponent } from "./book-list.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: "find", component: BookListComponent },
            { path: "", component: BookListComponent },
        ]),
    ],
    declarations: [
        BookListComponent,
    ],
    exports: [
        BookListComponent
    ]
})
export class BooksModule {}
