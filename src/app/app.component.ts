import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    // CUSTOM_ICON
    this.matIconRegistry.addSvgIconResolver(
      (name, namespace) => {
        const iconPath = './assets/icons' + (namespace ? '/' + namespace : '') + '/' + name + '.svg';
        return this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath);
      },
    );
  }
}
