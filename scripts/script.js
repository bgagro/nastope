console.log("js is linked");

document.addEventListener("DOMContentLoaded", () => {

  let lastScrollTop = 0;
  const navbar = document.querySelector(".newnavbar");
  const burger = document.querySelector('.burger');
  const bookButton = document.querySelector("#bookButton")


  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollThreshold = document.documentElement.clientHeight;

    // scroll down (disappear)
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold - 150) {
      navbar.style.top = "-80px";
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
        bookButton.style.color = "black";
      }
      else {
        // before scroll threashold
        navbar.style.top = "0px";
        navbar.style.backgroundColor = "";

        if (scrollTop < scrollThreshold - 800) {
          navbar.style.paddingTop = "20px";
        }

        burger.classList.remove("black")
        burger.classList.add("white")

        bookButton.style.borderColor = "";
        bookButton.style.color = "";
      }
    }

    lastScrollTop = scrollTop;
  });

})


console.log("end of script");