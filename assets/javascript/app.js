$(document).ready(function() {

  var questions;
  var intervalId;
  var currentQuestion;
  var numCorrect, numWrong, numAnswered, numNotAnswered;

  function setQuestions (){

  questions = {
   q1: { q: 'What female singer had an embarrassing wardrobe malfunction during the Super Bowl XXXVIII halftime show?',
         a1: 'Janet Jackson',
         a2:'Britney Spears',
         a3:'Beyonce',
         a4:'Lady Gaga'
    },
    q2:{ q:'Pupusas, handmade thick stuffed corn tortillas, are a traditional dish from what country?',
         a1:'El Salvador',
         a2:'Mexico',
         a3:'Guatemala',
         a4:'Peru'
    },
    q3:{ q:'What is the chemical symbol for Helium?',
         a1:'He',
         a2:'Hm',
         a3:'Hi',
         a4:'Hl'
    },
    q4:{ q:'Which band sang the hit "Hey There Delilah", which reached No. 1 on the Billboard Hot 100 in 2007?',
         a1:"Plain White T''s",
         a2:'The All-American Rejects',
         a3:'Every Avenue',
         a4:'Forever the Sickest Kids'
    },
    q5:{ q:'The first person shooter video game Doom was first released in what year?',
         a1:'1989',
         a2:'1993',
         a3:'1995',
         a4:'1999'
    },
    q6:{ q:'Barack Obama was first elected president of the United States in what year?',
         a1:'2008',
         a2:'2007',
         a3:'2012',
         a4:'2006'
    },
    q7:{ q:'What is the national language of India?',
         a1:'Hindi',
         a2:'Indian',
         a3:'English',
         a4:'Hindustan'
    },
    q8:{ q:'In which 1993 thriller does the protagonist violently lose his cool when a fast food restaurant will not let him order from the breakfast menu?',
         a1:'Falling Down',
         a2:'Pulp Fiction',
         a3:'The Silence of the Lambs',
         a4:'Fight Club'
    },
    q9:{ q:'What French sculptor created the Statue of Liberty?',
         a1:'Frédéric Auguste Bartholdi',
         a2:'Jean Dubuffet',
         a3:'Marcel Duchamp',
         a4:'Edgar Degas'
    },
    q10:{q:'What is the fastest bird in the world when in its hunting dive?',
         a1:'The Peregrine Falcon',
         a2:'The Golden Eagle',
         a3:'The Frigatebird',
         a4:'The Bald Eagle'
    },
    q11:{q:'In what year was Queen Elizabeth II born?',
         a1:'1926',
         a2:'1931',
         a3:'1914',
         a4:'1950'
    },
    q12:{q:'Who was the Prime Minister of Italy during WWII?',
         a1:'Benito Mussolin',
         a2:'Andrea Bocelli',
         a3:'Guiseppe Mazzini',
         a4:'Silvio Berlusconi'
    },
    q13:{q:'Who wrote the Pledge of Allegiance of the United States?',
         a1:'Francis Bellamy',
         a2:'Francis Scott',
         a3:'Abraham Lincoln',
         a4:'George Washington'
    },
    q14:{q:'Now extinct, what shark is thought to have been the largest ever on Earth?',
         a1:'Megalodon',
         a2:'Basking Shark',
         a3:'Goblin Shark',
         a4:'Greenland Shark'
    },
    q15:{q:'The Yangtze River is entirely located in which country?',
         a1:'China',
         a2:'North Korea',
         a3:'Vietnam',
         a4:'Mongolia'
    },
    q16:{q:'Which book was famously rejected by 12 publishers before finally being accepted by Bloomsbury?',
         a1:"Harry Potter and The Philosopher''s Stone",
         a2:'Lord of the Rings',
         a3:'Twillight',
         a4:'The Hobbits'
    },
    q17:{q:'Which famous American musician was fatally shot by his father on April 1, 1984?',
         a1:'Marvin Gaye',
         a2:'Elvis Presley',
         a3:'David Bowie',
         a4:'Barry White'
    },
    q18:{q:'The companies HP, Microsoft and Apple were all started in a what?',
         a1:'Garage',
         a2:'Technology',
         a3:'Basement',
         a4:'Attic'
    },
    q19:{q:'How many US Supreme Court justices are there?',
         a1:'9',
         a2:'7',
         a3:'5',
         a4:'8'
    },
    q20:{q:'What city is the capital of the country Turkey?',
         a1:'Ankara',
         a2:'Instanbul',
         a3:'Ordu',
         a4:'Izmir'
    },
    q21:{q:'In 1893, which country became the first to give women the right to vote?',
         a1:'New Zealand',
         a2:'United State',
         a3:'France',
         a4:'South Africa'
    },
    q22:{q:'Who played James Bond in the 1969 film "On Her Majesty Secret Service"?',
         a1:'George Robert Lazenby',
         a2:'Timothy Dalton',
         a3:'Daniel Craig',
         a4:'Sean Connery'
    },
    q23:{q:'Which actor was the voice of Darth Vader in the original Star Wars films?',
         a1:'James Earl Jones',
         a2:'Forest Whitaker',
         a3:'Mark Hamill',
         a4:'Max von Sydow'
    },
    q24:{q:"Formerly known as Bedloe''s Island, what is the current name of the island where the Statue of Liberty is located?",
         a1:'Liberty Island',
         a2:'Ellis Island',
         a3:'Freedom Island',
         a4:'Governors Island'
    },
    q25:{q:'What year was the two dollar bill last printed in the United States?',
         a1:'2014',
         a2:'2017',
         a3:'2012',
         a4:'2008'
    },
    q26:{q:'Magarine is sold as a replacement for what?',
         a1:'Butter',
         a2:'Cheese',
         a3:'Olive oil',
         a4:'Oregano'
    },
    q27:{q:'In what year did Canada become a country?',
         a1:'1867',
         a2:'1901',
         a3:'1864',
         a4:'1796'
    },
    q28:{q:'What does the "B" stand for in Lyndon B. Johnson?',
         a1:'Baines',
         a2:'Benjamin',
         a3:'Bernard',
         a4:'Bernie'
    },
    q29:{q:"Yerevan, one of the world''s oldest continuously inhabited cities, is the capital of what country?",
         a1:'Armenia',
         a2:'Syria',
         a3:'Greece',
         a4:'Lebanon'
    },
    q30:{q:'Which team won the 2016 Super Bowl?',
         a1:'Denver Broncos',
         a2:'Seattle Seahawks',
         a3:'New England Patriots',
         a4:'Arizona Cardinals'
    },
    q31:{q:'What is a group of lions called?',
         a1:'A pride',
         a2:'A pack',
         a3:'A parliament',
         a4:'A mob'
    },
    q32:{q:'In what year was Nelson Mandela released from prison?',
         a1:'1990',
         a2:'1986',
         a3:'1988',
         a4:'1993'
    },
    q33:{q:'Which US Holiday is celebrated on October 12th?',
         a1:'Columbus Day',
         a2:'Labor Day',
         a3:'Autumn Solstice',
         a4:'Fall Equinox'
    },
    q34:{q:'Who played the title character in the teen sitcom musical comedy "Hannah Montana"?',
         a1:'Miley Cyrus',
         a2:'Hannah Montana',
         a3:'Selena Gomez',
         a4:'Hillary Duff'
    },
    q35:{q:'What is the name of the instrument used to measure earthquakes?',
         a1:'Seismometer',
         a2:'Richter Scale',
         a3:'Seismogram',
         a4:'Earthquake Machine'
    },
    q36:{q:'Which famous singer appeared in the movie Mad Max: Beyond Thunderdome?',
         a1:'Tina Turner',
         a2:'Steven Tyler',
         a3:'Joe Cocker',
         a4:'Karen Carpenter'
    },
    q37:{q:'What sport does Cristiano Ronaldo play?',
         a1:'Soccer',
         a2:'American Football',
         a3:'Tennis',
         a4:'Golf'
    },
    q38:{q:'Who was the last professional hockey player to play without a helmet?',
         a1:'Craig MacTavish',
         a2:'Wayne Gretzky',
         a3:'Ray Bourque',
         a4:'Bobby Orr'
    },
    q39:{q:'What is the capital city of the Philippines?',
         a1:'Manila',
         a2:'Bohol',
         a3:'Saint Phillip',
         a4:'Santiago'
    },
    q40:{q:'In 1967, what band released the hit song "Ruby Tuesday"?',
         a1:'The Rolling Stones',
         a2:'The Beatles',
         a3:'Led Zepplin',
         a4:'Metallica'
    },
    q41:{q:'Brazil was once a colony of which European country?',
         a1:'Portugal',
         a2:'Netherland',
         a3:'Spain',
         a4:'Austria'
    },
    q42:{q:'What animal has the fastest metabolism?',
         a1:'Hummingbird',
         a2:'Shark',
         a3:'Lion',
         a4:'Pig'
    },
    q43:{q:'How many items are in a bakers dozen?',
         a1:'13',
         a2:'12',
         a3:'10',
         a4:'6'
    },
    q44:{q:'How many signs are in the zodiac?',
         a1:'12',
         a2:'10',
         a3:'13',
         a4:'8'
    },
    q45:{q:'How many hydrogen atoms are in one molecule of water?',
         a1:'Two',
         a2:'One',
         a3:'Three',
         a4:'None'
    },
    q46:{q:'Gumbo is a stew that originated in which state?',
         a1:'Louisiana',
         a2:'Alabama',
         a3:'Georgia',
         a4:'Texas'
    },
    q47:{q:'What is the capital of Peru?',
         a1:'Lima',
         a2:'Cusco',
         a3:'Puerto Maldonado',
         a4:'Peru City'
    },
    q48:{q:'Which of the traditional five senses are dolphins believed not to possess?',
         a1:'Smell',
         a2:'Hearing',
         a3:'Sight',
         a4:'Taste'
    },
    q49:{q:'In what year did the French revolution began?',
         a1:'1789',
         a2:'1779',
         a3:'1879',
         a4:'1809'
    },
    q50:{q:'How do you say "hello" in German?',
         a1:'Hallo',
         a2:'allo',
         a3:'halo',
         a4:'Dummkopf'
    }
  }
}

function loadGame(){

  var startButton = $("<div>");
  numCorrect = 0;
  numWrong = 0;
  numAnswered = 0;
  numNotAnswered = 0;

  startButton.text("Start");
  startButton.addClass("game_text");
  startButton.addClass("start_button");

  $("#main_area").html(startButton);
}

function getQuestions(){

  if(Object.keys(questions).length === 0){
      setQuestions();
  }

  var randomPositition = 0;
  var size = Object.keys(questions).length;
  var key;
  var value;

  if(typeof size != 'undefined'){
    randomPositition = Math.floor((Math.random() * size));
  }

  key = Object.keys(questions)[randomPositition];
  value = questions[key];
  delete questions[key];

  return value;
}

  var clock = {
    initialTime: 30,
    time : 0,
    startClock: function() {
     clock.time = clock.initialTime;
     intervalId = setInterval(clock.runClock, 1000);
    },
    runClock: function() {
     if (clock.time < 0) {
      clock.stopClock();
      checkAnswer("");
     }else{
      $("#timer").html("<p class='game_text'> Time Remaining: " + clock.time + " Seconds</p>");
     }
     clock.time = clock.time - 1;
    },
    stopClock: function() {
     clearInterval(intervalId);
    },
    resetClock: function() {
     clock.time = clock.initialTime;
     clearInterval(intervalId);
     if(clock.time >= 0){
      $("#timer").html("<p class='game_text'> Time Remaining: " + clock.time + " Seconds</p>");
     }
    }
  }

  function displayQuestion(question){

    var num = 4;
    var ans = [];

    $("#question").empty();
    $("#main_area").empty();

    $("#question").html("<p>" + question.q + "</p>");

    ans.push(question.a1);
    ans.push(question.a2);
    ans.push(question.a3);
    ans.push(question.a4);

    for(var i = ans.length-1; i > 0; i--){
      var pos = Math.floor(Math.random() * (i + 1));
      var temp = ans[i];
      ans[i] = ans[pos];
      ans[pos] = temp;
    }

    for(var i = 0; i < ans.length; i++){
      var a = $("<p>");

      a.text(ans[i])
      a.addClass("answer");

      $("#main_area").append(a);
    }
  }

  function nextQuestion(){
    currentQuestion = getQuestions();
    displayQuestion(currentQuestion);
    clock.resetClock();
    clock.startClock();
  }

  function rightAnswer(ans){
    return currentQuestion.a1 === ans;
  }

  function checkAnswer(userInput){

    numAnswered ++;

    if(userInput === ""){
     numNotAnswered ++;
    }

   if(numAnswered <= 10){ 
    if(rightAnswer(userInput)){
      numCorrect++;

      clock.stopClock();

      $("#question").html("<p><b>Correct!</b></p>");
      $("#main_area").empty();

      setTimeout(function(){
       if(numAnswered < 10){
        nextQuestion();
       }
      },3000);

    }else if (userInput === ""){

      clock.stopClock();

      $("#question").html("<p><b>Out of Time!</b></p>");
      $("#main_area").empty();

      setTimeout(function(){
       if(numAnswered < 10){
        nextQuestion();
       }
      },3000);

    }else{

      numWrong++;

      clock.stopClock();

      $("#question").html("<p><b>Nope!</b></p>");
      $("#main_area").html("<p>The Correct Answer was: " + currentQuestion.a1 + "</p>");
    
      setTimeout(function(){
       if(numAnswered < 10){
        nextQuestion();
       }
      },3000);

    }
   }

   setTimeout(function(){
    if(numAnswered >= 10){
     var startOverButton = $("<div>");
     startOverButton.text("Start Over?");
     startOverButton.addClass("game_text");
     startOverButton.addClass("start_over_button");

     clock.stopClock();

     $("#question").html("<p>All, done here is how you did!</p>");
     $("#main_area").html("<p>Correct Answers: " + numCorrect + "</p>");
     $("#main_area").append("<p>Incorrect Answers: " + numWrong + "</p>");
     $("#main_area").append("<p>Unanswered: " + numNotAnswered + "</p>");
     $("#main_area").append(startOverButton);
    }
   },3000);

  }

   loadGame();

  $(document).on ("click", ".start_button", function(){

    $("#main_area").empty();

    clock.startClock();
    setTimeout( function(){
     setQuestions();
     currentQuestion = getQuestions();
     displayQuestion(currentQuestion); 
    },1000);

  });

  $(document).on ("click", ".start_over_button", function(){

    numCorrect = 0;
    numWrong = 0;
    numAnswered = 0;
    numNotAnswered = 0;

    $("#main_area").empty();

    clock.startClock();
    currentQuestion = getQuestions();
    displayQuestion(currentQuestion);

  });

  $(document).on ("click", ".answer", function(){
    checkAnswer($(this).text().trim());
  });

});