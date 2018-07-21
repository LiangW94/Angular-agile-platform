import { Component, OnInit, Input, EventEmitter, HostListener } from '@angular/core';
import { itemAnim } from '../../animate/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() taskClick = new EventEmitter<void>();
  widerPriority = 'out';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onmouseenter() {
    this.widerPriority = 'in';
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.widerPriority = 'out';
  }
  onItemClick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(ev: Event) {
    ev.stopPropagation();
  }
}
