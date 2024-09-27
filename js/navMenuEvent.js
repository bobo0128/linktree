  // Prevent default page reload for "Fun projects" by loading content dynamically
  function loadFunProjects() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
            <h2>Fun Projects</h2>
            <p>Here are some of the projects I've worked on...</p>
            <!-- Add more details about projects here -->
        `;
  }

  function showHome() {
    location.reload();
  }