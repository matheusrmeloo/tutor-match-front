import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorsService {
  constructor(private http: HttpClient) {}
  public getTeacher(str) {
    return new  Promise((resolve) => {
      this.http.get('http://localhost:4000/v1/teacher/' + str)
      .subscribe((data) => {
        resolve(data);
      });
    });
  }
}
