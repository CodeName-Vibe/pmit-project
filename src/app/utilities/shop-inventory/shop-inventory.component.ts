import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkinLotComponent } from "../skin-lot/skin-lot.component";

@Component({
    selector: 'app-shop-inventory',
    standalone: true,
    templateUrl: './shop-inventory.component.html',
    imports: [SkinLotComponent, CommonModule]
})
export class ShopInventoryComponent {
  skins = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
}
