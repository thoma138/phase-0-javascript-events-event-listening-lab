let input = document.getElementById("clicker");

function addingEventListener() {
  input.addEventListener("click", function () {
    alert("I was clicked");
  });
}
addingEventListener();
