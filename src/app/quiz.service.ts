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
          titleFinal: "OH NO!",
          imgURL: "https://i.imgur.com/vmxaKK4.png",
          desc: "You're crew has turned against you!"
        },
      },
      {
        endScore: 4,
        endResult:
        {
          titleFinal: "Watch out!",
          imgURL: "https://i.imgur.com/rK2sn05.png",
          desc: "There's whispers of mutiny amongst the crew"
        },
      },
      {
        endScore: 6,
        endResult:
        {
          titleFinal: "Congratulations",
          imgURL: "https://i.imgur.com/0fNNRZy.png",
          desc: " You're a great captain!!"
        }
      }
    ];

  // SUM of Tallies




  recordAnswer(index) {

    
    let p = this.questions[this.currentQuestion].choices[index].value;
    this.questions[this.currentQuestion].selectedAnswer = p;
    
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

      this.result = this.finalResults[2];
      console.log(this.result);

    }
  }

  onClick(){
    this.result = 0;
    this.userResults = [];
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
          a: 'Sail into the sea of monsters seeking rumored treasure',
          value: 2
        },
        {
          a: 'Sail to the port of Tortuga and head to the nearest brothel',
          value: 4
        },
        {
          a: 'Attack an East India Trading Ship in hopes of stealing their cargo',
          value: 3
        },
        {
          a: 'Namastay sailing',
          value: 1
        }
      ],
    },

    {
      id: 2,
      title: "Supply is scarce & food is running low, how do you handle this? ",
      selectedAnswer: 0,
      choices: [
        {
          a: 'Split it evenly amongst everyone',
          value: 4
        },
        {
          a: 'Force a sword fighting tournament to the death, winners get the losers food',
          value: 1
        },
        {
          a: 'Start a fist fighting tournament where the winners get most amount food',
          value: 3
        },
        {
          a: 'Hide half the rations for yourself and split the rest amongst your crew',
          value: 2
        }
      ],
    },

    {

      id: 3,
      title: "After winning loot from an enemy ship, your crew is squabbling because some hid during battle. How do you divide the shares?",
      selectedAnswer: 0,
      choices: [
        {
          a: 'Give the loot to your First Mate and have him figure it out',
          value: 3
        },
        {
          a: 'Split the loot evenlly',
          value: 2
        },
        {
          a: 'Let the accusers play a game of Liar’s Dice. Winners take all.',
          value: 4
        },
        {
          a: 'Keep all the loot',
          value: 1
        }
      ],
    },

    {
      id: 4,
      title: "You have been hit by a terrible storm, half of your crew is either sick or dying & your ship is damaged, what do you do?",
      selectedAnswer: 0,
      choices: [
        {
          a: 'Attack & commandeer the nearest ship and leave the sick and dying behind',
          value: 1
        },
        {
          a: 'Continue on your quest North and wait until you reach land and safety',
          value: 4
        },
        {
          a: 'Head South to rumored lands seeking ObamaCare',
          value: 3
        },
        {
          a: 'Throw the sick and dying overboard to save the rest of the crew.',
          value: 2
        }
      ],


    },
    {
      id: 5,
      title: "You just finished a 6-month expedition to paradise. It is time go and sail for another 10-months, but most of crew does not want to leave. How do you break it to them?",
      selectedAnswer: 0,
      choices: [
        {
          a: 'Take a poll and winning tally decides wether you stay or go',
          value: 3
        },
        {
          a: 'Allow those who wish to remain to stay',
          value: 4
        },
        {
          a: 'Those opposed are traitors and summon them to death!',
          value: 1
        },
        {
          a: 'Get them drunk and convince them out to sea',
          value: 2
        }
      ]
    }
  ]

}


