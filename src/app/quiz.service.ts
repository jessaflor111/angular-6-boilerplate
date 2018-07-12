import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  //All our qui logic exist here, Define your variables here
  description = "I am a string inside of the service";
  constructor() { }
}
