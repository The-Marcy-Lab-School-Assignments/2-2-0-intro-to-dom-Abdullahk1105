
// Question 9: Make it from scratch!
const h1 = () =>{
const mainHeading = document.createElement("h1");
    mainHeading.id = "main-heading";
    mainHeading.textContent = "Hello World!";
    document.body.appendChild(mainHeading);
}

const p = () => {
const mainText = document.createElement("p");
    mainText.id = "main-text";
    mainText.className = "boring-text";
    mainText.textContent = "Look, I'm some text!";
    document.body.appendChild(mainText);
}

const main = () => {
    h1();
    p();

}
main();