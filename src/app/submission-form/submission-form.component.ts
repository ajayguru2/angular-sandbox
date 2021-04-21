import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {pipe, average, toArray} from 'lazy-collections';
import {element} from 'protractor';

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.css']
})
export class SubmissionFormComponent implements OnInit {
  inputValue = new Subject<number>();
  valueSelected: number;
  valueToBeDisplayed: number;
  private listToBeOperated: number[];
  vanillaValue: number;
  fcValue: number;
  constructor() {
    this.inputValue.subscribe({
      next: value => {
        this.valueToBeDisplayed = value; }
    });
  }
  ngOnInit(): void {
  }

  subscribeToNewValue = () => {
    this.inputValue.next(this.valueSelected);
  }

  // tslint:disable-next-line:typedef
  execute() {
    this.listToBeOperated = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
    // tslint:disable-next-line:prefer-const one-variable-per-declaration
    let listCopy1, listCopy2: number[];
    Object.assign(listCopy1, this.listToBeOperated);
    Object.assign(listCopy2, this.listToBeOperated);
    this.executeLazyCollection(listCopy1);
    this.executeVanilla(listCopy2);
  }

  // tslint:disable-next-line:typedef
  private executeLazyCollection(listCopy1) {
    let sum = 0;
    // tslint:disable-next-line:no-shadowed-variable
    listCopy1.forEach((element) => {
      sum = sum + element;
    });
    // tslint:disable-next-line:no-shadowed-variable
    const average = sum / listCopy1.length;
    this.vanillaValue = average;
    console.log(average);
  }


  // tslint:disable-next-line:typedef
  private executeVanilla(listCopy2) {
    const program = pipe(average());
    const averagea = program(listCopy2);
    console.log(averagea);
  }
}

