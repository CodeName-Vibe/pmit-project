import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MiniHeaderComponent } from "./mini-header/mini-header.component";
import { ChatComponent } from "./chat/chat.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, HeaderComponent, ChatComponent, MiniHeaderComponent]
})
export class AppComponent {
}
