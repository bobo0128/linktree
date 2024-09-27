document.addEventListener("DOMContentLoaded", function() {
    const defaultText = "Hi, I am Yingbo Liu. ";
    const sentences = ["I love coding.", "I am a software engineer.", "I am a full-stack developer."];
    let currentSentenceIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const banner = document.getElementById("banner");
  
    function typeWriter() {
      const currentSentence = sentences[currentSentenceIndex];
      
      // default text + second sentence
      banner.innerHTML = defaultText + " " + currentSentence.slice(0, charIndex);
  
      if (!isDeleting && charIndex < currentSentence.length) {
        charIndex++;
        setTimeout(typeWriter, 100); // control typing speed
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeWriter, 50); // control deleting speed
      } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
        setTimeout(typeWriter, 200); // pause on deletion
      } else {
        isDeleting = true;
        setTimeout(typeWriter, 1000); // pause on completion
      }
    }
  
    typeWriter(); // start typing
  });
  