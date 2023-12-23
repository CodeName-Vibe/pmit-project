import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkinLotComponent } from "../skin-lot/skin-lot.component";

@Component({
    selector: 'app-game-inventory',
    standalone: true,
    templateUrl: './game-inventory.component.html',
    imports: [SkinLotComponent, CommonModule]
})
export class GameInventoryComponent {
  skins = [,,,,,,,,,,,,,,,,,,,]
}
