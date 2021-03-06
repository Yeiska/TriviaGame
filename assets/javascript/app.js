var time;
var counter = 15;
var correct = 0;
var unanswered = 0;
var answersOptions;
var wrong = 0;

var questions = [
    question1 = {
        question: "What does the Constitution do?",
        answer: "sets up the government,defines the government,protects basic rights of Americans",
        options: "sets up the government",
        options: "defines the government",
        options: "protects basic rights of Americans",
        options: "All above",
        //url: ["../images/usa.jpg"]
    },
    question2 = {
        question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
        answer: "We the People",
        options1: "we are the people",
        options2: "The people",
        //url: ["../images/usa.jpg"]
    },
    question3 = {
        question: "What do we call the first ten amendments to the Constitution?",
        answer: "the Bill of Rights",
        options1: "Declaration of Independence",
        options2: "10 rigths",
        //url: ["../images/usa.jpg"]
    },
    question4 = {
        question: "Who is in charge of the executive branch?",
        answer: "the President",
        options1: "the Vice President",
        options2: "Speaker of the House",
        //url: ["../images/usa.jpg"]
    },
    question5 = {
        question: "What are the two parts of the U.S. Congress?*",
        answer: "the Senate and House (of Representatives)",
        options1: "Us or national legislator",
        options2: "All above",
        //url: ["../images/usa.jpg"]
    },
    question6 = {
        question: "We elect a U.S. Senator for how many years?",
        answer: "six (6)",
        options1: "two",
        options2: "four",
        //url: ["../images/usa.jpg"]
    },
    question7 = {
        question: "Who does a U.S. Senator represent?",
        answer: "all people of the state",
        options1: "all the people of the nation",
        options2: "All above",
        //url: ["../images/usa.jpg"]
    },
    question8 = {
        question: "Who signs bills to become laws?",
        answer: "the President",
        options1: "the Vice President",
        options2: "All above",
        //url: ["../images/usa.jpg"]
    },
    question9 = {
        question: "What do we show loyalty to when we say the Pledge of Allegiance?",
        answer: "the United States,the flag",
        options1: "The United State",
        options2: "The President",
        //url: ["../images/usa.jpg"]
    },
    question10 = {
        question: "Who wrote the Declaration of Independence?",
        answer: "(Thomas) Jefferson",
        options1: "(Franklin) Roosevelt",
        options2: "(John) Jay",
        //url: ["../images/usa.jpg"]
    },
    question11 = {
        question: "When was the Declaration of Independence adopted?",
        answer: "July 4, 1776",
        options1: "July 4, 1787",
        options2: "1778",
        //url: ["../images/usa.jpg"]
    },
    question12 = {
        question: "When was the Constitution written?",
        answer: "1787",
        options1: "1776",
        options2: "1778",
        //url: "usa.jpg"
    },
    question13 = {
        question: "Who is the “Father of Our Country”?",
        answer: "(George) Washington",
        options1: "(Alexander) Hamilton",
        options2: "(James) Madison",
        //url: ["../images/usa.jpg"]
    },
    question14 = {
        question: "Before he was President, Eisenhower was a general. What war was he in?",
        answer: "World War II",
        options1: "World War I",
        options2: "Korean War",
        //url: ["../images/usa.jpg"]
    },
    question15 = {
        question: "What did Martin Luther King, Jr. do?",
        answer: "fought for civil rights, worked for equality for all Americans",
        options1: "fought for civil rights",
        options2: "freed the slaves",
        //url: ["../images/usa.jpg"]
    }
]
function reset() {
    time = setInterval(function () {
        time = 15;
        counter = 15;
        correct = 0;
        unanswered = 0;
        wrong = 0;
        // if (counter == 0) {
        //     clearInterval(time);
        // };
        //setInterval(counter);

    });
    questionDisplay();
    $("#time").html('Time Remainig: ' + counter);
    counter--;
};


$("#reset").on("click", function () {
    time = 15;
    correct = 0;
    unanswered = 0;
    wrong = 0;
    counter = 15;
    questionDisplay();
    $("#time").html('Time Remainig: ' + counter);
    counter--;
});


//seleting a random question from question array
var questionSelect;
var show1;
var show2;
var show3;
function questionDisplay() {
    questionSelect = questions[Math.floor(Math.random() * 14) + 1];
    console.log(questionSelect);

    var temp1 = JSON.stringify(questionSelect.question);
    show1 = JSON.stringify(questionSelect.answer);
    show2 = JSON.stringify(questionSelect.options1);
    show3 = JSON.stringify(questionSelect.options2);;
    //console.log(temp.question);
    $("#question").text('Question: ' + temp1);
    $("#answerOptions1").text(show1);
    $("#answerOptions2").text(show2);
    $("#answerOptions3").text(show3);
}
questionDisplay();

$("body").on("click", ".show", function (event) {
    event.preventDefault();
    selectedAnswer = $(this).text();
    console.log("Selected " + selectedAnswer);

    if (selectedAnswer === show1) {
        correct++;
        //setTimeout(2000);
        alert("Correct!!");
        questionDisplay();

    } else {

        alert("Wrong!!!" + " The correct answer is: " + show1);
        wrong++;
        //$(".showAnswer").html(show1);
        questionDisplay();
    }
});
gameOver();

function gameOver() {

    if (counter < 1) {
        //counter++;
        alert("Game over!! " + " Correct answers: " + correct + " wrong answers: " + wrong);
        reset()
        //Counter = 15;
    }
}

function noSelection() {
    if (!show1 || !show2 || !show3) {
        unanswered++;
        console.log(unanswered);
        alert("unanswered!!!" + " The correct answer is: " + show1);
        questionDisplay();
    }
}


$("#start").on("click", function (event) {
    $("#start").hide();
    $("#play").show();
    time = setInterval(function () {
        if (counter == 0) {
            clearInterval(time);
            setInterval(counter);
        }
        if (counter > 0) {
            counter--;
        }

        $("#time").html('Time Remainig: ' + counter);
        if (counter < 0) {
            setInterval(counter);
            reset();
        }
        //questionDisplay();
        //alert("Game over" + "Correct answers: " + correct + "wrong answers:" + wrong);
    }, 1000);

    questionDisplay();
    if (time === counter) {
        reset();
    }

    $("#reset").show();

});
// function passTime() {
//     if (setInterval(counter) == 3000) {
//         unanswered++;
//         questionDisplay();
//     }
// };

//on click buttom start load page with game
//show time remain to answer question and also runing time
//show question with options' answers to be selected
//if answer selected correct display text is correct
//add 1 to answers rigth
//and display next question with answer' option to be selected
//else display wrong answer selected
//and show correct answer
//add 1 to wrong answer
//display next question to answer
//if not selected any answers add 1 to unanswered and display correct answer
//when time remaining = 0 stop game
//show text All done!! Here how you did:
//display numers of correct answer:, numers of wrong answer:, and unanswered
//reset game to star over with button.