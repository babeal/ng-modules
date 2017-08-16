import "rxjs/add/operator/let";
import "rxjs/add/observable/of";
import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "sdo-survey-list",
    template: `      
        <table>
            <thead>
                <tr>
                    <th>Number</th>
                    <th>MD</th>
                    <th>TVD</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let survey of surveys$ | async">
                    <td>{{ survey.number }}</td>
                    <td>{{ survey.measuredDepth }}</td>
                    <td>{{ survey.trueVerticalDepth }}</td>
                </tr>
            </tbody>
        </table>
  `,
    styles: [
        `            
  `,
    ],
})
export class SurveysListComponent {

    public surveys$: Observable<any>;

    constructor() {
        this.surveys$ = Observable.of([
            {
                number: 1,
                md: 50,
                tvd: 48
            },
            {
                number: 2,
                md: 100,
                tvd: 89
            },
            {
                number: 3,
                md: 140,
                tvd: 120
            }
        ]);
    }
}
