import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.sass']
})
export class ItemsListComponent implements OnInit {
    items: any = [];
  constructor( private itemService: ItemService) {

  }

  showDescription(item): void {
      this.itemService.setDescription(item.description);
  }

  ngOnInit() {
      this.itemService.getItems().subscribe((data) => {
          this.items = data;
      });
  }

}
