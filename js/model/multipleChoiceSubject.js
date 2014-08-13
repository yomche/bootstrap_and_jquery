function MultipleChoiceSubject(name){
  this.name = name;
}
MultipleChoiceSubject.prototype.calculation = function(){
  var  multipleChoiceElement = document.getElementsByName(this.name);
  var value = [];
  for(var i = 0; i < multipleChoiceElement.length; i++){
    if(multipleChoiceElement[i].checked == true){
      value.push(multipleChoiceElement[i].value);
    }
  }

  return value;
};
