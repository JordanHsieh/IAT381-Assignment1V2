var secondsToWaitBeforeSave = 2;

APP.controller('QuizCtrl', function($scope, $route) {
  var questions = {
    q1: {
      question: '',
      number: 'Question 1',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      radio: ''
    },
    q2: {
      question: '',
      number: 'Question 2',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      radio: ''
    },
    q3: {
      question: '',
      number: 'Question 3',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      radio: ''
    },
    q4: {
      question: '',
      number: 'Question 4',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      radio: ''
    },
    q5: {
      question: '',
      number: 'Question 5',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      radio: ''
    }
  };

  console.log($route);

  var question = $route.current.params.question;
  $scope.question = questions[question];

  var question1 = $scope.question1;
  var question2 = $scope.question2;
  var question3 = $scope.question3;
  var question4 = $scope.question4;
  var question5 = $scope.question5;
  // $scope.master = {};

  $scope.save = function(question) {
      console.log(this);
      //this is the button element that was clicked, this.item will be the item in scope.buttons
      console.log(question);
      console.log("SCOPE --> " + $scope);

      if($scope.question.number == 'Question 1')
      {
        question1 = angular.copy(question);
        console.log("HEY QUESTION 1");
      }
      else if($scope.question.number == 'Question 2')
      {
        question2 = questions[question];
        console.log("HEY QUESTION 2");
      }
      else if($scope.question.number == 'Question 3')
      {
        question3 = questions[question];
        console.log("HEY QUESTION 3");
      }
      else if($scope.question.number == 'Question 4')
      {
        question4 = questions[question];
        console.log("HEY QUESTION 4");
      }
      else if($scope.question.number == 'Question 5')
      {
        question5 = questions[question];
        console.log("HEY QUESTION 5");
      }

      $scope.master = angular.copy(question);
  };

  $scope.back = function() {
      console.log(this);
      //this is the button element that was clicked, this.item will be the item in scope.buttons

      setTimeout(function() {
        window.location = '#/createQuiz';
      }, 400);
  };

});