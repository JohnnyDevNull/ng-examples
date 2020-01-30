import {Observable, of, timer} from 'rxjs';
import {PreloadingStrategy, Route} from '@angular/router';
import {Injectable} from '@angular/core';
import {flatMap} from 'rxjs/operators';

@Injectable()
export class AppPreloadingStrategy implements PreloadingStrategy {
  // tslint:disable-next-line:ban-types
  public preload(route: Route, load: Function): Observable<any> {
    const loadRoute = (delay) => delay
      ? timer(150).pipe(flatMap(_ => load()))
      : load();
    return route.data && route.data.preload
      ? loadRoute(route.data.delay)
      : of(null);
  }
}
