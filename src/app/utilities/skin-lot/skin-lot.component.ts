import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-skin-lot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skin-lot.component.html'
})
export class SkinLotComponent {
  @Input() skin: any;
  @Output() selectionChanged = new EventEmitter<any>();
  
  rarity = [0,0,0,0]

  toggleSelection() {
    this.skin.isSelected = !this.skin.isSelected;
    this.selectionChanged.emit(this.skin);
  }

  ngOnInit() {
    if (this.skin.color == 'blue') {
      this.rarity[3] = 1;
    } else if (this.skin.color == 'purple') {
      this.rarity[2] = 1;
    } else if (this.skin.color == 'pink') {
      this.rarity[1] = 1;
    } else if (this.skin.color == 'red') {
      this.rarity[0] = 1;
    }
  }
}
