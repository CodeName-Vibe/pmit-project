import { Component } from '@angular/core';
import { GameInventoryComponent } from "../../utilities/game-inventory/game-inventory.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skin-upgrade',
  standalone: true,
  templateUrl: './skin-upgrade.component.html',
  imports: [GameInventoryComponent, CommonModule]
})
export class SkinUpgradeComponent {
  status = [1,0,0,0]
  mode = 0;
  chance = [50,33,20,12.5]
  skinSelection = false;

  modeSelect(mode:any) {
    this.skinSelection = false;
    if (mode == 0) {
      this.status = [1,0,0,0];
      this.mode = 0;
    } else if (mode == 1) {
      this.status = [0,1,0,0];
      this.mode = 1;
    } else if (mode == 2) {
      this.status = [0,0,1,0];
      this.mode = 2;
    } else if (mode == 3) {
      this.status = [0,0,0,1];
      this.mode = 3;
    }
  }

  runUpgrade(mode:any) {
    let rng = Math.random() * 100;
    if (rng < this.chance[mode]) {
      console.log(`you won ${this.chance[mode]}`)
    } else {
      console.log(`you lost ${this.chance[mode]}`)
    }
  }
}
