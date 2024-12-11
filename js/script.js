function recupererEtAfficher() {
  text = document.getElementById("text_input").value;
  document.getElementById("text_output").innerText = text;
}

function text_to_green() {
  document.getElementById("text_output").classList.remove("text-success", "text-danger", "text-secondary");
  document.getElementById("text_output").classList.add("text-success");
}
function text_to_red() {
  document.getElementById("text_output").classList.remove("text-success", "text-danger", "text-secondary");
  document.getElementById("text_output").classList.add("text-danger");
}
function text_to_grey() {
  document.getElementById("text_output").classList.remove("text-success", "text-danger", "text-secondary");
  document.getElementById("text_output").classList.add("text-secondary");
}
// function changer_couleur(color_) {
//   document.getElementById("text_output").style.color = color_;
// }

function myFunction(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("text_output").style.fontStyle = listValue;
}
