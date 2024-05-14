//Question 1: getMainHeadingText - modify.js (READ)

const getMainHeadingText = () => {
  document.querySelector('h1#main-heading');
  console.log(document.querySelector('h1#main-heading').textContent);
};
//Question 2: getAllMainText - modify.js (READ)

const getAllMainText = () => {
  let mainTextElements = document.querySelectorAll('.main-text');
  let newText = "";
  
  mainTextElements.forEach((mainTextElements) =>
      newText += mainTextElements.textContent + ",");
  
  
  console.log(newText.slice(0, -1)); // Removing the last comma
}

//Question 3: setSubtitleText - modify.js (UPDATE)

const setSubtitleText = () => {
  document.querySelector('h2#subtitle').textContent = "This is a subtitle!"
};

//Question 4: modifyDivClassList - modify.js (UPDATE)

const modifyDivClassList = () => {
const list = document.querySelector("#modify-classes").classList;
list.remove("bad-class")
list.add("new-class")
};

//Question 5: add H2 - modify.js (CREATE)

const addH2 = () => {
  let h2 = document.createElement('h2'); 
  h2.textContent = "Another one!"; 
  h2.id = 'h2-test'; 
  document.body.appendChild(h2)
}

//Question 6: removeOldInfo - modify.js (DELETE)

const removeOldInfo = () => {
  const element = document.getElementById("old-info");
element.remove();
};

// Question 7: makeAlphabet - modify.js

const makeAlphabet = () => {
    const amount = document.querySelector("#alphabet").dataset.numLetters;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < amount; i++) {
      const li = document.createElement("li");
      li.textContent = `${alphabet[i]} is letter #${i + 1} in the alphabet`;
      document.getElementById("alphabet").appendChild(li);
    }
  };

 // Question 8: makeBio
 
const makeBio = () => {
 const orignalBio = document.querySelector('#my-bio')
 const newBio = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`

  orignalBio.innerHTML = newBio
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
