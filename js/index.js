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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// START

// let newVariable = querySelector`/All`('selector')
// newVariable.textContent = siteContent.property[childProperty]

//NAV

//create the variable and where you want your data to go/be(what tag, ID, or className)
let navLinks = document.getElementsByTagName('a');

//use [index] to establish an order of items on the same tag. since otherwise identical there is no need to create a new variable fo reach one.

// . textContent to let the DOM know that you are adding content(specifically text) to the item.

// siteContent.`tag/className/ID of where these elements are`[the name of the item given to you in the data]
navLinks[0].textContent = siteContent.nav['nav-item-1'];
navLinks[1].textContent = siteContent.nav['nav-item-2'];
navLinks[2].textContent = siteContent.nav['nav-item-3'];
navLinks[3].textContent = siteContent.nav['nav-item-4'];
navLinks[4].textContent = siteContent.nav['nav-item-5'];
navLinks[5].textContent = siteContent.nav['nav-item-6'];

//CTA-TEXT header and button

// using querySelector will help me to find the exact className and tag
let ctaHead = document.querySelector('.cta-text h1');
ctaHead.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

//CTA IMAGE
//because the images use ID's use getElementById('idName')
let ctaImg = document.getElementById('cta-img');
//use setAttribute to assign a source for your image while also added the cotent
ctaImg.setAttribute('src', siteContent['cta']['img-src']);



