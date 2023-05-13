import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor() { 
    this.socket = io('http://192.168.5.69:443');
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });
    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
    this.socket.on('message', (message) => {
      console.log('Received message:', message);
    });
  }

  sendMessage(key: string, message: string) {
    this.socket.emit(key, message);
  }

  isConnected(): boolean {
    return this.socket.connected;
  }
}