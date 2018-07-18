import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private router: Router) {
    this.router = router;
  }

  currentQuestion = 0;
  result: any;
  userResults = [];

  finalResults =
    [
      {
        endScore: 2,
        endResult:
        {
          titleFinal: "1 title goes here",
          image: "image here",
          desc: "decription goes here"
        },
      },
      {
        endScore: 4,
        endResult:
        {
          titleFinal: "2 title goes here",
          image: "image here",
          desc: "decription goes here"
        },
      },
      {
        endScore: 6,
        endResult:
        {
          titleFinal: "3 title goes here",
          image: "image here",
          desc: "decription goes here"
        }
      }
    ];

  // SUM of Tallies




  recordAnswer(index) {

    alert(index);
    let p = this.questions[this.currentQuestion].choices[index].value;
    this.questions[this.currentQuestion].selectedAnswer = p;
    alert(p);
    console.log(p);

    this.userResults.push(p);

    console.log(this.userResults);





    if (this.questions.length - 1 > this.currentQuestion) {
      // console.log(p);
      this.currentQuestion++;
      this.router.navigate(['/question', this.currentQuestion]);
    } else {

      this.caculateResult();
      this.router.navigate(['/result']);

    }

  }

  onClick(){
    window.location.reload();
  }



  caculateResult() {
    //will generate results will use if & else or terinary in order to calculate result
    // this.userResults.reduce(function z(x,y){
    //   return x + y;
    // } );

    this.result = this.userResults.reduce((x, y) => x + y, 0);

    console.log(this.result);


    if (this.result <= 10) {


      this.result = this.finalResults[0];
      console.log(this.result);


    } else if (this.result > 10 && this.result <= 15) {


      this.result = this.finalResults[1];
      console.log(this.result);


    } else if (this.result > 15 && this.result <= 20) {

      this.result = this.finalResults[1];
      console.log(this.result);

    }
  }

  // restartQuiz(){
  //   if (this.currentQuestion > 0) {
  //     this.currentQuestion--;
  //     //will go to previous question
  //     this.router.navigate([`/question/${this.currentQuestion}`]);
  //   } else {
  //     //return home
  //     this.router.navigate([`/`]);
  //   }
  // }




  questions = [
    {
      id: 1,
      title: "You are Captian of The Black Pearl, what is your first quest?",
      selectedAnswer: 0,
      choices: [
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
      selectedAnswer: 0,
      choices: [
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
      selectedAnswer: 0,
      choices: [
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
      selectedAnswer: 0,
      choices: [
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
      selectedAnswer: 0,
      choices: [
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


