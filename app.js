// window.addEventListener('click', function() {
//   alert("CLICK!")
// })

// ((((((((((((REMOVE EVENT))))))))))))
// var button = document.querySelector('.button')

// var once = function(){
//   alert('Thank you for clicking the Button')
//   button.removeEventListener('click', once)
// }

// (((((((EVENT OBJECT)))))))
// button.addEventListener('click', once)

// var logText = function(event){
//   console.log(event.target.textContent)
//   console.log(event.target)
//   console.log(event)
// }

// window.addEventListener('click', logText)

// (((((((((((EVENT.TARGET VS. THIS)))))))))))

var logText = function(){
  console.log(this.textContent)
}

window.addEventListener('click', logText)