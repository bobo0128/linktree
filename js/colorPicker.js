  // Color picker for theme color
  const colorPicker = document.getElementById("colorPicker");
  colorPicker.addEventListener("input", (event) => {
    const themeColor = event.target.value;

    // Apply the theme color to various parts of the page
    document.body.style.backgroundColor = themeColor; // Background color
    document.getElementById("navbar").style.backgroundColor = themeColor; // Navbar color
    document.getElementById("shell").style.backgroundColor = themeColor; // Shell background color
  });