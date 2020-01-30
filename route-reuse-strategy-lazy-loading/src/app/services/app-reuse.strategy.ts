import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';
import {ComponentRef, Injectable} from '@angular/core';

@Injectable()
export class AppReuseStrategy implements RouteReuseStrategy {
  private storedRouteHandles = new Map<string, DetachedRouteHandle>();

  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !!route.data.reuse;
  }

  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    const path = this.getPath(route);
    this.storedRouteHandles.set(path, handle);
  }

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = this.getPath(route);
    return !!route.data.reuse && this.storedRouteHandles.has(path);
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const path = this.getPath(route);
    return this.storedRouteHandles.get(path) as DetachedRouteHandle;
  }

  private getPath(route: ActivatedRouteSnapshot): string {
    return'/' + route.pathFromRoot
      .map(r => r.url)
      .filter(i => i.length > 0)
      .join('/');
  }

  public destroy(path: string | null = null): void {
    if (path && this.storedRouteHandles.has(path)) {
      const handler = this.storedRouteHandles.get(path);
      this.destroySingle(path, handler);
    } else if (this.storedRouteHandles.size > 0) {
      Array.from(this.storedRouteHandles).forEach(
        ([p, h]) => this.destroySingle(p, h)
      );
    }
  }

  private destroySingle(path, handler) {
    ((handler as any).componentRef as ComponentRef<any>).destroy();
    this.storedRouteHandles.delete(path);
  }
}
