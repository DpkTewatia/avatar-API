AOS.init();
window.onscroll = function () { scrollFunction() };

var contantPageLink = document.querySelector(".navbar-collapse ul li:last-child .nav-link");
contantPageLink.setAttribute("href", "contact-us.html");
var topHeaderContent = document.createElement('div');
topHeaderContent.innerHTML = '<div class="container"><div class="row"><div class="col-sm-6 col-md-5"><div class="topbar-left"><div class="topbar-social-icons"><a href="https://www.facebook.com/GoPureIndia" target="new"><i class="bi bi-facebook"></i></a><a href="https://www.instagram.com/gopureindia" target="new"><i class="bi bi-instagram"></i></a><a href="https://twitter.com/gopureindia" target="new"> <i class="bi bi-twitter"></i> </a> </div> <p>Welcome to Go Pure - Real, Elegant, Authentic Taste of India</p> </div> </div> <div class="col-sm-6 col-md-7"> <div class="topbar-right"><p title="9910125804">Customer care will be open 24/7 <a href="tel:9910125804" class="company-phone"><i class="bi bi-telephone-fill"></i>+91 9910125804</a></p><a href="#" class="company-timing"><i class="bi bi-clock"></i>10.00 am to 6.00 pm - (Monday to Friday)</a> </div> </div> </div> </div>';
document.querySelector("#TopHeader").prepend(topHeaderContent);

var contactSectionContent = document.createElement('div');
contactSectionContent.classList.add("email-bg");
contactSectionContent.innerHTML = '<div class="container aos-init aos-animate" data-aos="fade-in"> <div class="row"> <div class="col-md-6 col-sm-12 mt-18"> <a href="mailto:support@gopure.co.in">Email Us: support@gopure.co.in</a> </div> <div class="col-md-6 col-sm-12"> <p>Customer care will be open 24/7 :<a href="tel:9910125804">&nbsp; +91 9910125804</a> <br> <span>10.00 am to 6.00 pm</span> <span class="sm-hide">-</span> <span>(Monday to Friday)</span> </p> </div> </div> </div>';
document.querySelector("#contactSection").prepend(contactSectionContent);


var footerContent = document.createElement('div');
footerContent.classList.add("footer");
footerContent.innerHTML = '<div class="container"> <div class="row"> <div class="col-sm-6"> <p><a href="index.html" class="ps-1"><img src="images/gopure_foot_logo.png" class="img-fluid foot_logo" alt="Go Pure Logo"></a></p> <div class="font-18 mt-20 text-green-3 font-600"> <p>Real, Elegant, Authentic Taste of India</p> </div> <div class="font-28 mt-30 text-white font-600"> Connect with us on </div> <ul class="social-icons d-flex"> <li> <a href="https://www.facebook.com/GoPureIndia" class="text-white font-28 pr-10" title="Follow Us on Facebook"> <i class="bi bi-facebook"></i> </a> </li> <li> <a href="https://www.twitter.com/gopureindia" class="text-white font-28 pr-10" title="Follow Us on Twitter"> <i class="bi bi-twitter"></i> </a> </li> <li> <a href="https://www.instagram.com/gopureindia" class="text-white font-28" title="Follow Us on instagram"> <i class="bi bi-instagram"></i> </a> </li> </ul> </div> <div class="col-sm-3"> <div class="heading-sm">Company</div> <ul> <li><a href="about-us.html" class="text-white">About</a></li> <li><a href="termsandconditions.html" class="text-white">Terms and Conditions</a></li> <li><a href="privacy-policy.html" class="text-white">Privacy Policy</a></li><li><a href="contact-us.php" class="text-white">Contact Us</a></li> </ul> </div> <div class="col-sm-3"> <div class="heading-sm">Useful Links</div> <ul> <li><a href="#" class="text-white">Offers & Discounts</a></li> <li><a href="#" class="text-white">Cancellations, Returns and Refunds</a></li> <li><a href="#" class="text-white">Sell Your Product with Us</a></li> <li><a href="#" class="text-white">Find Us in Your States</a></li> </ul> </div> </div> </div> <div class="container-fuild"> <div class="copyright"> &copy; <span id="getCurrentYear"></span> Go Pure. All rights reserved </div> <div class="icon-whatsapp"><a href="https://api.whatsapp.com/send/?phone=919910125804&text=Hi%2C+I+want+to+order+some+products&type=phone_number&app_absent=0" target="new"><i class="bi bi-whatsapp" aria-hidden="true"></i> Whatsapp</a></div></div>';
document.querySelector("#footerContent").prepend(footerContent);


var getCurrentYear = new Date();
    document.getElementById("getCurrentYear").innerHTML = getCurrentYear.getFullYear();


function scrollFunction() {
      if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
            document.getElementById("myBtn").style.display = "block";
      } else {
            document.getElementById("myBtn").style.display = "none";
      }
}

function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
}

$(".social-icons").find("li > a").attr("target", "new");
/*$(".social-icons").find("li:nth-child(1) > a").attr("href", "https://www.facebook.com/GoPureIndia");
$(".social-icons").find("li:nth-child(2) > a").attr("href", "https://twitter.com/gopureindia");
$(".social-icons").find("li:nth-child(3) > a").attr("href", "https://www.instagram.com/gopureindia");*/

$(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
            $('.sticky').addClass("fixed");
      }
      else {
            $('.sticky').removeClass("fixed");
      }
});


/*Script for taste page only*/
var selectCategory = document.getElementById("selectCategory");
var divAllProducts = document.querySelectorAll("#DivAllProducts > div");
var divCookies = document.querySelectorAll("#DivAllProducts > div.cookies");
var divNamkeen = document.querySelectorAll("#DivAllProducts > div.namkeen");
var divSweets = document.querySelectorAll("#DivAllProducts > div.sweets");
var divPetha = document.querySelectorAll("#DivAllProducts > div.petha");
var divSpicy = document.querySelectorAll("#DivAllProducts > div.spicy");
var divDryFruits = document.querySelectorAll("#DivAllProducts > div.dryfruits");
var divSnacks = document.querySelectorAll("#DivAllProducts > div.snacks");
var divMasala = document.querySelectorAll("#DivAllProducts > div.masala");

function selectProduct(evt) {
      var selectCategorytext = selectCategory.options[selectCategory.selectedIndex].text;

      if (selectCategorytext == "Cookies") {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divCookies.forEach(function (eleCookies) {
                  eleCookies.style.display = "block";
            });

      } else if (selectCategorytext == "Namkeen") {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divNamkeen.forEach(function (eleNamkeen) {
                  eleNamkeen.style.display = "block";
            });
      } else if (selectCategorytext == "Sweets") {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divSweets.forEach(function (eleSweets) {
                  eleSweets.style.display = "block";
            });
      } else if (selectCategorytext == "Petha") {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divPetha.forEach(function (elePetha) {
                  elePetha.style.display = "block";
            });
      } else if (selectCategorytext == "Spicy") {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divSpicy.forEach(function (eleSpicy) {
                  eleSpicy.style.display = "block";
            });
      } else if (selectCategorytext == "Dry Fruits") {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divDryFruits.forEach(function (eleDryFruits) {
                  eleDryFruits.style.display = "block";
            });
      } else if (selectCategorytext == "Snacks") {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divSnacks.forEach(function (eleSnacks) {
                  eleSnacks.style.display = "block";
            });
      } else if (selectCategorytext == "Masala") {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divMasala.forEach(function (eleMasala) {
                  eleMasala.style.display = "block";
            });
      } else {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "block";
            });
      }
}
/*page jump from home page*/
setTimeout(function () {

      var prodName;
      const urlText = window.location.href;
      const encodedURL = encodeURI(urlText.toLowerCase());
      var divAllProducts = document.querySelectorAll("#DivAllProducts > div");
            
           

      if (prodName = encodedURL.match("cookies")) {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divCookies.forEach(function (eleCookies) {
                  eleCookies.style.display = "block";
                  selectCategory.options[1].selected = true;
            });
      } else if (prodName = encodedURL.match("sweets")) {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divSweets.forEach(function (eleSweets) {
                  eleSweets.style.display = "block";
                  selectCategory.options[8].selected = true;
            });
      } else if (prodName = encodedURL.match("dry-fruits")) {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divDryFruits.forEach(function (eleDryFruits) {
                  eleDryFruits.style.display = "block";
                  selectCategory.options[2].selected = true;
            });
      } else if (prodName = encodedURL.match("snacks")) {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divSnacks.forEach(function (eleSnacks) {
                  eleSnacks.style.display = "block";
                  selectCategory.options[6].selected = true;
            });
      } else if (prodName = encodedURL.match("petha")) {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divPetha.forEach(function (elePetha) {
                  elePetha.style.display = "block";
                  selectCategory.options[5].selected = true;
            });
      } else if (prodName = encodedURL.match("namkeen")) {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divNamkeen.forEach(function (eleNamkeen) {
                  eleNamkeen.style.display = "block";
                  selectCategory.options[4].selected = true;
            });
      } else if (prodName = encodedURL.match("spicy")) {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divSpicy.forEach(function (eleSpicy) {
                  eleSpicy.style.display = "block";
                  selectCategory.options[7].selected = true;
            });
      } else if (prodName = encodedURL.match("masala")) {
            divAllProducts.forEach(function (ele) {
                  ele.style.display = "none";
            });
            divMasala.forEach(function (eleMasala) {
                  eleMasala.style.display = "block";
                  selectCategory.options[3].selected = true;
            });
      }

}, 1000, {once: true});

var innerDivChat = document.querySelectorAll(".vendor-wrapper a");
            innerDivChat.forEach(function(el){
             if (/webOS|iPhone|iPad/i.test(navigator.userAgent)) {
                        el.setAttribute("href", "https://apps.apple.com/us/app/go-pure-app/id1558129667");
                  }else{
                        el.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mcn.mcnecomandroid");
            }
});