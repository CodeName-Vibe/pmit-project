import { Component } from '@angular/core';
import { GameInventoryComponent } from "../../utilities/game-inventory/game-inventory.component";

@Component({
    selector: 'app-deposit-withdraw',
    standalone: true,
    templateUrl: './deposit-withdraw.component.html',
    imports: [GameInventoryComponent]
})
export class DepositWithdrawComponent {

}
