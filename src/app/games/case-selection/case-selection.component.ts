import { Component } from '@angular/core';
import { CaseLotComponent } from "../../utilities/case-lot/case-lot.component";
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-case-selection',
    standalone: true,
    templateUrl: './case-selection.component.html',
    imports: [CaseLotComponent, RouterLink, CommonModule]
})
export class CaseSelectionComponent {
  cases = [,,,,,,,,,,,,,,,,,,,,,,]
}
