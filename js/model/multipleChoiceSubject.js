function MultipleChoiceSubject(name){
  this.name = name;
}
MultipleChoiceSubject.prototype.calculation = function(){
  //  var choiceElement =
    var multipleChoiceElement = $('input[name="' + this.name + '"]:checked');
    var value = [];
    if (multipleChoiceElement.length > 0){
        for (var i = 0; i < multipleChoiceElement.length; i++){
            value.push(multipleChoiceElement[i].value);
        }
    }
  return value;
}
