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

  window.addEventListener('scroll', function() {
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




console.log("end of script");