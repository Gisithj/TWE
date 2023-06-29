function animateFrom(elem) {
    // direction = direction || 1;
    var x = 0
    var y=0
        // y = direction * 100;
    if(elem.classList.contains("fadein-up")) {    
      x = 0;
      y = 50;
    } else if (elem.classList.contains("fadein-LTR")) {
      x = -200;
      y = 0;
    }else if (elem.classList.contains("fadein-up-text")) {
      x = 0;
      y = 250;
    }else if(elem.classList.contains("fadein-up-form-tab")) {
      x = 0;
      y = 250;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    
    if (elem.matches(".fade-in.fadein-LTR")) {
      gsap.to(elem,{
        duration: 2.5,
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "power1", 
        
        // overwrite: "auto"
      });
    }else if(elem.matches(".fade-in.fadein-up-text")){

      gsap.to(elem,{
        duration: 2.5,   
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        
        
        // overwrite: "auto"
      });
    }else if(elem.matches(".fade-in.fadein-up-form-tab")){

      console.log("clicked");
      gsap.to(elem,{
        duration: 1,   
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        clearProps:"x,y"
        
        // overwrite: "auto"
      });
    }else{
      gsap.to(elem, {
        duration: 2.5, 
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "power1", 
        // overwrite: "auto"
      });
    }
    
    
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".fade-in").forEach(function(elem) {
      
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        // markers:true,
        start:"-200px center",
        end:"+=300",
        onEnter: function() { animateFrom(elem) }, 
        once:true,
        // onEnterBack: function() { animateFrom(elem, -1) },
        // onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });

  $("li").on("click", function() {

    if($(this).hasClass("weddings")){
      activateTab("weddings");
    }
    else if($(this).hasClass("engagements")){
      activateTab("engagements");
    }
    else if($(this).hasClass("casual-shoots")){
      activateTab("casual-shoots");
    }
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".form-tab.fade-in").forEach(function(elem) {
      hide(elem); 
      console.log(elem);
      ScrollTrigger.create({
        trigger: elem,
        // markers:true,
        start:"-300px 20%",
        end:"bottom top",
        once:true,
        onEnter: function() { animateFrom(elem) }, 
      });
    });
  });


  function activateTab(a){
    const forms = document.getElementsByClassName("form-tab");
    Array.from(forms).forEach(function(form){
      form.classList.remove("tab-active")
    
        if(form.classList.contains(a)){
          if(!(form.classList.contains("tab-active"))){
          form.classList.add("tab-active")
          }
        }// }else{
          
        // }
     
      
    }) 
}



// $("a").on("click", function() {
//   console.log("clicked");
// $(this).classList.add("tab-active")
// })
//  document.getElementsByClassName("nav-link").addEventListener("Click",function(){
//    this.classList.add("active")
//  })

