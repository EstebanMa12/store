import { Component } from '@angular/core';

import { RouterLink, RouterLinkWithHref} from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkWithHref
],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export default class NotFoundComponent {

}
