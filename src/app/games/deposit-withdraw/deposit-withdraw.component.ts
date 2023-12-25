import { Component } from '@angular/core';
import { ShopInventoryComponent } from "../../utilities/shop-inventory/shop-inventory.component";

@Component({
    selector: 'app-deposit-withdraw',
    standalone: true,
    templateUrl: './deposit-withdraw.component.html',
    imports: [ShopInventoryComponent]
})
export class DepositWithdrawComponent {

}
