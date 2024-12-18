// Select the first ".search-box" element
const search = document.querySelector(".search-box");
const cart = document.querySelector(".cart");
const user = document.querySelector(".user");
const navbar = document.querySelector(".navbar");

// Select the "#search-icon" and "#cart-icon" elements
const searchIcon = document.querySelector("#search-icon");
const cartIcon = document.querySelector("#cart-icon");
const userIcon = document.getElementById("user-icon");
const menuIcon = document.getElementById("menu-icon");

// Add an event listener to toggle the "active" class
menuIcon.onclick = () => {
  if (navbar) {
    navbar.classList.toggle("active");
    if (cart) {
      cart.classList.remove("active");
      if (user) {
        user.classList.remove("active");
        if (search) {
          search.classList.remove("active");
        }
      }
    }
  }
};
searchIcon.onclick = () => {
  if (search) {
    search.classList.toggle("active");
    if (cart) {
      cart.classList.remove("active");
      if (user) {
        user.classList.remove("active");
        if (navbar) {
          navbar.classList.remove("active");
        }
      }
    }
  }
};
//  cart icon
cartIcon.onclick = () => {
  if (cart) {
    cart.classList.toggle("active");
    if (search) {
      search.classList.remove("active");
      if (user) {
        user.classList.remove("active");
        if (navbar) {
          navbar.classList.remove("active");
        }
      }
    }
  }
};
//  User icon
userIcon.onclick = () => {
  if (user) {
    user.classList.toggle("active");
    if (search) {
      search.classList.remove("active");
      if (cart) {
        cart.classList.remove("active");
        if (navbar) {
          navbar.classList.remove("active");
        }
      }
    }
  }
};
window.onscroll = () => {
  if (user) {
    user.classList.remove("active");
    if (search) {
      search.classList.remove("active");
      if (cart) {
        cart.classList.remove("active");
        if (navbar) {
          navbar.classList.remove("active");
        }
      }
    }
  }
};

//  navbar scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

//  Swiper
document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidePerView: 0,
      },
      568: {
        slidePerView: 2,
      },
      768: {
        slidePerView: 2,
      },
      1020: {
        slidePerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
