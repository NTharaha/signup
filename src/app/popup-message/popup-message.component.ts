import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.sass']
})
export class PopupMessageComponent {
  showMessage = false;
  message = '';

  closePopup() {
    this.showMessage = false;
    this.message = '';
  }
}