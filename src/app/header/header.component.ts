import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  level : Number;
  text : String;
  headerClass : String;

  constructor(){
    this.level = 1;
    this.text = "This is a header";
    this.headerClass = "text-8xl"
  } 
  getHeaderLevel(level : Number){
    switch(level){
      case 1:
        this.headerClass = "text-7xl text-blue-500"
        break
      case 2:
        this.headerClass = "text-6xl text-red-500"
        break
      case 3:
        this.headerClass = "text-5xl text-yellow-500"
        break
      case 4:
        this.headerClass = "text-4xl text-green-500"
        break;
      case 5:
        this.headerClass = "text-3xl text-black";
        break;
      case 6:
        this.headerClass = "text-2xl text-gray-600";
        break;
    }
    return this.headerClass + " font-bold"
  }
  

}
