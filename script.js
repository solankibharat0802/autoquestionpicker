// // // let obj={

// // //     name:"bhart",
// // //     age:13,
// // //     roll_no:90,
// // //     greet:  function() {
// // //         console.log("age");

// // //     },

// // //     add:()=>{
// // //        let  a=9+9;
// // //         return a;

// // //     }

// // // } 




// // // let obj2={
// // //     Subject:"Sports",
// // //     class:12,
// // //     roll_no:90,

// // // }

// // // obj2.class=5;

// // // const obj4={...obj,...obj2};
// // // console.log(obj4)
// // // const obj2 = window.document.getElementById("option123");
// // // obj2.style.backgroundColor = "pink";

// // // function timmer(){
    

// // // const timer= document.getElementById("roots");
// // // const current_time =new Date();
// // // const live_time= current_time.toLocaleTimeString();
// // // timer.innerHTML=live_time;

// // // }

// // // function eventdate(){
// // //     const date1=new Date();
// // //     const date2=new Date("2028-06-21");
// // //     const date=date2-date1;
// // //     const Month=Math.floor((date/(1000*60*60*24)));
// // //     document.getElementById("month").innerHTML=1;

// // //     const days=Math.floor((date/(1000*60*60))%24);
// // //     document.getElementById("days").innerHTML=days;

// // //     const minutes=Math.floor((date/(1000*60))%60);
// // //     document.getElementById("minutes").innerHTML=minutes;


// // //     const second=Math.floor((date/(1000))%60);
// // //     document.getElementById("seconds").innerHTML=second;




// // // }

// // // setInterval(timmer,1000);

// // // function timmer() {
// // //     const timer = document.getElementById("roots"); // Correct ID
// // //     const current_time = new Date();
// // //     const live_time = current_time.toLocaleTimeString();
// // //     timer.innerHTML = live_time;
// // //   }
  
// // //   function eventdate() {
// // //     const current_date = new Date();
// // //     const event_date = new Date("2028-07-14"); // Update the event date if incorrect
// // //     const time_diff = event_date - current_date;
  
// // //     // Calculate remaining months (approximate)
// // //     const month = Math.floor(time_diff / (1000 * 60 * 60 * 24 * 30));
// // //     document.getElementById("month").innerHTML = month;
  
// // //     // Calculate remaining weeks
// // //     const week = Math.floor(time_diff / (1000 * 60 * 60 * 24 * 7)) % 4;
// // //     document.getElementById("week").innerHTML = week;
  
// // //     // Calculate remaining days
// // //     const days = Math.floor(time_diff / (1000 * 60 * 60 * 24)) % 30;
// // //     document.getElementById("days").innerHTML = days;
  
// // //     // Calculate remaining minutes
// // //     const minutes = Math.floor((time_diff / (1000 * 60)) % 60);
// // //     document.getElementById("minutes").innerHTML = minutes;
  
// // //     // Calculate remaining seconds
// // //     const seconds = Math.floor((time_diff / 1000) % 60);
// // //     document.getElementById("seconds").innerHTML = seconds;
// // //   }
  
// //   // Update the live time and event date
// //   // setInterval(timmer, 1000); // Update live time every second
// //   // setInterval(eventdate, 1000); // Update event countdown every second
  
// //   const button = document.querySelector("#btnsum");
// //   const button1 = document.querySelector("#Substration");
// //   const button2 = document.querySelector("#Mulitiple");
// //   const button3 = document.querySelector("#Division");














// //   if (button.addEventListener("click", () => {
// //     const number1 = document.getElementById("sum1");
// //     const number_value1 = Number(number1.value);
// //     const number2 = document.getElementById("sum2");
// //     const number_value2 = Number(number2.value);
// //     const resultsum = number_value1 + number_value2;
// //     const resultsub = number_value1 - number_value2;
// //     const resultmultiple = number_value1 * number_value2;
// //     const resultdiv = number_value1 / number_value2;
    
// //     const re = document.getElementById("result");
// //     re.textContent = `Result: ${resultsum}`;
   

    

    

// //   }));

// //   if (button1.addEventListener("click", () => {
// //     const number1 = document.getElementById("sum1");
// //     const number_value1 = Number(number1.value);
// //     const number2 = document.getElementById("sum2");
// //     const number_value2 = Number(number2.value);
// //     const resultsum = number_value1 + number_value2;
// //     const resultsub = number_value1 - number_value2;
// //     const resultmultiple = number_value1 * number_value2;
// //     const resultdiv = number_value1 / number_value2;
    
// //     const re = document.getElementById("result");
// //     re.textContent = `Result: ${resultsub}`;

    

    

// //   }));

// //   if (button2.addEventListener("click", () => {
// //     const number1 = document.getElementById("sum1");
// //     const number_value1 = Number(number1.value);
// //     const number2 = document.getElementById("sum2");
// //     const number_value2 = Number(number2.value);
// //     const resultsum = number_value1 + number_value2;
// //     const resultsub = number_value1 - number_value2;
// //     const resultmultiple = number_value1 * number_value2;
// //     const resultdiv = number_value1 / number_value2;
    
// //     const re = document.getElementById("result");

// //     re.textContent = `Result: ${resultmultiple}`;

    

    

// //   }));

// //   if (button3.addEventListener("click", () => {
// //     const number1 = document.getElementById("sum1");
// //     const number_value1 = Number(number1.value);
// //     const number2 = document.getElementById("sum2");
// //     const number_value2 = Number(number2.value);
// //     const resultsum = number_value1 + number_value2;
// //     const resultsub = number_value1 - number_value2;
// //     const resultmultiple = number_value1 * number_value2;
// //     const resultdiv = number_value1 / number_value2;
    
// //     const re = document.getElementById("result");
// //     re.textContent = `Result: ${resultdiv}`;

    

    

// //   }));

// //   // const digit_button1 = document.querySelector("#btn1");
// //   // const digit_button2 = document.querySelector("#btn2");

// //   // const digit_button3 = document.querySelector("#btn3");
// //   // const digit_button4 = document.querySelector("#btn4");
// //   // const digit_button5 = document.querySelector("#btn5");
// //   // const digit_button6 = document.querySelector("#btn5");
// //   // const digit_button7 = document.querySelector("#btn6");
// //   // const digit_button8 = document.querySelector("#dbtn7");
// //   // const digit_button9 = document.querySelector("#btn8");
// //   // const digit_button10 = document.querySelector("#btn9");
// //   // const digit_button0 = document.querySelector("#btn0");

// //   // digit_button1.addEventListener(()=>{
// //   //   const number1 = document.getElementById("sum1");
// //   //   number1.value="1"


    

// //   // });
// //   let activeInput = null;

// //   // Add focus event listeners to track the active input field
// //   document.getElementById('sum1').addEventListener('focus', () => {
// //     activeInput = 'sum1';
// //   });
  
// //   document.getElementById('sum2').addEventListener('focus', () => {
// //     activeInput = 'sum2';
// //   });
  
// //   // Add click event listeners to digit buttons
// //   document.querySelectorAll('.digit-button').forEach((button) => {
// //     button.addEventListener('click', () => {
// //       const digit = button.textContent;
  
// //       // Update only the active input field
// //       if (activeInput) {
// //         const inputField = document.getElementById(activeInput);
// //         inputField.value += digit; // Append the selected digit
// //       }
// //     });
// //   });
  
  

// const red=document.getElementById('red');
// const blue=document.getElementById('blue');
// const orange=document.getElementById('blue');
// const purple=document.getElementById('blue');
// const body =document.body;
// const buttons =document.querySelectorAll('button');

// buttons.forEach(button => {
//   button.addEventListener('click',()=>{
//     body.style.backgroundColor=button.id;


//   });
// })
   


// red.addEventListener('click',()=>{
//   body.style.backgroundColor='red';
// })
// red.addEventListener('click',()=>{
//   body.style.backgroundColor='blue';
// })
// red.addEventListener('click',()=>{
//   body.style.backgroundColor='orange';
// })
// red.addEventListener('click',()=>{
//   body.style.backgroundColor='purple';
// })

// Array of questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
  },
  {
    question: "Which is the smallest continent?",
    options: ["Australia", "Europe", "Antarctica", "South America"],
  },
  {
    question: "What is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
  },
  {
    question: "What is the speed of light?",
    options: ["299,792 km/s", "150,000 km/s", "1,080,000 km/h", "None of these"],
  },
  {
    question: "Who discovered penicillin?",
    options: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
  }
];


function getRandomQuestions() {
  const shuffled = questions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
}


function renderQuestions() {
  const quizContent = document.getElementById("quiz-content");
  const randomQuestions = getRandomQuestions();

  randomQuestions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    // questionDiv.classList.add("question");

    const questionText = document.createElement("h3");
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionText);

    const optionsList = document.createElement("ul");
    optionsList.classList.add("options");

    q.options.forEach((option) => {
      const optionItem = document.createElement("li");
      optionItem.innerHTML = `
        <label>
          <input type="radio" name="question${index + 1}" value="${option}">
          ${option}
        </label>
      `;
      optionsList.appendChild(optionItem);
    });

    questionDiv.appendChild(optionsList);
    quizContent.appendChild(questionDiv);
  });
}


window.onload = renderQuestions;
const btn = document.getElementById('refresh');
btn.addEventListener('click', () => {

  const quizContent = document.getElementById('quiz-content');
  quizContent.innerHTML = '';
  

  renderQuestions();
});



function submitQuiz() {
  alert("Thank you for taking the quiz!");
}

