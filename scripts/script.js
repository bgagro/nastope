console.log("js is linked");


document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const header = document.querySelector(".navbar");
  const main = document.querySelector(".main");
  const headerHeight = document.querySelector(".navbar").offsetHeight;
  main.style.top = headerHeight + "px";
  let lastScroll = 0;

  const scrollThreshold = window.innerHeight;

  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > scrollThreshold && currentScroll - lastScroll > 0) {
      header.classList.add("scroll-down");
      header.classList.remove("scroll-up");
      header.style.backgroundColor = "beige";
    } else {
      // scrolled up -- header show
      header.classList.add("scroll-up");
      header.classList.remove("scroll-down");
      if (currentScroll <= scrollThreshold) {
        header.style.backgroundColor = "";
      }
    }
    lastScroll = currentScroll;
  })
});





console.log("end of script");