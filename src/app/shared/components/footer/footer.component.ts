import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  template: ` <footer><ng-content></ng-content></footer> `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
