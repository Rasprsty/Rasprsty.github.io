  // Get the menu button and navigation elements
  const menuBars = document.getElementById('menu-bars');
  const navbar = document.querySelector('.navbar');

  // Add a click event listener to the menu button
  menuBars.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation to show/hide it
    navbar.classList.toggle('active');
  });