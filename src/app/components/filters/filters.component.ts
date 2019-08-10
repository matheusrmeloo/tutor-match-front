import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private event: Events) {}

  public filtro(key, value) {
    this.event.publish('t:search', {key, value});
  }

  ngOnInit() {}

}
