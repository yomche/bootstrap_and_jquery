function ChoiceSubject(name){
  this.name = name;
}
ChoiceSubject.prototype.calculation = function(){

  var choiceElement = $('input[name="' + this.name + '"]:checked');
  var value = '';
  if (choiceElement.length > 0){
      value = choiceElement[0].value;
  }
  return value;
};
