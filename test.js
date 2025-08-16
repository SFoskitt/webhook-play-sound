(function addAndRemoveElement() {
  // Create a new element
  const newDiv = document.createElement('div');
  newDiv.textContent = 'TURNIPS';
  newDiv.id = 'temp-element';
  document.body.appendChild(newDiv);

  // Remove the element after 5 seconds
  setTimeout(() => {
    const elem = document.getElementById('temp-element');
    if (elem) {
      elem.remove();
    }
  }, 5000);
})();

// Call the function
addAndRemoveElement();