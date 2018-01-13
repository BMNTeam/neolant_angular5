import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.sass']
})
export class ItemDescriptionComponent implements OnInit {
  content: string;
  constructor( private itemService: ItemService ) {
  }

  ngOnInit() {
      this.itemService.getDescription().subscribe((data) => {
          this.content = data;
      });
  }


}
