function createTest()
{
  var test = new Test();
  test.name = "Sample";

  var step1 = new Step();
  step1.name = "Step1";
  step1.x = 46.169333;
  step1.y = -1.201016;

  var q1 = new Question();
  q1.type = "qcm";
  q1.sentence = "Combien font 2 + 2 ?";
  q1.choices = ["2", "4", "6"];
  q1.answer = "4";

  step1.question = q1;

  var step2 = new Step();
  step2.name = "Step2";
  step2.x = 46.169954;
  step2.y = -1.202342;

  var q2 = new Question();
  q2.type = "open";
  q2.sentence = "Combien font 4 + 4 ?";
  q2.answer = "4";

  step2.question = q2;

  test.steps[0] = step1;
  test.steps[1] = step2;

  test.steps[0].showMe();


  document.getElementById("main-container").innerHTML = JSON.stringify(test);

  var parsed = JSON.parse(JSON.stringify(test));
  var loaded = Object.assign(new Test, parsed);
  loaded.steps.forEach( function(value, index) {
    loaded.steps[index] = Object.assign(new Step, loaded.steps[index]);
    loaded.steps[index].question = Object.assign(new Question, loaded.steps[index].question)
  });


  console.log(loaded);
  loaded.steps[0].showMe();

}
