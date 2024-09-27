// Load the skills and dynamically create the table rows and columns
const skills = [
  {
    name: "React",
    iconClass: "fa-brands fa-react",
    color: "#61DBFB",
    description: "I will learn React in InceptionU.",
  },
  {
    name: "Java",
    iconClass: "fa-brands fa-java",
    color: "#f89820",
    description: "I had been a Java engineer for several years.",
  },
  {
    name: "Node",
    iconClass: "fa-brands fa-node-js",
    color: "#68A063",
    description: "I will learn Node in InceptionU.",
  },
  {
    name: "Python",
    iconClass: "fa-brands fa-python",
    color: "#3776AB",
    description: "I am learning ...",
  },
  {
    name: "Html",
    iconClass: "fa-brands fa-html5 fa-lg",
    color: "#e34c26",
    description: "My html skill is enhanced in InceptionU.",
  },
  {
    name: "CSS",
    iconClass: "fa-brands fa-css3-alt",
    color: "#1a63e0",
    description: "I am not good at CSS.",
  },
];

const skillCountInARow = 6;

document.addEventListener("DOMContentLoaded", () => {
  const skillCardsContainer = document.querySelector(".skill-cards-container");
  let draggedCard = null;

  skills.forEach((skill) => {
    // Create a new row every 5 skills (for wrapping)
    // if (index % skillCountInARow === 0) {
    //   currentRow = document.createElement("tr");
    //   skillTable.appendChild(currentRow);
    // }
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");

    //Set the card as draggable
    skillCard.setAttribute("draggable", "true");

    //add drag start event
    skillCard.addEventListener("dragstart", (event) => {
      draggedCard = skillCard;
      event.dataTransfer.setData("text/plain", null); //for firefox
    });

    //Allow the card to be dropped by preventing the default behavior
    skillCard.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    skillCard.addEventListener("drop", (event) => {
      event.preventDefault();

      //swap cards if a card is dragged over a different card
      if (draggedCard !== skillCard) {
        swapCards(draggedCard, skillCard);
      }
    });

    //icon element
    const iconElement = document.createElement("i");
    iconElement.classList = skill.iconClass;
    iconElement.style.color = skill.color;
    iconElement.classList.add("fa-lg");

    //skill text
    const skillText = document.createElement("div");
    skillText.classList.add("skill-text");
    skillText.textContent = skill.name;

    // Create tooltip element
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = "Drag me to shell window and explore my skill";

    // Append tooltip to skill card
    skillCard.appendChild(tooltip);

    // Append to skill card
    skillCard.appendChild(iconElement);
    skillCard.appendChild(skillText);

    // Append to cell, and cell to the current row
    // Append skill card to the container
    skillCardsContainer.appendChild(skillCard);
  });

  function swapCards(card1, card2) {
    const cell1 = card1.parentNode;
    const cell2 = card2.parentNode;

    if (cell1 && cell2) {
      const tempCard1 = card1.cloneNode(true);
      const tempCard2 = card2.cloneNode(true);

      cell1.removeChild(card1);
      cell2.removeChild(card2);

      cell1.appendChild(tempCard2);
      cell2.appendChild(tempCard1);

      // Re-apply the drag-and-drop listeners for the swapped cards
      reapplyDragAndDrop(tempCard1);
      reapplyDragAndDrop(tempCard2);
    }
  }

  function reapplyDragAndDrop(skillCard) {
    skillCard.setAttribute("draggable", "true");

    skillCard.addEventListener("dragstart", (event) => {
      draggedCard = skillCard;
      event.dataTransfer.setData("text/plain", null); // For Firefox
    });

    skillCard.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    skillCard.addEventListener("drop", (event) => {
      event.preventDefault();
      if (draggedCard !== skillCard) {
        swapCards(draggedCard, skillCard);
      }
    });
  }

  // Drag and drop event listeners for the shell div
  shellDiv.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  shellDiv.addEventListener("drop", (event) => {
    event.preventDefault();
    if (draggedCard) {
      //when a skill card is dropped in the shell div
      const skillName = draggedCard.querySelector(".skill-text").textContent;
      simulateCommand(skillName);
      draggedCard = null;
    }
  });

  function simulateCommand(command) {
    inputLine.innerText = `> ${command}`;
    const event = new KeyboardEvent("keydown", { key: "Enter" });
    document.dispatchEvent(event);
  }
});
