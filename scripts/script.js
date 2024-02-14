console.log("js is linked");

function toggleNav() {
  document.querySelector(".burger").classList.toggle("active");
  document.querySelector(".nav").classList.toggle("active");

  if (document.querySelector(".burger").classList.contains("active")) {
    document.querySelector(".nav-logo").classList.add("opacity-0");
  } else {
    setTimeout(() => {
      document.querySelector(".nav-logo").classList.remove("opacity-0");
    }, 1000)
  }
}

// Navbar animation
document.addEventListener("DOMContentLoaded", () => {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");
  const bookButton = document.querySelector("#bookButton");
  const navLogo = document.querySelector(".nav-logo");



  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollThreshold = document.documentElement.clientHeight;

    // scroll down (disappear)
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold - 150) {
      navbar.style.top = "-100px";
      navbar.style.paddingTop = 0;

    } else {
      // scroll up (appear)
      // after scroll threashold
      if (scrollTop > scrollThreshold - 100) {
        navbar.style.backgroundColor = "white";
        setTimeout(() => {
          navbar.style.top = "0px";
        }, 100);

        burger.classList.remove("white")
        burger.classList.add("black")

        bookButton.style.borderColor = "black";
        // bookButton.style.color = "black";
        bookButton.classList.remove("c-white");
        bookButton.classList.add("c-black");

        bookButton.classList.remove("bg-lightgray");
        bookButton.classList.add("bg-darkgray");
        bookButton.classList.remove("active-black");
        bookButton.classList.add("active-white");


        nav.querySelectorAll("a").forEach(link => {
          link.style.color = "black";
        });

        navLogo.style.visibility = "visible";

      }
      else {
        // before scroll threashold
        navbar.style.top = "0px";
        navbar.style.backgroundColor = "";

        if (scrollTop < scrollThreshold) {
          navbar.style.paddingTop = "20px";
        }

        burger.classList.remove("black")
        burger.classList.add("white")


        bookButton.classList.remove("bg-darkgray");
        bookButton.classList.add("bg-lightgray");
        bookButton.classList.remove("c-black");
        bookButton.classList.add("c-white");
        bookButton.classList.remove("active-white");
        bookButton.classList.add("active-black");
        bookButton.style.borderColor = "";

        nav.querySelectorAll('a').forEach(link => {
          link.style.color = "";
        });

        navLogo.style.visibility = "";
      }
    }

    lastScrollTop = scrollTop;
  });

  window.addEventListener('scroll', function () {
    var lang = document.querySelector('.lang');
    var underscore = document.querySelector('.underscore');
    var langLinks = document.querySelectorAll('.lang a');
    var divBottom = lang.offsetTop + lang.clientHeight;
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    if (divBottom - scrollPosition + 35 < windowHeight) {
      lang.style.color = 'black';
      underscore.style.borderColor = 'black';
      langLinks.forEach((link) => {
        link.style.color = 'black';
        link.style.borderColor = "black";
      });
    } else {
      lang.style.color = 'white';
      langLinks.forEach((link) => {
        link.style.color = 'white';
        link.style.borderColor = "white";
      });
    }
  });

})

// Slider 

let counter = 1;

fetch("assets/reviews.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {

      const outerDiv = document.createElement("div");
      outerDiv.setAttribute("class", "review-" + counter + " none");
      if (counter === 1) {
        outerDiv.classList.remove("none");
      }

      const innerDivReview = document.createElement("div");
      innerDivReview.textContent = item.review;
      outerDiv.appendChild(innerDivReview);

      const innerDivAuthor = document.createElement("div");
      innerDivAuthor.textContent = item.author;
      outerDiv.appendChild(innerDivAuthor);

      document.querySelector(".reviews").appendChild(outerDiv);
      counter += 1;
    });
  })
  .catch(error => console.log("Error fetching review data: ", error));




// slider
function fade_out(review_element) {
  review_element.classList.add("fade-out", "show");

  return new Promise(resolve => {
    setTimeout(() => {
      review_element.classList.add("none");
      resolve();
    }, 300)
  });
}

function fade_in(review_element) {
  review_element.classList.remove("none");
  review_element.classList.add("fade-in");
  setTimeout(() => {
    review_element.classList.add("show");
  }, 100);

  // setTimeout(() => {
  //   review_element.classList.add("none");
  // }, 750);
}


let index = 1;

async function next() {





  const reviewCount = document.querySelector(".reviews").children.length - 1;

  if (index === reviewCount) {
    currentReview = document.querySelector(".review-" + index);
    index = 1;
    nextReview = document.querySelector(".review-" + index);

    currentReview.classList.add("none");
    nextReview.classList.remove("none");
  } else {
    currentReview = document.querySelector(".review-" + index);
    index += 1;
    nextReview = document.querySelector(".review-" + index);

    await fade_out(currentReview);
    fade_in(nextReview);

    console.log("hexx");

    // setTimeout(() => {
    //   nextReview.classList.add("fade-in");
    //   nextReview.classList.remove("none");
    //   nextReview.classList.add("show");
    // }, 600);

    // fade_in(nextReview);


    // nextReview.classList.remove("none");
    // nextReview.classList.add("show");
  }
}

function prev() {

  const reviewCount = document.querySelector(".reviews").children.length - 1;

  if (index === 1) {
    currentReview = document.querySelector(".review-" + index);
    index = reviewCount;
    nextReview = document.querySelector(".review-" + index);

    currentReview.classList.add("none");
    nextReview.classList.remove("none");
  } else {
    currentReview = document.querySelector(".review-" + index);
    index -= 1;
    nextReview = document.querySelector(".review-" + index);

    currentReview.classList.add("none");
    nextReview.classList.remove("none");
  }
}

document.addEventListener('DOMContentLoaded', function () {

  const nextButton = document.querySelector('.next');
  nextButton.addEventListener('click', next);

  const prevButton = document.querySelector('.prev');
  prevButton.addEventListener('click', prev);

});


console.log("end of script");