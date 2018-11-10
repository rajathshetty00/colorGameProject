numOfSquares = 6;
var color = generateRandomColor(numOfSquares);//pushes the geenerated colors to array
var pickedColor = pickColor();//a function is invoked to perform randomizing of color[] array
var head = document.querySelector("#spn1");
head.textContent = pickedColor;//display the picked color in heading
var tryele = document.querySelector(".try");
var heading = document.querySelector("h1");
var squares = document.querySelectorAll(".square"); 
var btn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("select");
        modeButtons[1].classList.remove("select");
        this.classList.add("select");
        if(this.textContent === "Easy") {
            numOfSquares = 3;
        }
        else {
            numOfSquares = 6;
        }
        reset();
    });
}



//re-factoring from bigger code to shorter one. Extracted from easy and hard buttons.
function reset(){
    color = generateRandomColor(numOfSquares);
    //randomize heading text
    pickedColor = pickColor();
    head.textContent = pickedColor;
    btn.textContent = "New Colors";
    //reset expression
    tryele.textContent = "";
    //randomize squares color
    for (var i = 0; i < squares.length; i++) {
        if(color[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = color[i];
        } 
        else {
            squares[i].style.display = "none";
        }
    } 
    //reset heading bg color    
    heading.style.backgroundColor = "steelblue";
}  

  for(var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor= color[i];
        squares[i].addEventListener("click", function(){
        var colorExtract = this.style.backgroundColor;
        //logic to add color code to paragraph
        if(colorExtract === pickedColor){
            tryele.textContent = "Correct";
            heading.style.backgroundColor = pickedColor;
            changecolor(colorExtract);
        } else{
            this.style.backgroundColor = "#232323";
            tryele.textContent = "Try Again!!!";
        }
    });
}



//function to add same color to all the boxes if box match selected color
function changecolor(colors){
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
        btn.textContent = "Play Again?";
    } 
}



//function to inject a randomcolor to colors array
function pickColor() {
    var random = Math.floor(Math.random()  * color.length);
    return color[random];
}



//RESET BUTTON   
btn.addEventListener("click", function(){
   reset();
});



//function for generating random color
function generateRandomColor(num){
    //generate an array
    var arr = []
    for(var i = 0; i < num; i++){
    //generate random colors    
    randomColor();
    //push those random colors into array
    arr.push(randomColor());
    }
    return arr;
}



//sub function which is actually part of generateRandomColor()
function randomColor(){
    //giving r some value
    var r = Math.floor(Math.random() * 256);
    //giving g some value
    var g = Math.floor(Math.random() * 256);
    //same to b as well
    var b = Math.floor(Math.random() * 256);
    //return the values according to color code format
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

