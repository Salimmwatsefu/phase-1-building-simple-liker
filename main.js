// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//This returns a Nodelist of all elements within the document with a class attribute of like-glyph
const modal = document.querySelector("#modal");
modal.className = "hidden"
document.querySelectorAll(".like-glyph").forEach(li => li.addEventListener("click",(e) => {
  mimicServerCall().then(() => {
    const myHeart = e.target
    if(myHeart.textContent === FULL_HEART) {
      myHeart.textContent = EMPTY_HEART;
      myHeart.classList.remove("activated-heart")
    } else {
    myHeart.textContent = FULL_HEART
    myHeart.classList.add('activated-heart')
    }
  })
  .catch((error) => {
    modal.textContent = error
    modal.classList.remove("hidden")
    setTimeout(() => {
      modal.classList.add("hidden")
    },3000)
  })
}))


      





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
