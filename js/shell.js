const COMMANDS = {
  list: "",
  whoami:
    "I am a full-stack developer with expertise in Java, React, and web technologies.",
  bio: "Bio: A passionate developer with a focus on building scalable and secure applications.",
  clear: "",
};

COMMANDS.list = `
    <ul>
    ${Object.keys(COMMANDS)
      .map((cmd) => `<li onclick="simulateCommand('${cmd}')">${cmd}</li>`)
      .join("")}
    </ul>`;

// Function to simulate a user command when clicking on a list item
function simulateCommand(command) {
  inputLine.innerText = `> ${command}`;
  const event = new KeyboardEvent("keydown", { key: "Enter" });
  document.dispatchEvent(event);
}

// Shell interaction
const shell = document.getElementById("shellDiv");
const inputLine = document.getElementById("input-line");

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("input line:" + inputLine.innerText);
    const command = inputLine.innerText.replace(">", "").trim();
    console.log("command :" + command);
    let output = inputLine.innerText + "<br>";
    if (command && command === "clear") {
      // Clear all previous output from the shell
      shell.querySelectorAll(".output-line").forEach(function (outputLine) {
        outputLine.remove();
      });
      output = "";
    } else if (COMMANDS[command]) {
      output += COMMANDS[command];
    } else {
      const foundSkill = skills.find(
        (skill) => skill.name.toLowerCase() === command.toLowerCase()
      );
      if (foundSkill) {
        output += foundSkill.description;
      } else {
        output += 'Command not found. Try "list" for available commands.';
      }
    }

    const newOutputLine = document.createElement("div");
    newOutputLine.classList.add("output-line");
    newOutputLine.innerHTML = output;
    shell.insertBefore(newOutputLine, inputLine);

    inputLine.innerText = "> ";
    shell.scrollTop = shell.scrollHeight;
  } else {
    console.log(
      "event code:" +
        event.keyCode +
        ", event key:" +
        event.key +
        ", event key length:" +
        event.key.length
    );
    if (event.key.length == 1) {
      inputLine.innerText += event.key;
    } else {
      const keyID = event.keyCode;
      console.log(keyID);
      switch (keyID) {
        case 8: //backspace
          let inputValue = inputLine.innerText;
          inputValue =
            inputValue.length > 1
              ? inputValue.substring(0, inputValue.length - 1)
              : inputValue;
          inputLine.innerText = inputValue;
          break;
        // case 32:
        //     inputLine.innerText += " ";
        //     console.log("inputLine.innerText after space:"+inputLine.innerText);
        //     break;
      }
    }
  }
});
