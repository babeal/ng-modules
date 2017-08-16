import "rxjs/add/operator/let";
import "rxjs/add/observable/of";
import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "sdo-survey-list",
    template: `      
        <h1>Edit Survey</h1>
        <label>Number</label><input type="text" />
        <label>MD</label><input type="text" />
        <label>TVD</label><input type="text" />
  `,
    styles: [
        `            
  `,
    ],
})
export class EditSurveyComponent {

    constructor() {}
}
