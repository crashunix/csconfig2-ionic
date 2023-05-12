import { Component } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-binds',
  templateUrl: 'binds.page.html',
  styleUrls: ['binds.page.scss']
})
export class BindsPage {

  connected: boolean = false;

  private socket: Socket;
  messages: string[] = [];
  message: string = 'aaaaaaaaa';

  constructor() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', () => {
      this.connected = true;
      console.log('Connected to server');
    });
    this.socket.on('message', (message: string) => {
      console.log('Received message:', message);
      this.messages.push(message);
    });
    this.socket.on('disconnect', () => {
      this.connected = false;
      console.log('Disconnected from server');
    });
  }

  pushMessage() {
    console.log("teste");
    this.socket.emit("bind", "say ggez");
  }

}
