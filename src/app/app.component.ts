import { Component, ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { DrawerService } from '@swimlane/ngx-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
  constructor(private drawerMngr: DrawerService) { }
  openDrawer(direction = 'left', size = 80) {
    this.drawerMngr.create({
      direction,
      template: this.editTmpl,
      size,
      context: 'Alert Everyone!'
    });
  }
}
