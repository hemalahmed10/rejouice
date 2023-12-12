function loco(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
loco();

function rejouiceanim(){
    gsap.from("#pag1-content>h1",{
    delay:0.7,
    y:420,
    stagger:0.25,
    duration:1,
});
};
rejouiceanim();
function rejouice2anim(){
    gsap.from(".page6-bottom h1",{
    delay:1,
    y:-500,
    stagger:0.25,
    duration:1,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        start:"top bottom",
        end:"bottom bottom",
        // markers:true,
        scrub:2
    },
});
};
rejouice2anim();

function cursorOn(){
var p1Content =document.querySelector("#pag1-content");
var cursor =document.querySelector("#cursor");

p1Content.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
    });
});
p1Content.addEventListener("mouseenter",(dets)=>{
    gsap.to(cursor,{
        scale:1,
        opacity:1
    });
});
p1Content.addEventListener("mouseleave",(dets)=>{
    gsap.to(cursor,{
        scale:0,
        opacity:0
    });
});
}
cursorOn();
function p2textanim(){
    gsap.from(".elem h1",{
    y:-620,
    stagger:0.25,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 30%",
        end:"top 40%",
        // markers:true,
        scrub:2
    },
});
};
p2textanim();

function p3textanim(){
    gsap.from("#page3-upper h1",{
        opacity:0,
        scale:0,
        stagger:0.25,
        duration:1,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 70%",
            end:"top 35%",
            scrub:2
        },
    });
};
p3textanim();

function p4textanim(){
    // var elem = document.querySelector(".elem h1");
    gsap.from("#page4-upper-bottom h1",{
    y:-320,
    stagger:0.25,
    duration:1,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top 50%",
        end:"top 35%",
        scrub:2
    },
});
};
p4textanim();

function seatanim(){
    gsap.to(".number h1",{
    y:-200,
    stagger:0.25,
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top 10%",
        end:"bottom 90%",
        // markers:true,
        scrub:2
    },
});
};
seatanim();

function p4cursorOn(){
    var p4Content =document.querySelector("#page4-bottom");
    var p4cursor =document.querySelector(".p4cursor");
    
    p4Content.addEventListener("mousemove",(dets)=>{
        gsap.to(p4cursor,{
            x:dets.x,
            y:dets.y,
        });
    });
    p4Content.addEventListener("mouseenter",(dets)=>{
        gsap.to(p4cursor,{
            scale:1,
            opacity:1
        });
    });
    p4Content.addEventListener("mouseleave",(dets)=>{
        gsap.to(p4cursor,{
            scale:0,
            opacity:0
        });
    });
}
p4cursorOn();