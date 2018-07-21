import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from '../../animate/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onInvite = new EventEmitter<void>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEdit = new EventEmitter<void>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDel = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onmouseenter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.cardState = 'out';
  }

  onInviteClick() {
    this.onInvite.emit();
  }

  onEditClick() {
    this.onEdit.emit();
  }

  onDeleteClick() {
    this.onDel.emit();
  }
}
