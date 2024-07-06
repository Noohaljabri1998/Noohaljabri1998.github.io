var preloadPage = document.getElementById("preload-page");
var whiteLoaded = document.getElementById("white-loaded-in-preloading-page");
var increacingWhiteNum = document.getElementById("white-loading-progress-num");
var increacingBlackNum = document.getElementById("black-loading-progress-num");
var redLine = document.getElementById("red-line-go-down");
var splitWhiteDiv = document.querySelectorAll(
  "#container-of-tow-white-divs >div"
);
var menuBtn = document.getElementById("menu-btn");
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
        document
          .getElementById("nooh-text-preload")
          .classList.add("reset-width");
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

let contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
  contactBtn.children[0].style.transition = "500ms";
  contactBtn.children[1].style.transition = "500ms";
  contactBtn.children[2].style.transition = "500ms";
  contactBtn.children[3].style.transition = "500ms";
  contactBtn.classList.toggle("show");
  setTimeout(() => {
    contactBtn.children[0].style.transition = "200ms";
    contactBtn.children[1].style.transition = "200ms";
    contactBtn.children[2].style.transition = "200ms";
    contactBtn.children[3].style.transition = "200ms";
  }, 400);
});

////menu btn////////////////////////////////////////////////

menuBtn.addEventListener("click", () => {
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
  false
);

function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observerSections.forEach((observerSection) => {
    observer.observe(observerSection);
  });
}
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      if (
        entry.target.id === "fifth-section" ||
        entry.target.id === "fourth-section"
      ) {
        document
          .getElementById("sections-container")
          .classList.add("scroll-bar-background");
        menuBtn.classList.add("light-color");
        document.getElementById("contact-btn").classList.add("light-color");
      } else {
        document
          .getElementById("sections-container")
          .classList.remove("scroll-bar-background");
        menuBtn.classList.remove("light-color");
        document.getElementById("contact-btn").classList.remove("light-color");
      }
    } else {
    }
  });
}

///observer api////////////////////////////////////////////////////////////

///slide down web & mob//////////////////////////////////////////////////////

var son = document.querySelectorAll(".son");
var posbool = true;
var dd = setInterval(() => {
  if (posbool) {
    son[0].classList.replace("center", "bottom");
    son[1].classList.replace("top", "center");
    setTimeout(() => {
      son[0].classList.replace("bottom", "top");
    }, 1000);
    posbool = false;
  } else {
    son[1].classList.replace("center", "bottom");
    son[0].classList.replace("top", "center");
    setTimeout(() => {
      son[1].classList.replace("bottom", "top");
    }, 100);
    posbool = true;
  }
}, 6000);

///slide down web & mob///////////////////////////////////////////////////////

////scroll horizontal ///////////////////////////////////////////////////////

var workScrollArea = document.querySelector("#work-scrolling-area");
if (window.innerWidth < 950) {
  var unincludedArea =
    document.querySelector("#work-scrolling-area").clientHeight -
    window.innerWidth * 2;
  document.querySelector("#vertical-long").style.height =
    document.querySelector("#vertical-long").clientHeight +
    unincludedArea +
    "px";
} else {
  var itemWidth =
    document.querySelector("#work-scrolling-area").clientHeight * 2;
  document.querySelector("#vertical-long").style.height =
    document.querySelector("#vertical-long").clientHeight / 2.5 + "px";
}

workScrollArea.addEventListener("scroll", function (event) {
  var scrollPosition = Math.floor(workScrollArea.scrollTop / 2);
  document.querySelector("#works-container").style.transform =
    "translateX(-" + scrollPosition + "px)";
  // You can perform additional actions based on the scroll position within the element
});

////scroll horizontal ////////////////////////////////////////////////////////////////////////////

function goTo(destination, hash = "") {
  let link = "";
  switch (destination) {
    case "whatsapp":
      link = "https://wa.me/message/DH6I4NQPG7TOD1";

      break;
    case "linkedin":
      link = "https://linkedin.com/in/nooh-al-jabri-0490242b0";

      break;
    case "inPage":
      link = "#" + hash;
      menuBtn.classList.toggle("active");
      document.getElementById("menu-list").classList.toggle("active");

      break;
    case "copy":
      copyLink();

      break;
    default:
      break;
  }
  if (link == "") {
  } else {
    document.getElementById("a-links").href = link;
    document.getElementById("a-links").click();
  }
}
let textToCopy = "https://Noohaljabri1998.github.io/";

function copyLink() {
  var tempInput = document.createElement("input");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

///setup for desktop//////////////////////////////////////
window.addEventListener("load", () => {
  if (window.innerWidth > 950) {
    var nameWithImg = document.getElementById("name-with-img");
    var myInfo = document.getElementById("my-info");
    var introMySelf = document.getElementById("itroducting-my-self");
    var leftContainer = document.createElement("div");
    leftContainer.appendChild(myInfo);
    leftContainer.appendChild(introMySelf);
    nameWithImg.parentNode.insertBefore(leftContainer, nameWithImg.nextSibling);

    ///setup for desktop//////////////////////////////////////

    ///3d card hovering//////////////////////////////////////

    var rotate3d = document.getElementsByClassName("rotate-3d");
    Array.from(rotate3d).forEach((el) => {
      el.children[1].addEventListener("mouseover", function () {
        el.children[0].style.transition = "200ms 0ms";
        setTimeout(() => {
          el.children[0].style.transition = "50ms 0ms";
        }, 500);
      });
      el.children[1].addEventListener("mousemove", function (e) {
        // console.log("pageX" + e.pageX + ",,,clientWidth" + el.clientWidth);
        let rect = el.getBoundingClientRect();
        let xAxis = Math.floor(-(rect.width / 2 - e.clientX + rect.left)) / 10;
        let yAxis = Math.floor(rect.height / 2 - e.clientY + rect.top) / 10;

        el.children[0].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      });

      el.children[1].addEventListener("mouseout", function () {
        el.children[0].style.transition = "200ms 0ms";
        el.children[0].style.transform = `rotateY(0deg) rotateX(0deg)`;
        console.log("out1");
      });
    });

    ///3d card hovering//////////////////////////////////////
  }
});

///contact me form///////////////////////////////
document
  .getElementById("contact-me-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name-form-input").value;
    const email = document.getElementById("email-form-input").value;
    const message = document.getElementById("message-textarea").value;

    const endpoint = "https://formspree.io/f/xanwyaqy";

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      });
  });
