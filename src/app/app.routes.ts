import { Routes } from '@angular/router';
import { CaseFightComponent } from './games/case-fight/case-fight.component';
import { CaseOpeningComponent } from './games/case-opening/case-opening.component';
import { MineFieldComponent } from './games/mine-field/mine-field.component';
import { RouletteComponent } from './games/roulette/roulette.component';
import { SkinUpgradeComponent } from './games/skin-upgrade/skin-upgrade.component';
import { DepositWithdrawComponent } from './games/deposit-withdraw/deposit-withdraw.component';
import { CaseSelectionComponent } from './games/case-selection/case-selection.component';
import { CaseLobbyComponent } from './games/case-lobby/case-lobby.component';

export const routes: Routes = [
  { path: 'case-fight', component: CaseFightComponent },
  { path: 'case-opening', component: CaseOpeningComponent },
  { path: 'mine-field', component: MineFieldComponent },
  { path: '', component: RouletteComponent },
  { path: 'skin-upgrade', component: SkinUpgradeComponent },
  { path: 'inventory', component: DepositWithdrawComponent },
  { path: 'case-selection', component: CaseSelectionComponent },
  { path: 'case-lobby', component: CaseLobbyComponent },
];
