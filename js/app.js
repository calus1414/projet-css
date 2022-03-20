let content = document.querySelector('.img');

let testWrapper;

let  width = window.screen.width;

const titleFirst =  document.getElementById('title');

if(titleFirst != null){

  const title = new TypeIt("#title", {
    strings: "Photo de Voyage",
    speed: 75,
    loop: false,
  }).go();
}



const presentationFirstPage =  document.getElementById('presentation');

if( presentationFirstPage  != null){
const presentation = new TypeIt("#presentation", {
  strings: 'Ipsout',
  speed: 35,
  loop: false,
}).go();
}

let tabImg = [

  "./img/barque.jpg",

  "./img/barque2.jpg",
  "./img/bkk.jpg",
 
];


let imgT = [

];

let tabPhone = [

  
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

  "./img/barque.jpg",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

  "./img/barque2.jpg",
  
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

  "./img/bkk.jpg",
  
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

  "./img/market.jpg",
  
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

  "./img/temple.jpg",
  
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

  

  "./img/barque2.jpg",
  
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

  "./img/bkk.jpg",
  
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

  "./img/market.jpg",
  
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

  "./img/temple.jpg",
  
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

  "./img/barque.jpg",
];


let tabComp = [

  
  
  "./img/barque.jpg",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

  
  "./img/barque2.jpg",
  "./img/barque2.jpg",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",


  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",
  
  "./img/bkk.jpg",
  
  
  

  "./img/barque2.jpg",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

 
  
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",
 
  
  "./img/barque2.jpg",
  
  "./img/barque.jpg",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",
  
  
  

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",

  "./img/barque.jpg",
  
  
  "./img/barque.jpg",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",
  
  
  
  
  
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem error minima accusamus dolor, nam ut inventore quia qui, dolorum tempora iure enim sunt, neque eligendi nobis nihil facilis. Repudiandae.",
  "./img/barque.jpg",
];
let index = 0;
let chemin = "";

function randomImg() {

  index += 1;
  if (index === 3) {
    index = 0;
  }
  
  chemin = tabImg[index];
   let img = `<img class="bg-img" src="${chemin}" alt="">`;


  content.innerHTML = img;
}
   randomImg()


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(timer());
    }, 3000);
  });
}

async function asyncCall() {

  const result = await resolveAfter2Seconds();

  // expected output: "resolved"
}




var time = document.getElementById('time');
var seconds = 0;
var minutes = 0;
var hours = 0;

function timer() {
  seconds += 1;
  if (seconds = 5) {
    randomImg()
    asyncCall();
    seconds = 0;

  }
}
   timer()



  if(width > 600){
    testWrapper = tabComp;
    
    }else{
      testWrapper = tabPhone;
     
    }
  





let imgContentRight = document.getElementById('card-wrapper');

let articlesRight = "";

let indexTRight = 0;
let numRight = 0;
let articleRight = "";





testWrapper.forEach(element => {
 




  if (indexTRight%2 == 0) {

      if(element.length > 100){
        articleRight = `<div data-aos="flip-up" style="font-family: 'Dancing Script', cursive;"  id="desc" class="descImg "><p>${element}</p></div>`;
      }else{
        articleRight = `<article data-aos="fade-left" style="font-family: 'Dancing Script', cursive;"  class="card-picture "> <img class="card-img " src="${element}"  alt=""/></article>`;
      }
    
  
  }else{
    if(element.length > 100){
      articleRight = `<div data-aos="flip-up" style="font-family: 'Dancing Script', cursive;"  id="desc" class="descImg "><p>${element}</p></div>`;
    }else{
      articleRight = `<article data-aos="fade-right" style="font-family: 'Dancing Script', cursive;" class="card-picture "> <img class="card-img " src="${element}"  alt=""/></article>`;
    }
   
  }
  indexTRight++;
 

  

  articlesRight += articleRight;
  
})

// console.log(imgContent)
 if (imgContentRight != null) {
   imgContentRight.innerHTML = articlesRight;
 }



// AOS.init();

// imgContent.innnerHTML = "<p>salut les gens</p>"