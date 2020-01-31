import { Component, Output, EventEmitter, AfterViewChecked } from '@angular/core';

// tslint:disable:variable-name
@Component({
  selector: 'app-comp-one',
  template: `<input [(ngModel)]="value">`
})
export class CompOneComponent implements AfterViewChecked {
  @Output()
  public valueChanged = new EventEmitter();
  private _value = null;

  get value() {
    return this._value;
  }

  set value(v) {
    this._value = v;
    this.valueChanged.emit(v);
  }

  public ngAfterViewChecked() {
    console.log(`ViewChecked comp-1`);
  }
}
