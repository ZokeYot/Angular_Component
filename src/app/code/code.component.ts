import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import EditorJS from '@editorjs/editorjs';


@Component({
  selector: 'app-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent {

  editor : EditorJS;

  constructor(){
    this.editor = new EditorJS({
      holder: 'editorjs',
      tools: {
        
      },
    });
  }
  

}
