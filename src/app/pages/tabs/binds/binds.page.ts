import { Component } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-binds',
  templateUrl: 'binds.page.html',
  styleUrls: ['binds.page.scss']
})
export class BindsPage {

  isModalOpen = false;

  message: string = "";
  messages: string[] = [];

  constructor(private socketService: SocketService) {}

  pushMessage = (message: string) => {
    this.socketService.sendMessage("say", message);
  }

  newMessage = (message: string) => {
    this.messages.push(message);
    this.message = "";
  }
  
  isConnected = () => {
    return this.socketService.isConnected();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
