import { Component } from '@angular/core';
import { GameInventoryComponent } from "../../utilities/game-inventory/game-inventory.component";

@Component({
    selector: 'app-mine-field',
    standalone: true,
    templateUrl: './mine-field.component.html',
    imports: [GameInventoryComponent]
})
export class MineFieldComponent {

}
