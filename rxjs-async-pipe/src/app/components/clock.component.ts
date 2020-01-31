import { Component, OnInit, NgZone, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-clock',
  template: `{{date | date:'dd.MM.yyyy HH:mm:ss'}}`
})
export class ClockComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  public date = new Date();

  public constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.sub.add(timer(0, 1000).subscribe(() => {
        this.date = new Date();
        this.cdr.detectChanges();
      }));
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub = null;
  }
}
