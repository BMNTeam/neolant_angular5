import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import { NgForm} from '@angular/forms';

@Component({
    selector: 'app-add-new-item',
    templateUrl: './add-new-item.component.html',
    styleUrls: ['./add-new-item.component.sass']
})
export class AddNewItemComponent implements OnInit {
    submittable: boolean;

  constructor(private itemService: ItemService) { }

  onSubmit(form: NgForm) {
      this.submittable = false;
      const item = {
          name: form.value.itemName,
          description: form.value.itemDescription
      };
      this.itemService.addItem(item).subscribe((data) => {
          this.submittable = true;
      });
  }
  ngOnInit() {
  }

}
