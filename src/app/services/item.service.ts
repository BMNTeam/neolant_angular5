import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ItemService {
    items: any = [];

    description =  new Subject<string>();

    constructor() {
        if (localStorage.getItem('items')) {
            this.items = JSON.parse(localStorage.getItem('items'));
        }
    }

    addItem(payload): any {
        // delete getUniqueId function
        // and id property when work with real API
        const item = {
            id: this.getUniqueId(),
            name: payload.name,
            description: payload.description
        };
        this.items.unshift(item);
        this.saveItems();
        return Observable.of(Boolean);
    }

    getItems(): Observable<any> {
        return Observable.of(this.items);
    }

    saveItems(): void {
        localStorage.setItem('items', JSON.stringify(this.items));
    }
    // Remove when work with real API
    getUniqueId(): number {
        let maxId = 0;
        if (this.items.length) {
            this.items.sort((a, b) => {
                return a > b;
            });
             maxId = this.items[0].id;
        }
        maxId ++;
        return maxId;
    }

    setDescription(desc): any {
        this.description.next(desc);
    }
    getDescription(): Observable<string> {
        return this.description;
    }



}
