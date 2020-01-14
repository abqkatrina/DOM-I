const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


//KATRINA'S CODE STARTS HERE-------------------------------------------------------------------
//set and style links
const links = document.querySelectorAll("a");
links[0].textContent = (siteContent["nav"]["nav-item-1"]);
links[1].textContent = (siteContent["nav"]["nav-item-2"]);
links[2].textContent = (siteContent["nav"]["nav-item-3"]);
links[3].textContent = (siteContent["nav"]["nav-item-4"]);
links[4].textContent = (siteContent["nav"]["nav-item-5"]);
links[5].textContent = (siteContent["nav"]["nav-item-6"]);
links.forEach((links) => links.style.color ="black");

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//style header
const header1 = document.querySelector("header");
header1.style.background ="limegreen";

const star = document.createElement("span");
star.textContent = "*";
star.classList.add = "extra";
star.style.width = "1rem";
const parentNav = document.querySelector("header");
parentNav.prepend(star);

//set cta-text
const ctaText = document.querySelector("h1");
ctaText.textContent = (siteContent["cta"]["h1"]);

//set cta-img
const ctaImg = document.getElementById("cta-img");
ctaImg.src = (siteContent["cta"]["img-src"]);

//set div content
const articles = document.getElementsByTagName("p");
articles[0].textContent = (siteContent["main-content"]["features-content"]);
articles[1].textContent = (siteContent["main-content"]["about-content"]);
articles[2].textContent = (siteContent["main-content"]["services-content"]);
articles[3].textContent = (siteContent["main-content"]["product-content"]);
articles[4].textContent = (siteContent["main-content"]["vision-content"]);
articles[5].textContent = (siteContent["contact"]["address"]);
articles[6].textContent = (siteContent["contact"]["phone"]);
articles[7].textContent = (siteContent["contact"]["email"]);

//set div h4
const headers = document.querySelectorAll("h4");
headers[0].textContent = (siteContent["main-content"]["features-h4"]);
headers[1].textContent = (siteContent["main-content"]["about-h4"]);
headers[2].textContent = (siteContent["main-content"]["services-h4"]);
headers[3].textContent = (siteContent["main-content"]["product-h4"]);
headers[4].textContent = (siteContent["main-content"]["vision-h4"]);
headers[5].textContent = (siteContent["contact"]["contact-h4"]);

//set middle img
const midImg = document.getElementById("middle-img");
midImg.src = (siteContent["main-content"]["middle-img-src"]);

//set button content
const button1 = document.querySelector("button");
button1.textContent = (siteContent["cta"]["button"]);
button1.setAttribute("onClick", "function1()");
function function1(){
  button1.style.background ="limegreen";
};

//create footer
const newFooter = document.createElement("footer");
newFooter.textContent = "Copyright Great Idea! 2018";
newFooter.classList.add("footer");
newFooter.style.backgroundColor ="limegreen";
newFooter.style.width ="100%";
const parentBody = document.querySelector('.container');
parentBody.appendChild(newFooter);
