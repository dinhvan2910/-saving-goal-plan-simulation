import { Component } from '@angular/core';

@Component({
  selector: 'pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <div class="layout-container">
      <header-container></header-container>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class PagesComponent { }
