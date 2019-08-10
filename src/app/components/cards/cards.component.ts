import { Component, OnInit } from '@angular/core';
import { TutorsService } from 'src/app/tutors.service';
import { Events } from '@ionic/angular';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [[TutorsService]]
})
export class CardsComponent implements OnInit {

  public list: Array<any>;

  constructor(test: TutorsService, private event: Events) {
    (test.getTeacher('order/name'))
    .then((result: { 'data': Array<any> }) => {
      this.list = result.data;
    });
    this.event.subscribe('t:search', (a) => {
      (test.getTeacher(a.key + '/' + a.value))
      .then((result: { 'data': Array<any> }) => {
        this.list = result.data;
      });
    });

  }

  reciverFeedback(resposta) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', resposta);
  }

  ngOnInit() {
  }

}
