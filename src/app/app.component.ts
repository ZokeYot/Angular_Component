import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AttachesComponent } from "./attaches/attaches.component";
import { ParagraphComponent } from "./paragraph/paragraph.component";
import { QuoteComponent } from "./quote/quote.component";
import { HeaderComponent } from "./header/header.component";
import { CheckListComponent } from "./check-list/check-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AttachesComponent, ParagraphComponent, QuoteComponent, HeaderComponent, CheckListComponent]
})
export class AppComponent {
  title = 'kitahack_component';
}
