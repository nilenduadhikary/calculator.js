function display(value)
{
  document.getElementById("result").value += value;
}

function clearScreen()
{
  document.getElementById("result").value = "";
}

function calculate()
{
  var q = document.getElementById("result").value;
  var evaluation = eval(q);
  document.getElementById("result").value = evaluation;
}