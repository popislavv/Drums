// document.querySelector("button").addEventListener("click", function(){
//     alert("i got clicked")
// });

 //ovde ubacujes funkciju u eventListener, logicno cim se okine eventListener okine se i funkcija


 //mozes i na ovaj nacin laksi je za procitati, ali ovo je vise koda

 //document.querySelector("button").addEventListener("click", handleClick);
 //   function handleClick(){
 //     alert("i got clicked");}


 //NACIN KOJI SAM JA SKONTAO






// const buttons = document.querySelectorAll(".drum");
 
// buttons.forEach(function(button) {

//     button.addEventListener("click",function() {

//         alert("i got clicked");  
//     });
// });






//MOZE I NA DRUGI NACIN KROZ FOR LOOP ILI WHILE


//OCITAVANJE KLIKA MISA

var numOfButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML); 
        buttonAnimation(buttonInnerHTML);
    });
}

//OCITAVANJE TASTATURE. Ovo event unutar funkcije je dugme na tastaturi koje stisnes


document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            return tom1.play();    
        break;
    
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            return tom2.play();    
        break;

        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            return tom3.play();    
        break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            return tom4.play();    
        break;

        case "j":
            var crash = new Audio('./sounds/crash.mp3');
            return crash.play();    
        break;

        case "k":
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            return kickBass.play();    
        break;

        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            return snare.play();    
        break;
 
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){activeButton.classList.remove("pressed");}, 100)
}

//    this.style.color = "white";

//KOMANDA 'this' reaguje na klik dugmeta, tj on postane dugme koje je okinuto



// var drum = new Audio('./sounds/tom-1.mp3');
//         return drum.play();