import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  text : String;
  caption : String;
  alignment : String;

  constructor(){
    this.text = "This is a quote";
    this.caption = "This is an author";
    this.alignment = "left";
  }

  alignText(){
    if(this.alignment !== "center"){
      return 'text-center'
    }
    return 'text-left'
  }


}
