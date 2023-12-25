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
import { CaseLobbyComponent } from './games/case-lobby/case-lobby.component';
import { CaseSelectionComponent } from './games/case-selection/case-selection.component';
import { CaseLotComponent } from './utilities/case-lot/case-lot.component';
import { CaseFightSelectionComponent } from './games/case-fight-selection/case-fight-selection.component';

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
    SkinUpgradeComponent,
    CaseLobbyComponent,
    CaseSelectionComponent,
    CaseLotComponent,
    CaseFightSelectionComponent
  ]
})
export class AppComponent {
  status = false;
  priseWon() {
    this.status = true;
    setTimeout(() => {
      this.status = false;
    }, 2500);
  }
}
