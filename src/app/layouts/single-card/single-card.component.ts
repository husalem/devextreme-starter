import { Component, Input } from '@angular/core';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';

@Component({
  standalone: true,
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
  imports: [DxScrollViewModule]
})
export class SingleCardComponent {
  @Input()
  title!: string;

  @Input()
  description!: string;

  constructor() { }
}
