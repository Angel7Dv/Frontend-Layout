gsap.registerPlugin(ScrollTrigger)

const feats = gsap.timeline({
    repeat:0,
    scrollTrigger:{
        trigger: '#hero',
        start: 'top top',
        scrub: 3
    }
    
})

feats.from('#hero-img',{
    duration: 1,
    y:40,
    delay: 0,
    opacity: 1
})
feats.to('#hero-text',{
    duration: 1,
    y:10,
    delay: 0,
    opacity: 1
},'-=1')
feats.from('#hero-text-2',{
    duration: 1,
    y:250,
    delay: 0,
    opacity: 1
},'-=1')




// feats.from('#feat_1',{
//     duration: 1,
//     x:240,
//     delay: 0,
//     opacity: 1
// },'-=1.5')






// gsap.fromTo('#img', {opacity: 0, y: 20}, {
//     opacity: 1,
//     display: "block",
//     y: 0,
//     stagger: 0.08,
//     paused: true
//   });
// el.addEventListener("mouseover", () => animation.play());
// el.addEventListener("mouseout", () => animation.reverse());





// // mousover
// gsap.utils.toArray("#menu > li").forEach(el => {
//     // get just the nested <li> submenu items inside this one
//     let items = el.querySelectorAll("ul > li");
//     // if any are found, create the animation and mouseover/mouseout listeners
//     if (items.length > 0) {
//         let animation = gsap.fromTo(items, { opacity: 0, y: 20 }, {
//             opacity: 1,
//             display: "block",
//             y: 0,
//             stagger: 0.08,
//             paused: true
//         });
//         el.addEventListener("mouseover", () => animation.play());
//         el.addEventListener("mouseout", () => animation.reverse());
//     }
// });



/*
 
ul{
list-style: none;
}
#menu li>a{
background-color: grey;
color: white;
padding: 10px;
display: block;
text-decoration: none;
min-width: 100px;
}
#menu li>a:hover{
color: #000;
background-color: #eaeaea;
}
#menu>li{
float: left;
text-align:center
}
#menu>li>ul>li{
display: none;
}
*/ 