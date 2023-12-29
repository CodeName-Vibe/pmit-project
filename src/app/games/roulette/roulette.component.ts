import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { GameInventoryComponent } from "../../utilities/game-inventory/game-inventory.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roulette',
  standalone: true,
  templateUrl: './roulette.component.html',
  imports: [GameInventoryComponent, CommonModule]
})
export class RouletteComponent {
  @ViewChild(GameInventoryComponent) gameInventory!: GameInventoryComponent;

  constructor(private cdr: ChangeDetectorRef) {}

  bets = {
    blue: 0,
    brown: 0,
    yellow: 0
  }
  rolls = [
    {
      tBlue: true,
      tBrown: false,
      tYellow: false
    },
    {
      tBlue: false,
      tBrown: true,
      tYellow: false
    },
    {
      tBlue: true,
      tBrown: false,
      tYellow: false
    },
    {
      tBlue: false,
      tBrown: false,
      tYellow: true
    },
    {
      tBlue: false,
      tBrown: true,
      tYellow: false
    },
    {
      tBlue: true,
      tBrown: false,
      tYellow: false
    },
    {
      tBlue: false,
      tBrown: true,
      tYellow: false
    },
    {
      tBlue: true,
      tBrown: false,
      tYellow: false
    },
  ]
  status = {
    d500: false,
    d450: false,
    d400: false,
    d350: false,
    d300: false,
    d250: false,
    d200: false,
    d150: false,
    d100: false,
    d50: true,
    animation: false,
    step: 0
  }
  yourBet: any = [];

  blueClicked() {
    for (let skin of this.gameInventory.skins) {
      if (skin.isSelected) {
        this.bets.blue = this.bets.blue + skin.price; 
        this.yourBet.push(skin)
      }
    }
    this.rouletteSpin(50);
    const self = this;

    setTimeout(() => {
      if (this.rolls[3].tBlue) {
        for (let item of this.yourBet) {
          self.gameInventory.skins.push(item)
        }
      } else {
        for (let item of this.yourBet) {
          self.gameInventory.skins = self.gameInventory.skins.filter(item => !self.yourBet.includes(item));
        } 
      }
    }, 4000);
  }
  brownClicked() {
    for (let skin of this.gameInventory.skins) {
      if (skin.isSelected) {
        this.bets.brown = this.bets.brown + skin.price; 
        this.yourBet.push(skin)
      }
    }
    this.rouletteSpin(50);

    const self = this;

    setTimeout(() => {
      if (this.rolls[3].tBrown) {
        for (let item of this.yourBet) {
          self.gameInventory.skins.push(item)
        }
      } else {
        for (let item of this.yourBet) {
          self.gameInventory.skins = self.gameInventory.skins.filter(item => !self.yourBet.includes(item));
        } 
      }
    }, 4000);
  }
  yellowClicked() {
    for (let skin of this.gameInventory.skins) {
      if (skin.isSelected) {
        this.bets.yellow = this.bets.yellow + skin.price; 
        this.yourBet.push(skin)
      }
    }
    this.rouletteSpin(50);
    const self = this;

    setTimeout(() => {
      if (this.rolls[3].tYellow) {
        for (let item of this.yourBet) {
          self.gameInventory.skins.push(item)
        }
      } else {
        for (let item of this.yourBet) {
          self.gameInventory.skins = self.gameInventory.skins.filter(item => !self.yourBet.includes(item));
        } 
      }
    }, 4000);
  }

  rouletteSpin(duration: number) {
    this.status.animation = true;


    const spin = () => {
      this.status.animation = false;
      this.status.step++;

      if (this.status.step < 5) {
        requestAnimationFrame(() => spin());
      } else if (this.status.step >= 5) {
        this.status.step = 0;

        if (duration <= 500) {
          const nextDuration = duration + 50;
          (this.status as any)[`d${duration}`] = false;
          (this.status as any)[`d${nextDuration}`] = true;
          
          this.rouletteSpin(nextDuration);
        } else {
          this.bets = {
            blue: 0,
            brown: 0,
            yellow: 0
          }
          this.yourBet = [];
        }
      }
    };

    setTimeout(() => {
      spin();
      this.rolls.push(this.getRandomRoll());
      this.rolls.splice(0, 1);
    }, duration);
  }

  getRandomRoll() {
    let rng = Math.random() * 13;

    if (rng <= 6) {
      return {
        tBlue: true,
        tBrown: false,
        tYellow: false
      }
    } else if (rng <= 12) {
      return {
        tBlue: false,
        tBrown: true,
        tYellow: false
      }
    } else {
      return {
        tBlue: false,
        tBrown: false,
        tYellow: true
      }
    }
  }

}
