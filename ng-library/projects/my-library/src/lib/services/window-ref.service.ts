import {Injectable} from '@angular/core';
import {sayHello} from '../functions/say-hello.func';

interface MyWindow extends Window {
  sayHello: () => string;
}

function _window(): Window {
  return window ? window : {
    document: {},
    localStorage: {},
    sessionStorage: {}
  } as Window;
}

@Injectable({ providedIn: 'root' })
export class WindowRefService {
  private readonly window: MyWindow = null;

  public constructor() {
    this.window = _window() as MyWindow;
    this.registerFunctions();
  }

  private registerFunctions() {
    this.window.sayHello = sayHello;
  }

  public nativeWindow(): MyWindow {
    return this.window as MyWindow;
  }

  public nativeDocument(): Document {
    return this.window.document;
  }
}
