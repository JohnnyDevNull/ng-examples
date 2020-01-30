import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';

export class AppReuseStrategy implements RouteReuseStrategy {
  private storedRouteHandles = new Map<string, DetachedRouteHandle>();

  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !!route.data.reuse;
  }

  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    this.storedRouteHandles.set(this.getPath(route), handle);
  }

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.data.reuse && this.storedRouteHandles.has(this.getPath(route));
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.storedRouteHandles.has(this.getPath(route));
  }

  private getPath(route: ActivatedRouteSnapshot): string {
    return'/' + route.pathFromRoot
      .map(r => r.url)
      .filter(i => i.length > 0)
      .join('/');
  }
}
