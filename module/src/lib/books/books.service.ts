import {Injectable} from "@angular/core";

@Injectable()
export class BooksService {

    private static counter: number = 0;

    constructor() {
        BooksService.counter = BooksService.counter++;
        console.log("creating books service " + BooksService.counter);
    }
}
