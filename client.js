// client-side js
// run by the browser each time your view template referencing it is loaded

console.log("hello world :o");

const dreams = [];

// define variables that reference elements on our page
const comicForm = document.forms[0];
const searchInput = comicForm.elements["character"];
const dreamsList = document.getElementById("add-char");
const clearButton = document.querySelector('#clear-char');

// request the dreams from our app's sqlite database
//fetch("/getDreams", {})
//  .then(res => res.json())
//  .then(response => {
//   response.forEach(row => {
//      appendNewDream(row.dream);
//    });
//  });

// a helper function that creates a list item for a given dream
//const appendNewDream = dream => {
//  const newListItem = document.createElement("li");
//  newListItem.innerText = dream;
//  dreamsList.appendChild(newListItem);
//};

// listen for the form to be submitted and add a new dream when it is
function submitChar(){
  // stop our form submission from refreshing the page
  event.preventDefault();
  let searchKey = searchInput.value;
  console.log(searchKey);
  document.getElementById("srchChar").innerHTML = searchKey;
};

function clearChar(){
  pass
}
/*  const data = { dream: dreamInput.value };

  fetch("/addDream", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(response => {
      console.log(JSON.stringify(response));
    });
  // get dream value and add it to the list
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  // reset form
  dreamInput.value = "";
  dreamInput.focus();
};
*/

/*
clearButton.addEventListener('click', event => {
  fetch("/clearDreams", {})
    .then(res => res.json())
    .then(response => {
      console.log("cleared character");
    });
  dreamsList.innerHTML = "";
});
*/