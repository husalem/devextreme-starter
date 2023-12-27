import { Component, Input } from '@angular/core';
import { DxContextMenuModule } from 'devextreme-angular/ui/context-menu';
import { DxListModule } from 'devextreme-angular/ui/list';

import { IUser } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  imports: [DxListModule, DxContextMenuModule],
})
export class UserPanelComponent {
  @Input()
  menuItems: any;

  @Input()
  menuMode!: string;

  @Input()
  user!: IUser | null;

  constructor() {}
}
