import { Component } from '@angular/core';
import { GameInventoryComponent } from "../../utilities/game-inventory/game-inventory.component";

@Component({
    selector: 'app-roulette',
    standalone: true,
    templateUrl: './roulette.component.html',
    imports: [GameInventoryComponent]
})
export class RouletteComponent {

}
