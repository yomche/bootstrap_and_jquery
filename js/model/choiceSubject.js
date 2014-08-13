function ChoiceSubject(name){
  this.name = name;
}
ChoiceSubject.prototype.calculation = function(){

  var choiceElement = document.getElementsByName(this.name);
  for(var i = 0;i < choiceElement.length; i++){
    var value = '';
    if(choiceElement[i].checked == true){
      value = choiceElement[i].value;
      break;
    }
  }
  return value;
};
