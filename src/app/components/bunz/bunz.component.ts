import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bunz',
  templateUrl: './bunz.component.html',
  styleUrls: ['./bunz.component.scss']
})
export class BunzComponent {
  @Input() deviceXs: boolean;
 

}
