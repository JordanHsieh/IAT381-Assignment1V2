APP.controller('questionsController', function($scope, $route) {
  var questions = {
    q1: {
      question: 'Type your first question',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: ''
    },
    q2: {
      question: 'Type your second question',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: ''
    },
    q3: {
      question: 'Type your third question',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: ''
    },
    q4: {
      question: 'Type your fourth question',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: ''
    },
    q5: {
      question: 'Type your fifth question',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: ''
    }
  };

  console.log($route);

  var question = $route.current.params.question;
  $scope.question = questions[question];
});