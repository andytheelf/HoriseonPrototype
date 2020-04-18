var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var seconds = document.getElementById("countdown").textContent;

var countdown = setInterval(function prepareRead() {
    //create countdown timer
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <=0) clearInterval(countdown);
}, 1000);

function speedRead() {
  // Print words to the screen one at a time.
  
}