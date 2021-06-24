import { typeXO } from './../../modules/XO';
import { Component, Input } from '@angular/core';
import { XO } from 'src/app/modules/XO';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value!: typeXO;
}
