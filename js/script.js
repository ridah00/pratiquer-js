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
function text_to_grey() {
  document.getElementById("text_output").classList.remove("text-success", "text-danger", "text-secondary");
  document.getElementById("text_output").classList.add("text-secondary");
}
function text_to_origin(){
  document.getElementById("text_input").value=null;
  document.getElementById("text_output").innerText="";
  document.getElementById("text_output").classList.remove("text-success", "text-danger", "text-secondary");
}
document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("go_live").click();
    }
});

document.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 27) {
      document.getElementById("reset_button").click();
  }
});


// function changer_couleur(color_) {
//   document.getElementById("text_output").style.color = color_;
// }

function myFunction(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("text_output").style.fontStyle = listValue;
}
