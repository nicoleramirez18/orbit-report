import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-count',
  templateUrl: './orbit-count.component.html',
  styleUrls: ['./orbit-count.component.css']
})
export class OrbitCountComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  count(type: string): number {
    let arr = [];
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === type) {
        arr.push(this.satellites[i].name);
      }
    }
    return arr.length;
  }

}
