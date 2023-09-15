function addingEventListener() {
    document.addEventListener('DOMContentLoaded', function() {
      const input = document.getElementById('input');
  
      input.addEventListener('click', function() {
        alert('I was clicked!');
      });
  
      return true; 
  }
  
  addingEventListener(); 