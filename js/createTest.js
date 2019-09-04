function createTest()
{
  var test = new Test();
  test.name = "Sample";

  var step1 = new Step();
  step1.name = "Step1";
  step1.x = 46.166539;
  step1.y = -1.152152;

  var q1 = new Question();
  q1.type = "picture";
  q1.sentence = "Prenez une photo !!";
  q1.answer = "1";

  step1.question = q1;

  var step2 = new Step();
  step2.name = "Step2";
  step2.x = 46.166525;
  step2.y = -1.152930;

  var q2 = new Question();
  q2.type = "qcm";
  q2.sentence = "Combien font 4 + 4 ?";
  q2.answer = "8";

  step2.question = q2;

  test.steps[0] = step1;
  test.steps[1] = step2;


  console.log(test);

  document.getElementById("main-container").innerHTML = JSON.stringify(test);

}
