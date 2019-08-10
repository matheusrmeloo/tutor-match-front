import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.css']
})
export class SeeAllComponent implements OnInit {

  constructor(public event: Events) { }

  public seeAll() {
    this.event.publish('t:search', {key: '', value: ''});
    document.getElementById('remove').style.visibility = 'hidden';
  }

  ngOnInit() {
  }

}
