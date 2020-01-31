import { Component, AfterViewChecked } from '@angular/core';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-comp-two',
  template: `{{service.data$ | async}}`,
})
export class CompTwoComponent implements AfterViewChecked {
  constructor(public service: PagesService) {}

  public ngAfterViewChecked() {
    console.log(`ViewChecked comp-2`);
  }
}
