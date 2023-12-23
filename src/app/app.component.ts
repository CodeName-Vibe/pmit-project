import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MiniHeaderComponent } from "./mini-header/mini-header.component";
import { ChatComponent } from "./chat/chat.component";
import { CaseFightComponent } from './games/case-fight/case-fight.component';
import { CaseOpeningComponent } from './games/case-opening/case-opening.component';
import { MineFieldComponent } from './games/mine-field/mine-field.component';
import { RouletteComponent } from './games/roulette/roulette.component';
import { SkinUpgradeComponent } from './games/skin-upgrade/skin-upgrade.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    ChatComponent, 
    MiniHeaderComponent, 
    CaseFightComponent, 
    CaseOpeningComponent, 
    MineFieldComponent, 
    RouletteComponent, 
    SkinUpgradeComponent
  ]
})
export class AppComponent {
}
