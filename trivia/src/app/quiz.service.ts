import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<any> {
    return this.http.get("http://localhost/5433/questions");
  }

  getScores(): Observable<any> {
    return this.http.get("http://localhost/5433/scores");
  }

  postScores(newScore: object): Observable<any> {
    return this.http.post("http://localhost/5433/scores", newScore);
  }
}
