import { Component, OnInit, OnDestroy } from "@angular/core";
import { BoxService } from "../services/Box.service";
import { Box } from "../models/Box";

@Component({
  selector: 'app-interface-ui',
  templateUrl: './interface-ui.component.html',
  styleUrls: ['./interface-ui.component.css']
})
export class InterfaceUIComponent implements OnInit, OnDestroy {
  box: Box | undefined;
  message: string = '';

  constructor(private boxService: BoxService) { }

  ngOnInit() {
    this.createBox();
  }

  createBox() {
    this.boxService.createBox(this.message).subscribe(
      (response: Box) => {
        this.box = response;
        console.log('Box created:', this.box);
        this.message = ''; // Reset the message to an empty string
      },
      (error) => {
        console.error('Error creating box:', error);
      }
    );
  }

  ngOnDestroy() {
    // Clean up any subscriptions or resources if needed
  }

  playSound() {
    // Implement your playSound logic here
  }

  send() {
    // Implement your send logic here
  }
}
