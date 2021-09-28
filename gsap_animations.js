const factory = function(){

    gsap.fromTo("button", {y:-15, stagger: {amount:1}}, {y:0, stagger: {amount:1}});

    var makeEmoji = document. getElementsByClassName("makeEmoji")[0];
    var mood = makeEmoji.getElementsByClassName("mood")[0];
    var grinning = mood.getElementsByClassName("grinning")[0];
    
    // **** GRINNING FACE ****//
    grinning.onclick = function(){
        gsap.timeline()
        .to(".face", {x:150, duration:3})
        .to(".face", {x:300})
        .to(".eyes1", {x:600, rotation: 720, duration:3})
        .to(".grinningFace", {x:500, rotation: 720, duration:3})
        .to(".grinningFace", { ease: Bounce.easeOut, rotation: 360, y: 190, delay:2})
        .to(".grinningFace", {x:750, rotation: 720, opacity:0, duration:4});

        // **** MACHINE ****//
        gsap.to(".machine", {y:"+=4", yoyo:true, repeat:22});
        // **** TAPIS ****//
        gsap.to(".tapis", {x:"+=6", yoyo:true, repeat:22});
        // **** ROUE ****//
        gsap.to(".roue", {rotation:360, repeat:-1});
    }

    var makeEmoji = document. getElementsByClassName("makeEmoji")[0];
    var mood = makeEmoji.getElementsByClassName("mood")[0];
    var neutral = mood.getElementsByTagName("button")[1];
    
    //**** NEUTRAL FACE ****//
    neutral.onclick = function(){
        gsap.timeline()
        .to(".face", {x:150, duration:3})
        .to(".face", {x:300})
        .to(".eyes2", {x:600, rotation: 720, duration:3})
        .to(".neutralFace", {x:500, rotation: 720, duration:3})
        .to(".neutralFace", { ease: Bounce.easeOut, rotation: 360, y: 190, delay:2})
        .to(".neutralFace", {x:750, rotation: 720, opacity:0, duration:4});

        // ****MACHINE ****//
        gsap.to(".machine", {y:"+=4", yoyo:true, repeat:22});
        // ****TAPIS ****//
        gsap.to(".tapis", {x:"+=6", yoyo:true, repeat:22});
        // **** ROUE  ****//
        gsap.to(".roue", {rotation:360, repeat:-1});
    }

    var makeEmoji = document. getElementsByClassName("makeEmoji")[0];
    var mood = makeEmoji.getElementsByClassName("mood")[0];
    var rolling = mood.getElementsByTagName("button")[2];
    
    //**** ROLLING FACE ****//
    rolling.onclick = function(){
        gsap.timeline()
        .to(".face", {x:150, duration:3})
        .to(".face", {x:300})
        .to(".eyes3", {x:600, rotation: 720, duration:3})
        .to(".rollingFace", {x:500, rotation: 720, duration:3})
        .to(".rollingFace", { ease: Bounce.easeOut, rotation: 360, y: 190, delay:2})
        .to(".rollingFace", {x:750, rotation: 720, opacity:0, duration:4});

        // **** MACHINE ****//
        gsap.to(".machine", {y:"+=4", yoyo:true, repeat:22});
        // **** TAPIS ****//
        gsap.to(".tapis", {x:"+=6", yoyo:true, repeat:22});
        // **** ROUE  ****//
        gsap.to(".roue", {rotation:360, repeat:-1});
    }

    var makeEmoji = document. getElementsByClassName("makeEmoji")[0];
    var mood = makeEmoji.getElementsByClassName("mood")[0];
    var squinting = mood.getElementsByTagName("button")[3];
    
    //**** SQUINTING FACE ****//
    squinting.onclick = function(){
        gsap.timeline()
        .to(".face", {x:150, duration:3})
        .to(".face", {x:300})
        .to(".eyes4", {x:600, rotation: 720, duration:3})
        .to(".squintingFace", {x:500, rotation: 720, duration:3})
        .to(".squintingFace", { ease: Bounce.easeOut, rotation: 360, y: 190, delay:2})
        .to(".squintingFace", {x:750, rotation: 720, opacity:0, duration:4});

        // **** MACHINE ****//
        gsap.to(".machine", {y:"+=4", yoyo:true, repeat:22});
        // ****TAPIS ****//
        gsap.to(".tapis", {x:"+=6", yoyo:true, repeat:-1});
        // ****ROUE ****//
        gsap.to(".roue", {rotation:360, repeat:22});
    }

    var makeEmoji = document. getElementsByClassName("makeEmoji")[0];
    var mood = makeEmoji.getElementsByClassName("mood")[0];
    var tongue = mood.getElementsByTagName("button")[4];

     //**** TONGUE FACE ****//
     tongue.onclick = function(){
        gsap.timeline()
        .to(".face", {x:150, duration:3})
        .to(".face", {x:300})
        .to(".eyes5", {x:600, rotation: 720, duration:3})
        .to(".tongueFace", {x:500, rotation: 720, duration:3})
        .to(".tongueFace", { ease: Bounce.easeOut, rotation: 360, y: 190, delay:2})
        .to(".tongueFace", {x:750, rotation: 720, opacity:0, duration:4});

        // ****MACHINE ****//
        gsap.to(".machine", {y:"+=4", yoyo:true, repeat:22});
        // ****TAPIS ****//
        gsap.to(".tapis", {x:"+=6", yoyo:true, repeat:22});
        // ****ROUE ****//
        gsap.to(".roue", {rotation:360, repeat:-1});
    }
    
}

window.onload = factory;