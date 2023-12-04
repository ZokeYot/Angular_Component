import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dictionary } from '@editorjs/editorjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  content : String;
  level : Number;
  cssClass : String;

  constructor() {
    this.content = "";
    this.level = 1;
    this.cssClass = ""
      

  }



}
