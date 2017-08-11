
import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from '../../menus/menu-item/menu-item.component';
import { MenuService } from '../../services/menu.service';
@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
