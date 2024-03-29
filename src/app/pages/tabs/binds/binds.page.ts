import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { io, Socket } from 'socket.io-client';
import { Message } from 'src/app/models/message.model';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-binds',
  templateUrl: 'binds.page.html',
  styleUrls: ['binds.page.scss']
})
export class BindsPage {

  isModalOpen = false;

  messageForm: FormGroup;
  messages: Message[] = [];

  cooldown: boolean = false;

  colors = [
    { name: 'Rosa', value: '#F8BBD0' },
    { name: 'Verde', value: '#AED581' },
    { name: 'Azul', value: '#B2EBF2' },
    { name: 'Amarelo', value: '#FFF9C4' },
    { name: 'Lilás', value: '#E1BEE7' },
    { name: 'Pêssego', value: '#FFE0B2' },
  ];

  constructor(private socketService: SocketService, private fb: FormBuilder) {
    const msgs = localStorage.getItem('messages');
    if (msgs) {
      this.messages = JSON.parse(msgs);
    }
    this.messageForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

  pushMessage = (message: string) => {
    this.cooldown = true;
    setTimeout(() => {
      this.cooldown = false;
    }, 500);
    this.socketService.sendMessage(message);
  }

  newMessage = () => {
    if(this.messageForm.valid) {
      this.messages.push(this.messageForm.value);
      localStorage.setItem('messages', JSON.stringify(this.messages));
      this.messageForm.reset({
        title: '',
        text: '',
        color: ''
      });
      this.setOpen(false);
    }
  }

  isConnected = () => {
    return this.socketService.isConnected();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  selectColor(color: string) {
    this.messageForm.get('color')?.setValue(color);
  }

}
