$(document).ready(function(){
        $(window).scroll(function(){
            // sticky navbar on scroll script
            if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }
            
            // scroll-up button show/hide script
            if(this.scrollY > 500){
                $('.scroll-up-btn').addClass("show");
            }else{
                $('.scroll-up-btn').removeClass("show");
            }
        });
        // slide-up script
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
            // removing smooth scroll on slide-up button click
            $('html').css("scrollBehavior", "auto");
        });
        $('.navbar .menu li a').click(function(){
            // applying again smooth scroll on menu items click
            $('html').css("scrollBehavior", "smooth");
        });
        // toggle menu/navbar script
        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });
        
    var typed = new Typed(".typing", {
        strings: [ "Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: [ "Developer",  "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    $('.carousel').owlCarousel({
                margin: 20,
                loop: true,
                autoplay: true,
                autoplayTimeOut: 2000,
                autoplayHoverPause: true,
                responsive: {
                    0:{
                        items: 1,
                        nav: false
                    },
                    600:{
                        items: 2,
                        nav: false
                    }
                    // 1000:{
                    //     items: 3,
                    //     nav: false
                    // }
                }
            });
        });


 


        $(".hover").mouseleave(
            function () {
              $(this).removeClass("hover");
            }
          );

          




          (function(){
            var addEvent = function(object, type, callback) {
                if (object == null || typeof(object) == 'undefined') return;
                if (object.addEventListener) {
                    object.addEventListener(type, callback, false);
                } else if (object.attachEvent) {
                    object.attachEvent("on" + type, callback);
                } else {
                    object["on"+type] = callback;
                }
            };
            function detectMouseMove() {
                // Initial container width
                var containerWidth = $('.container').outerWidth();
                document.addEventListener('mousemove', function(e) {
                    $('.hover').css({
                         left:  e.pageX
                    });
                    $('.left-side').css({
                        left: e.pageX + 75
                    });
                    var rightSideLeft = containerWidth - e.pageX;
                    $('.right-side').css({
                        right: rightSideLeft
                    });
        
                })
            }
            detectMouseMove();
            
            
            function detectTouch() {
                // Initial container width
                var containerWidth = $('.container').outerWidth();
                document.addEventListener('mousemove', function(e) {
                    $('.hover').css({
                         left:  e.pageX
                    });
                    $('.left-side').css({
                        left: e.pageX + 75
                    });
                    var rightSideLeft = containerWidth - e.pageX;
                    $('.right-side').css({
                        right: rightSideLeft
                    });
                })
            }
            detectMouseMove();
            
            function touchMove(){
                // Initial container width
                var containerWidth = $('.container').outerWidth();
                document.addEventListener('touchmove', function(e) {
                    $('.hover').css({
                         left:  e.pageX
                    });
                    $('.left-side').css({
                        left: e.pageX + 75
                    });
                    var rightSideLeft = containerWidth - e.pageX;
                    $('.right-side').css({
                        right: rightSideLeft
                    });
        
                })
            }
            
            touchMove();
            
            function detectInput(inputType){
                // Detect container width after resizing
                addEvent(window, "resize", function(event) {
                    var containerWidth = $('.container').outerWidth();
                    $(document).bind(inputType, function(e){
                        $('.hover').css({
                             left:  e.pageX
                        });
                        $('.left-side').css({
                            left: e.pageX + 75
                        });
                        var rightSideLeft = containerWidth - e.pageX;
                        $('.right-side').css({
                            right: rightSideLeft
                        });
                    });
                });
            }
            
            detectInput('mousemove');
            detectInput('touchmove');
            
        })();

        let mainPosts = document.querySelectorAll(".main-post");
        let posts = document.querySelectorAll(".post");
        
        let i = 0;
        let postIndex = 0;
        let currentPost = posts[postIndex];
        let currentMainPost = mainPosts[postIndex];
        
        let progressInterval = setInterval(progress, 100); // 180
        
        function progress() {
          if (i === 100) {
            i = -5;
            // reset progress bar
            currentPost.querySelector(".progress-bar__fill").style.width = 0;
            document.querySelector(
              ".progress-bar--primary .progress-bar__fill"
            ).style.width = 0;
            currentPost.classList.remove("post--active");
        
            postIndex++;
        
            currentMainPost.classList.add("main-post--not-active");
            currentMainPost.classList.remove("main-post--active");
        
            // reset postIndex to loop over the slides again
            if (postIndex === posts.length) {
              postIndex = 0;
            }
        
            currentPost = posts[postIndex];
            currentMainPost = mainPosts[postIndex];
          } else {
            i++;
            currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
            document.querySelector(
              ".progress-bar--primary .progress-bar__fill"
            ).style.width = `${i}%`;
            currentPost.classList.add("post--active");
        
            currentMainPost.classList.add("main-post--active");
            currentMainPost.classList.remove("main-post--not-active");
          }
        }





  let services = document.querySelectorAll('.services')

document.addEventListener('scroll', function(){
  let scrollTop = document.documentElement.scrollTop;
  for(var i = 0; i < services.length; i++){
  let elementTop = services[i].getBoundingClientRect().top;
  if (scrollTop > elementTop + 200){
    services [i].classList.add('show');
   }else{
    services[i].classList.remove('show');
  } }
  })



  let skills = document.querySelectorAll('.skills')

document.addEventListener('scroll', function(){
  let scrollTop = document.documentElement.scrollTop;
  for(var i = 0; i < skills.length; i++){
  let elementTop = skills[i].getBoundingClientRect().top;
  if (scrollTop > elementTop + 200){
    skills [i].classList.add('show');
   }else{
    skills[i].classList.remove('show');
  } }
  })

