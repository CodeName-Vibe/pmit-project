import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mini-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mini-header.component.html'
})
export class MiniHeaderComponent {
}
