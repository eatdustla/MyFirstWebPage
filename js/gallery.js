// Get the main-left div element and the text element
const mainLeft = document.querySelector(".main-left");
const textElement = document.querySelector(".main-left h2");

// Set the maximum movement range and additional effects
const maxMovement = 20;
const maxScale = 1.2; // Maximum scale factor for text enlargement
const colorChangeThreshold = 10; // Threshold for color change based on mouse movement

// Add event listener for mousemove
mainLeft.addEventListener("mousemove", (event) => {
  // Calculate the percentage of mouse movement within the main-left div
  const mouseXPercent = (event.clientX / mainLeft.clientWidth) * 100;
  const mouseYPercent = (event.clientY / mainLeft.clientHeight) * 100;

  // Calculate the movement range based on the mouse position
  const moveX = (mouseXPercent / 100) * maxMovement - maxMovement / 2;
  const moveY = (mouseYPercent / 100) * maxMovement - maxMovement / 2;

  // Calculate the scale factor based on the mouse position
  const scale = 1 + (Math.abs(moveX) + Math.abs(moveY)) / (maxMovement * 2) * (maxScale - 1);

  // Apply the parallax effect and additional effects to the text element
  textElement.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;

  // Change text color based on mouse position with a smooth transition
  const colorChange = Math.min((Math.abs(moveX) + Math.abs(moveY)) / colorChangeThreshold, 1);
  const randomColor = getRandomColor();
  const textColor = `rgb(${randomColor.red}, ${randomColor.green}, ${randomColor.blue})`;
  
  // Apply smooth color transition
  textElement.style.transition = 'color 0.2s ease';
  textElement.style.color = textColor;
});

// Add event listener for mouseout to reset the text position and styles
mainLeft.addEventListener("mouseout", () => {
  textElement.style.transform = "translate(0, 0) scale(1)";
  textElement.style.color = ""; // Reset to the default color
  textElement.style.transition = ''; // Reset the transition property
});

// Function to generate random RGB color values
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return { red, green, blue };
}

  // -----------------

  // Get all the menu items
const menuItems = document.querySelectorAll('.nav a');

// Add event listeners for mouseover and mouseout on each menu item
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('mouseover', () => {
    // Gradually increase the font size to 1.5 times
    menuItem.style.transition = 'font-size 0.5s ease';
    menuItem.style.fontSize = '1.5em';
  });

  menuItem.addEventListener('mouseout', () => {
    // Gradually return to the original font size
    menuItem.style.transition = 'font-size 0.5s ease';
    menuItem.style.fontSize = '1em';
  });
});

  // -----------------

// Get all the gallery images
const galleryImages = document.querySelectorAll('.gallery-grid a');

// Add event listeners for mouseover and mouseout on each gallery image
galleryImages.forEach((image) => {
  image.addEventListener('mouseover', () => {
    // Gradually increase the size to 300%
    image.style.transition = 'transform 0.5s ease';
    image.style.transform = 'scale(3)';
    
    // Move the image to the top
    image.style.zIndex = '1000';
  });

  image.addEventListener('mouseout', () => {
    // Gradually return to the original size
    image.style.transition = 'transform 0.5s ease';
    image.style.transform = 'scale(1)';
    
    // Reset the z-index
    image.style.zIndex = '';
  });
});
