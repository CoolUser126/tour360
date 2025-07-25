
 console.log("hello from script");

//  interface Review {
//      
//     stars: Number;
//     comment: String; // pashupati nath is a good place
//  }

// create some default users

localStorage.setItem("KishanBasnet", 'admin123');
localStorage.setItem("RakeshThapa", "rakesh123");

 function getUser(username) {
    localStorage.getItem(username)
 }

 function saveCurrentUser(username) {
    localStorage.setItem("currentUser", username);
 }

 function getCurrentUser() {
    return localStorage.getItem("currentUser");
 }

 function saveReview(review) {
    const user = localStorage.get("currentUser");
    const key = user + "review";

    const allReviewsText = localStorage.getItem(user + "review") || [];

    const reviews = JSON.parse(allReviewsText);

    reviews.push(review);

    localStorage.setItem(key, JSON.stringify(reviews));
 }

 function getUserReviews(username) {
    const reviewText = localStorage.getItem(username + "review");
    return JSON.parse(reviewText);
 }


// for login page
const submitBtn = document.getElementById("submit-btn");
submitBtn?.addEventListener("click", formSubmit);

function formSubmit() {
const user = document.getElementById("username").value.trim();
const pass = document.getElementById("password").value.trim();

const storedPass = localStorage.getItem(user);

if (!user || storedPass !== pass) {
    alert("Incorrect username or password");
    return;
}

saveCurrentUser(user);

window.location.href = "/details/dashboard.html";
}

// for dashboard page
const greet = document.getElementById("greet");
const user = getCurrentUser();

if (greet)
    greet.innerHTML = "Welcome " + user + " !";

//review page

