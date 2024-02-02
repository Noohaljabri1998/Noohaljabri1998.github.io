
      var preloadPage = document.getElementById("preload-page");
var whiteLoaded = document.getElementById("white-loaded-in-preloading-page");
var increacingWhiteNum = document.getElementById("white-loading-progress-num");
var increacingBlackNum = document.getElementById("black-loading-progress-num");
var redLine = document.getElementById("red-line-go-down");
var splitWhiteDiv = document.querySelectorAll(
  "#container-of-tow-white-divs >div"
);
var menuBtn=document.getElementById("menu-btn");
var textContainerPreload = document.getElementById("text-container-preload");
var noohTextPreload = document.getElementById("nooh-text-preload");
var symbolTextPreload = document.getElementsByClassName("symbol");
let loadedPage = false;
let almostLoaded = false;
window.addEventListener("load", function () {
  loadedPage = true;
  remainLoading();
});

function redLineGoDown() {
  splitWhiteDiv[0].style.height = "100vmax";
  splitWhiteDiv[1].style.height = "100vmax";
  redLine.style.top = "100vmax";
  setTimeout(() => {
    increacingWhiteNum.style.display = "none";
    increacingBlackNum.style.display = "none";
    whiteLoaded.style.display = "none";
    whiteLoaded.style.height = "0";
    splitWhiteDiv[0].style.height = "100vmax";
    splitWhiteDiv[1].style.height = "100vmax";
    splitWhiteDiv[0].style.width = 0;
    splitWhiteDiv[1].style.width = 0;
    setTimeout(() => {
      textContainerPreload.style.opacity = "1";
      textContainerPreload.style.transform =
        "translate(-50%, -50%) rotate(90deg) scale(1)";

      setTimeout(() => {
        document.getElementById("nooh-text-preload").classList.add("reset-width");
        document.querySelectorAll("#nooh-text-preload>div").forEach((el) => {
          el.style.transform = "unset";
          el.style.opacity = "1";
        });
        setTimeout(() => {
          textContainerPreload.style.transform =
            "translate(-50%, -50%) rotate(0deg) scale(1.1)";
          whiteLoaded.style.display = "block";
          whiteLoaded.style.height = "100vmax";
          symbolTextPreload[0].style.color = "var(--dark-blue)";
          symbolTextPreload[1].style.color = "var(--dark-blue)";
          setTimeout(() => {
            textContainerPreload.style.transition =
              "500ms cubic-bezier(0, 0.65, 0.23, 0.97) 0s";
            textContainerPreload.style.transform =
              "translate(-50%, -50%) rotate(0deg) scale(1)";
            setTimeout(() => {
              preloadPage.style.transform = "translateX(-100vw)";
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }, 600);
          }, 300);
        }, 500);
      }, 400);
    }, 800); // Call resolve to indicate that the animation is complete
  }, 1100);
}

function remainLoading() {
  if (loadedPage && almostLoaded) {
    increacingWhiteNum.style.mixBlendMode = "unset";
    increacingWhiteNum.style.color = "var(--dark-blue)";
    let i = 95;
    let remainLoadingVal = setInterval(() => {
      whiteLoaded.style.height = i + "vh";
      increacingWhiteNum.innerText = i + "%";
      increacingBlackNum.innerText = i + "%";
      if (i == 100) {
        redLineGoDown();
        clearInterval(remainLoadingVal);
      }
      i++;
    }, 20);
  }
}
function loadingPage() {
  let i = 1;
  let loadingVal = setInterval(() => {
    whiteLoaded.style.height = i + "vh";
    increacingWhiteNum.innerText = i + "%";
    increacingBlackNum.innerText = i + "%";
    console.log(i);
    if (i == 18) {
      i = 38;
    } else if (i == 50) {
      i = 74;
    } else if (i == 88) {
      almostLoaded = true;
      remainLoading();
      clearInterval(loadingVal);
    }
    i++;
  }, 60);
}
loadingPage();


////float btn ////////////////////////////////////////////


let contactBtn=document.getElementById("contact-btn");
contactBtn.addEventListener("click",()=>{
  contactBtn.classList.toggle("show");
});


////menu btn////////////////////////////////////////////////


menuBtn.addEventListener("click",()=>{
  menuBtn.classList.toggle("active");
  document.getElementById("menu-list").classList.toggle("active");
});

/////menuBtn////////////////////////////////////////////////////

///////float btn//////////////////////////////////////////////////////


//observer api////////////////////////////////////////////////////////




let boxElements;

// Set things up
window.addEventListener(
  "load",
  (event) => {
    observerSections = document.querySelectorAll("#sections-container>div");
    createObserver();
  },
  false,
);

function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observerSections.forEach((observerSection)=>{
    observer.observe(observerSection);
  })
}
function handleIntersect(entries, observer) {
    console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      if (entry.target.id === "fifth-section" ||entry.target.id === "fourth-section" ) {
        menuBtn.classList.add("light-color");
        document.getElementById("contact-btn").classList.add("light-color");
      } else {
        menuBtn.classList.remove("light-color");
        document.getElementById("contact-btn").classList.remove("light-color");
      }
    } else{
    }
  });
}



///observer api////////////////////////////////////////////////////////////



///slide down web & mob//////////////////////////////////////////////////////

var son=document.querySelectorAll(".son");
var posbool=true;
var dd= setInterval(() => {
  if (posbool) {
    son[0].classList.replace("center","bottom");
    son[1].classList.replace("top","center");
    setTimeout(() => {
      son[0].classList.replace("bottom","top");
    }, 1000);
  posbool=false;
  }else{
    son[1].classList.replace("center","bottom");
    son[0].classList.replace("top","center");
    setTimeout(() => {
      son[1].classList.replace("bottom","top");
    }, 100);
    posbool=true;
  }
}, 6000);





///slide down web & mob///////////////////////////////////////////////////////



////scroll horizontal ///////////////////////////////////////////////////////




var workScrollArea = document.querySelector("#work-scrolling-area");
if (window.innerWidth<950) {

var unincludedArea=document.querySelector("#work-scrolling-area").clientHeight-(window.innerWidth*2);
document.querySelector("#vertical-long").style.height =document.querySelector("#vertical-long").clientHeight+(unincludedArea)+"px";
} else {
  
var itemWidth=document.querySelector("#work-scrolling-area").clientHeight*2;
document.querySelector("#vertical-long").style.height =(document.querySelector("#vertical-long").clientHeight/2.5)+"px";
}


workScrollArea.addEventListener("scroll", function(event) {
  var scrollPosition = Math.floor( workScrollArea.scrollTop/2);
  document.querySelector("#works-container").style.transform="translateX(-"+scrollPosition+"px)";
  console.log("Scroll position within the element: " + scrollPosition + "px");
  // You can perform additional actions based on the scroll position within the element
});


////scroll horizontal ////////////////////////////////////////////////////////////////////////////



function goTo(destination,hash="") {
  let link="";
  switch (destination) {
    case "whatsapp":link="https://wa.me/message/Z3M723RPXCASF1"
      
      break;
      case "linkedin":link="https://linkedin.com/in/nooh-al-jabri-0490242b0"
        
        break;
        case "inPage":link="#"+hash;
        menuBtn.classList.toggle("active");
        document.getElementById("menu-list").classList.toggle("active");
          
          break;
        case "copy":copyLink();
          
          break;
    default:
      break;
  }
  if (link=="") {
    
  }else{
  document.getElementById("a-links").href=link;
  document.getElementById("a-links").click();}
}
let textToCopy = "https://noohaljabri.000.pe/";

function copyLink() {
  
  var tempInput = document.createElement("input");
  tempInput.value = textToCopy; 
  document.body.appendChild(tempInput); 

  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

             }
