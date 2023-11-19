//Dark Mode Function
let themeButton = document.getElementById("darkButton");

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);


//MODAL

// Counter variable
let submissionCount = 0;

// Function to show the modal and update the counter
function showModal(text) {
  const modal = document.getElementById('myModal');
  const modalContent = document.querySelector('.modal-content');

  modalContent.innerHTML = '<span class="close" onclick="closeModal()">&times;</span>' + text;

  // Increment the submission count for a valid form
  submissionCount++;

  // Update the counter display on the screen
  updateCounterDisplay();
    // Create a new image element for the confetti GIF
    const confettiImg = document.createElement('img');
    confettiImg.src = 'images/confetti.gif'; // Replace with the actual path to your confetti GIF
    confettiImg.classList.add('confetti');
  
    // Append the confetti image to the modal content
    modalContent.appendChild(confettiImg);
  
    // Add the 'show' class to trigger the animation
    modal.classList.add('show');
    modalContent.classList.add('show');

    setTimeout(closeModal, 5000);
  }

  // Function to update the counter display on the screen
function updateCounterDisplay() {
    const counterDisplay = document.getElementById('counterDisplay');
    counterDisplay.textContent = `Number of Submissions: ${submissionCount}`;
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('myModal');
  
    // Remove the 'show' class to trigger the fade-out animation
    modal.classList.remove('show');
  }
  



//Petition Function
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('petition');
    let displayText = document.getElementById("displayText");
    let submitButton = document.getElementById("psubmit");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission

        let nameInput = document.getElementById('name');
        let hometownInput = document.getElementById('hometown');
        let emailInput = document.getElementById('email');

        const name = nameInput.value.toUpperCase();
        const hometown = hometownInput.value.toUpperCase();
        const email = emailInput.value;


        const emailRegex = /@.*\.com$/;
        const isEmailValid = emailRegex.test(email);

        if (name.trim() === "") {
            nameInput.classList.add('error'); // Add an 'error' class to highlight in red
        } else {
            nameInput.classList.remove('error'); // Remove 'error' class
        }

        if (hometown.trim() === "") {
            hometownInput.classList.add('error'); // Add an 'error' class to highlight in red
        } else {
            hometownInput.classList.remove('error'); // Remove 'error' class
        }

        if (email.trim() === "") {
            emailInput.classList.add('error'); // Add an 'error' class to highlight in red
        } else {
            emailInput.classList.remove('error'); // Remove 'error' class
        }
        if (!isEmailValid) {
            emailInput.classList.add('error'); // Add an 'error' class to highlight in red
        } else {
            emailInput.classList.remove('error'); // Remove 'error' class
        }


        if (name.trim() === "" || hometown.trim() === "" || email.trim() === "") {
            // Check if either name or hometown is empty
            alert("Please Fill Out Fields With A Red *");
        } 
        else if (!isEmailValid) {
            alert("Please Provide A Valid Email Address. For Example 'Jatin@FoodTalk.com'.");
        }
        else {
            const textValue =
              "Thank You &nbsp;<span class='name'>" +
              name +
              "</span>&nbsp;! The people from &nbsp;<span class='hometown'>" +
              hometown +
              "</span>&nbsp; are going to find you very helpful!";
            displayText.innerHTML = textValue;
          
            // Show the modal with the success message
            showModal(textValue);
            updateCounterDisplay();
          }
    });
});

// Reset the 'error' class when the user starts typing in the input fields
document.getElementById('name').addEventListener("input", function () {
    this.classList.remove('error');
});

document.getElementById('hometown').addEventListener("input", function () {
    this.classList.remove('error');
});

document.getElementById('email').addEventListener("input", function () {
    this.classList.remove('error');
});


//Scroll Animation


document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll(".fade-in");

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        elements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add("fade-in-active");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll(); // Initial check
});








