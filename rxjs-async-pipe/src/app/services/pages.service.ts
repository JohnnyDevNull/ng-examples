import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PagesService {
  private data = new BehaviorSubject<any>(null);

  public data$ = this.data.asObservable().pipe(
    debounceTime(500),
    tap(v => console.warn(`data$: ${v}`))
  );

  public setData(v) {
    this.data.next(v);
  }
}
