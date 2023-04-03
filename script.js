// initialize varibles
let check = document.querySelector(".check"),
  email = document.querySelector(".email"),
  text = document.querySelector(".text"),
  regex = /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/; // correct email format

// validation procedure
check.addEventListener("click", () => {
  if (email.value == "") {
    text.innerHTML = "Please enter an email address";
    text.style.color = "tomato";
  } else if (email.value.match(regex)) {
    text.innerHTML = "Valid Email Address";
    text.style.color = "green";
  } else {
    text.innerHTML = "Invalid email address";
    text.style.color = "tomato";
  }
});
