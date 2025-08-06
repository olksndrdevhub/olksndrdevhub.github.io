document.addEventListener('DOMContentLoaded', function() {
  const projectLink = document.querySelector('.nav-link[href="#projects"]');
  const contactsLink = document.querySelector('.nav-link[href="#contacts"]');

  
  // --- Click Event Listeners ---
  projectLink.addEventListener('click', function(event) {
    console.log('clicked');
    event.preventDefault();
    document.querySelector('#projects').scrollIntoView();
  });

  contactsLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#contacts').scrollIntoView();
  });
});
