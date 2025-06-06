// Function to show the list of letter buttons
function showLetterList() {
  document.getElementById("welcome").style.display = "none";
  const list = document.getElementById("letter-buttons");
  list.style.display = "block"; // Or 'flex' if you want to use flexbox for centering
  // Add fade-in class if you want the animation on showing this section
  // list.classList.remove("fade-out"); // If you implement fade-out
  // list.classList.add("fade-in");
}

// Function to load a specific letter
function loadLetter(num) {
  // Hide the letter buttons list
  document.getElementById("letter-buttons").style.display = "none";

  const letterContentDiv = document.getElementById("letter-content");
  const letterTextDiv = document.getElementById("letter-text");

  // Show a loading message
  letterTextDiv.innerHTML = "<p style='text-align:center; padding: 20px;'>💌 Tuzha letter yetoy, thoda thaamb...</p>";
  letterContentDiv.style.display = "block";
  // letterContentDiv.classList.remove("fade-out");
  // letterContentDiv.classList.add("fade-in"); // Animation for the letter container

  fetch(`letters/${num}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Letter ${num}.html sapadla nahi! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      // Inject the fetched HTML content into the letter-text div
      letterTextDiv.innerHTML = data;
    })
    .catch(error => {
      console.error("Letter load kartana error:", error);
      letterTextDiv.innerHTML = `<p style="color:red; text-align:center; padding: 20px;">Arere! Letter load nahi zala 🥲.<br>File 'letters/${num}.html' check kar. Kahi tari gadbad aahe!</p>`;
    });
}

// Function to go back to the letter list from a letter view
function backToList() {
  document.getElementById("letter-content").style.display = "none";
  // letterContentDiv.classList.add("fade-out"); // If you want fade-out
  const list = document.getElementById("letter-buttons");
  list.style.display = "block"; // Or 'flex'
  // list.classList.remove("fade-out");
  // list.classList.add("fade-in");
}

// Function to go back to the welcome screen from the letter list
function backToWelcome() {
  document.getElementById("letter-buttons").style.display = "none";
  // list.classList.add("fade-out"); // If you want fade-out
  const welcome = document.getElementById("welcome");
  welcome.style.display = "block";
  // welcome.classList.remove("fade-out");
  // welcome.classList.add("fade-in");
}

// --- Password Protection (Optional - Uncomment HTML to use) ---

// This function should be called when the page loads if password protection is active
// window.onload = function() {
//   // If you want to show password screen by default
//   // document.getElementById("password-screen").style.display = "flex";
// }

function checkPassword() {
  const correctPassword = "0606"; // 🔒 IMPORTANT: Change this to your secret code!
  const enteredPassword = document.getElementById("pw-input").value;
  if (enteredPassword === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
  } else {
    alert("Arere! Secret code chukla 🙈. Parat try kar!");
    document.getElementById("pw-input").value = ""; // Clear the input
  }
}


// Note: The 'fade-in' class is applied in your HTML directly or via CSS :target pseudo-class,
// or you can add/remove it here if you prefer JS-controlled animations for transitions.
// The current CSS uses an animation 'fadeIn' which might trigger when display changes from 'none'.
// For smoother transitions between sections, you might need a more complex animation handling
// (e.g., adding a class, waiting for animation to finish, then changing display).
// For now, the provided CSS 'fadeIn' on display change should give a basic effect.

// Make sure your buttons in index.html that generate letter numbers are correct.
// The script for generating letter buttons inside index.html is:
/*
<script>
  for (let i = 1; i <= 21; i++) {
    let num = i.toString().padStart(2, "0");
    document.write(
      `<button onclick="loadLetter('${num}')">Letter ${num}</button>`
    );
  }
</script>
This looks fine for generating buttons that call loadLetter('01'), loadLetter('02'), etc.
*/