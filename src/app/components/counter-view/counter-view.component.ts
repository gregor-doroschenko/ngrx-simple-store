import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.css']
})
export class CounterViewComponent {

  @Input() counter: number;

  constructor() { }

}
