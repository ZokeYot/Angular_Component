import { Component } from '@angular/core';

export interface File{
  url : String;
}

@Component({
  selector: 'app-attaches',
  standalone: true,
  imports: [],
  templateUrl: './attaches.component.html',
  styleUrl: './attaches.component.css'
})
export class AttachesComponent {
  file : File;
  title : String;

  constructor(){
    this.file = {
      url : ""
    }
    this.title = ""
  
  }

}
