const bar = document.querySelector(".bar");

addEventListener("scroll", function() {

     const max = document.body.scrollHeight - innerHeight;
     const pourcentage = pageYOffset / max *100;

     bar.style.width = pourcentage + "%" ;
});
