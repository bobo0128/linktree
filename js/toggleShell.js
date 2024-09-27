// Toggling the shell
const toggleShell = document.getElementById("toggleShell");
const shellContainer = document.getElementById("shellContainer");

toggleShell.addEventListener("click", function () {
  const isShellVisible = shellContainer.style.display === "block";
  shellContainer.style.display = isShellVisible ? "none" : "block";
  toggleShell.innerText = isShellVisible ? ">> Click to open shell" : "<< Click to hide shell";
});
