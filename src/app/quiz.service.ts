import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
<<<<<<< Updated upstream
  
  constructor(private router: Router ) { 
    this.router = router;
  }
  
  currentQuestion = 0;
  result=0;
 
  finalResults= [
    {
      endScore: "Low", 
      titleFinal: "title goes here",
      image: "image here",
      desc: "decription goes here"
    },
    {
      endScore: "Middle", 
      titleFinal: "title goes here",
      image: "image here",
      desc: "decription goes here"
    },
    {
      endScore: "High", 
      titleFinal: "title goes here",
      image: "image here",
      desc: "decription goes here"
    }
  ]

// SUM of Tallies

  
// msg = "";

  recordAnswer(index){
 
alert(index);
 let p = this.questions[this.currentQuestion].choices[index].value;
 this.questions[this.currentQuestion].selectedAnswer = p;
    alert(p);
    console.log(p);
    
    // let p = this.questions
    // [this.currentQuestion].choices;
   
    // let y = this.questions[currentQuestion]

    // p.forEach((e) => {
    //   console.log(e.value)
    //   userResult.push(e.value);
    //   console.log("this is the new array");
    //   console.log(userResult);
    // });
   

    if(this.questions.length -1 > this.currentQuestion) {
      // console.log(p);
      this.currentQuestion++;
      this.router.navigate(['/question', this.currentQuestion]);
    } else {

      this.caculateResult();
      this.router.navigate(['/result']);

    }

  }



  caculateResult(){
    //will generate results will use if & else or terinary in order to calculate result
   
    // if(this.result <= 10) {


    //   this.finalResults.final;


    // } else if(this.result > 10 && this.result <= 15) {

    //   this.finalResults.final;


    // } else if(this.result > 15 && this.result <= 20) {

    //   this.finalResults.final;
    // }
  }



  
  questions = [
    {
      id: 1,
      title: "You are Captian of The Black Pearl, what is your first quest?",
      selectedAnswer: 0,
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
      selectedAnswer: 0,
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
      selectedAnswer: 0,
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
      selectedAnswer: 0,
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
      selectedAnswer: 0,
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



 // goPrevQuestion(){
  //   if (this.currentQuestion > 0) {
  //     this.currentQuestion--;
  //     //will go to previous question
  //     this.router.navigate([`/question/${this.currentQuestion}`]);
  //   } else {
  //     //return home
  //     this.router.navigate([`/`]);
  //   }
  // }