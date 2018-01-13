import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemService } from './services/item.service';
import { AddNewItemComponent } from './components/add-new-item/add-new-item.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDescriptionComponent } from './components/item-description/item-description.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
      AddNewItemComponent,
      ItemsListComponent,
      ItemDescriptionComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
