

import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-search-result',

  imports: [MatDividerModule],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent {

  @Input({required: true}) chatHistory: Array<any> = [];

  constructor() { }

}
