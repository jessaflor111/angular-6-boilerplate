import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  constructor(private router: Router ) { 
    this.router = router;
  }
  
  currentQuestion = 0;

  goToDirect(){
    
    this.router.navigate(['/question']);
    ;
  }
  
  goPrevQuestion(){
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      //will go to previous question
      this.router.navigate([`/question/${this.currentQuestion}`]);
    } else {
      //return home
      this.router.navigate([`/`]);
    }
  }
  
  goNextQuestion() {
    if (this.questions.length -1 > this.currentQuestion) {
      this.currentQuestion++;
      this.router.navigate(['/question', this.currentQuestion]);
    } else {
      
      //end of questions
    
      this.router.navigate([`/result`]);
      this.caculateResult();
    }
  }
  caculateResult(){
    //will generate results 
  }
  
  questions=[
    {
      id: 1,
      title: "You are Captian of The Black Pearl, what is your first quest?",
      selectedAnswer: '',
      choices:[
        {
          a: 'Sail the open Sea',
          value: 1
        },
        {
          a: 'Steal an adversary ship',
          value: 2
        },
        {
          a: 'Voyage to find a hidden treasure',
          value: 3
        },
        {
          a: 'namastay sailing',
          value: 4
        }
      ],
    },
    
    {
      id: 2,
      title: "The next question of the quiz goes here?",
      selectedAnswer: '',
      choices:[
        {
          a: 'first answer goes here',
          value: 1
        },
        {
          a: 'second answer goes here',
          value: 2
        },
        {
          a: 'third answer goes here',
          value: 3
        },
        {
          a: 'fourth answer goes here',
          value: 4
        }
      ],
    },

    {

      id: 3,
      title: "The next question of the quiz goes here?2",
      selectedAnswer: '',
      choices:[
        {
          a: 'first answer goes here2',
          value: 1
        },
        {
          a: 'second answer goes here2',
          value: 2
        },
        {
          a: 'third answer goes here2',
          value: 3
        },
        {
          a: 'fourth answer goes here2',
          value: 4
        }
      ],
    },

    {
      id: 4,
      title: "The next question of the quiz goes here?3",
      selectedAnswer: '',
      choices:[
        {
          a: 'first answer goes here3',
          value: 1
        },
        {
          a: 'second answer goes here3',
          value: 2
        },
        {
          a: 'third answer goes here3',
          value: 3
        },
        {
          a: 'fourth answer goes here3',
          value: 4
        }
      ],
    

    },
    {
      id: 5,
      title: "The next question of the quiz goes here?",
      selectedAnswer: '',
      choices:[
        {
          a: 'first answer goes here%',
          value: 1
        },
        {
          a: 'second answer goes here%',
          value: 2
        },
        {
          a: 'third answer goes here%',
          value: 3
        },
        {
          a: 'fourth answer goes here%',
          value: 4
        }
      ],
    }
  ]
  
  }