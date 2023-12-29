import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkinLotComponent } from "../skin-lot/skin-lot.component";

@Component({
    selector: 'app-game-inventory',
    standalone: true,
    templateUrl: './game-inventory.component.html',
    imports: [SkinLotComponent, CommonModule]
})
export class GameInventoryComponent {
  skins = [
    {
      name: 'Nightwish',
      weapon: 'AK-47',
      image: '../../../assets/inventory/ak-47-nightwish(red).png',
      price: 63.16,
      color: 'red',
      isSelected: false
    },
    {
      name: 'Wildfire',
      weapon: 'AWP',
      image: '../../../assets/inventory/awp-wildfire(red).png',
      price: 111.21,
      color: 'red',
      isSelected: false
    },
    {
      name: 'Elite 1.6',
      weapon: 'Dual Berettas',
      image: '../../../assets/inventory/dual-berettas-elite-1.6(blue).png',
      price: 0.26,
      color: 'blue',
      isSelected: false
    },
    {
      name: 'Melondrama',
      weapon: 'Dual Berettas',
      image: '../../../assets/inventory/dual-berettas-melondrama(pink).png',
      price: 7.53,
      color: 'pink',
      isSelected: false
    },
    {
      name: 'Commemoration',
      weapon: 'Famas',
      image: '../../../assets/inventory/famas-commemoration(red).png',
      price: 17.48,
      color: 'red',
      isSelected: false
    },
    {
      name: 'Ensnared',
      weapon: 'MAC 10',
      image: '../../../assets/inventory/mac-10-ensnared(blue).png',
      price: 0.25,
      color: 'blue',
      isSelected: false
    },
    {
      name: 'Foresight',
      weapon: 'MAG 7',
      image: '../../../assets/inventory/mag-7-foresight(blue).png',
      price: 0.20,
      color: 'blue',
      isSelected: false
    },
    {
      name: 'Popdog',
      weapon: 'MAG 7',
      image: '../../../assets/inventory/mag-7-popdog(blue).png',
      price: 0.22,
      color: 'blue',
      isSelected: false
    },
    {
      name: 'Agent',
      weapon: 'MP5-SD',
      image: '../../../assets/inventory/mp5-sd-agent(purple).png',
      price: 3.75,
      color: 'purple',
      isSelected: false
    },
    {
      name: 'Necro Jr.',
      weapon: 'MP5-SD',
      image: '../../../assets/inventory/mp5-sd-necro-jr.(blue).png',
      price: 0.46,
      color: 'blue',
      isSelected: false
    },
    {
      name: 'Abyssal Apparition',
      weapon: 'MP7',
      image: './../../assets/inventory/mp7-abyssal-apparition(pink).png',
      price: 6.21,
      color: 'pink',
      isSelected: false
    },
    {
      name: 'Hydra',
      weapon: 'MP9',
      image: './../../assets/inventory/mp9-hydra(purple).png',
      price: 13.91,
      color: 'purple',
      isSelected: false
    },
  ]
  getTotalPrice() {
    let total = 0;
    let selected = 0;
    for (let skin of this.skins) {
      total = total + skin.price;
      if (skin.isSelected) {
        selected = selected + skin.price;
      }
    }
    if (selected > 0) {
      return selected;
    } else {
      return total;
    }
  }
}
