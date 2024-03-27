let aDiv= document.getElementById("A");
let bDiv= document.getElementById("B");
let cDiv= document.getElementById("C");
let dDiv= document.getElementById("D");
let eDiv= document.getElementById("E");

let theDivs = [aDiv,bDiv,cDiv,dDiv,eDiv];
let displayBtn = true;

function display(){
    if (displayBtn){
    for (i=0; i < theDivs.length; i = i+1){
        theDivs[i].style.display="block";
    }
    displayBtn =! displayBtn;
    }else {
        for (i=0; i < theDivs.length; i = i+1){
            theDivs[i].style.display="none";
        }
        displayBtn =! displayBtn;
    }
}
