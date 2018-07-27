import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs/BehaviorSubject';
import { Observable } from '../../../node_modules/rxjs/Observable';

export interface DragData {
  tag: string;
  data: any;
}

@Injectable()
export class DragDropService {

  private _dragData = new BehaviorSubject<DragData>(null);

  setDragData(data: DragData) {
    this._dragData.next(data);
  }

  getDragData(): Observable<DragData> {
    return this._dragData.asObservable();
  }

  clearDragData() {
    this._dragData.next(null);
  }
}
