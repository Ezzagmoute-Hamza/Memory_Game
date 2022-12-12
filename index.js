let images=[
    "Images/image1.jpg",
    "Images/image2.jpg",
    "Images/image3.jpg",
    "Images/image4.jpg",
    "Images/image5.jpg",
    "Images/image6.jpg",
    "Images/image1.jpg",
    "Images/image2.jpg",
    "Images/image3.jpg",
    "Images/image4.jpg",
    "Images/image5.jpg",
    "Images/image6.jpg"
];

// Game: is a container that contains the whole game boxes
let Game=document.getElementById("Game");

// this function shuffle images (swap images with each other to change their order);
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i],array[j]]=[array[j],array[i]]
    }
    return array
  }
// this function controls the opacity of the images
function ShowOrHide(liste,x){
    liste[0].firstChild.style.opacity=`${x}`;
    liste[1].firstChild.style.opacity=`${x}`;
}
// this function displays the images in the page
function ShowElements(){
    let DuplicqteImages=shuffleArray(images);
    DuplicqteImages.map(ele=>{
        Game.innerHTML+=`<div class='box'><img src='${ele}'/></div>`;
    })
}
ShowElements();

// this function reacts to every click made by the user

function HandleClick(){
    // getAllElements: is a list of boxes, each box contains an image.
    let getAllElements=document.querySelectorAll('.box');
    // toCompare: is a list that accept only two elements.
    let toCompare=[];
    // "good" and "err" are Audios,that played when to images are the same or differents.
    let good=new Audio("Sounds/MAUTZQN-cartoon-girl-good.mp3");
    let err=new Audio("Sounds/mixkit-wrong-long-buzzer-954.wav");

    getAllElements.forEach(divElement=>{
            divElement.addEventListener("click",function(){
                if(toCompare.length<2){
                    this.firstChild.style.opacity="1";
                    toCompare=[...toCompare,this];  // this code is the same of " toCompare.push(this); "
                            if(toCompare.length===2){
                                if(toCompare[0].firstChild.getAttribute('src')===toCompare[1].firstChild.getAttribute('src')){
                                    ShowOrHide(toCompare,1) 
                                    good.play();
                                    toCompare=[]
                                    
                                }else{
                                    setTimeout(function(){
                                        ShowOrHide(toCompare,0)
                                        err.play();
                                        toCompare=[]                          
                                    },300)
                                
                                }
                            }

                }else{
                   return;
                }

             })
    })
}

HandleClick();



























