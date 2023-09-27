
function clickAlert() {
  alert('I was clicked!');
}

function addingEventListener() {
  const button = document.getElementById('button');
  button.addEventListener('click', clickAlert);
}

addingEventListener();
