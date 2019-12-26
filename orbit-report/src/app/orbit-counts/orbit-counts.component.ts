import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  constructor() { }

  @Input() satellites: Satellite[];

  ngOnInit() {
  }

  objectCount(objectType: string) {
    let totalCount:number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type === objectType) {
        totalCount ++;
      }
    }
    return totalCount;
  }

}
