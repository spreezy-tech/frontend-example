import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  @Input() message!: string;
  @Output() testEvent = new EventEmitter<string>();

  sendEvent() {
    this.testEvent.emit('Event sent');
  }
}
