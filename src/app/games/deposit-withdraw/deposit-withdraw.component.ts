import { Component } from '@angular/core';
import { ShopInventoryComponent } from "../../utilities/shop-inventory/shop-inventory.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deposit-withdraw',
  standalone: true,
  templateUrl: './deposit-withdraw.component.html',
  imports: [ShopInventoryComponent, CommonModule]
})
export class DepositWithdrawComponent {
  inOutStatus = 1;
  statusText = [
    'Deposit',
    'Withdraw'
  ]
}
