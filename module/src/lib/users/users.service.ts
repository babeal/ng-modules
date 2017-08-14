import {Injectable} from "@angular/core";

@Injectable()
export class UsersService {

    private static counter: number = 0;

    constructor() {
        UsersService.counter = UsersService.counter++;
        console.log("creating users service " + UsersService.counter);
    }
}
