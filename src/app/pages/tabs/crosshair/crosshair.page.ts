import { Component } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-crosshair',
  templateUrl: 'crosshair.page.html',
  styleUrls: ['crosshair.page.scss']
})
export class CrosshairPage {

  currentCrosshairGap: number = 0;
  currentCrosshairSize: number = 0;

  constructor(private socketService: SocketService) {}

  crosshairGap(value: number) {
    this.currentCrosshairGap = this.currentCrosshairGap + (1 * value);
    this.socketService.command(`cl_crosshairgap ${this.currentCrosshairGap}`);
  }
  
  crosshairSize(value: number) {
    this.currentCrosshairSize = this.currentCrosshairSize + (1 * value);
    this.socketService.command(`cl_crosshairsize ${this.currentCrosshairSize}`);
  }

}
