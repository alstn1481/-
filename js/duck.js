document.addEventListener("DOMContentLoaded", ()=>{

    const images = document.querySelectorAll("#index main img");
    
    let z = images.length - 1; /* 현재 이미지 3개중 index 2번을 보고있다. */
    const fade = () => {
        images.forEach (( i, j ) => {
            i.style.transition = "opacity = 1s";
            if (j != 0) {i.style.opacity = 0};
        });
        if ( z > 0) {
            images[z].style.opacity = 1;
            z--;
        } else {
            images.forEach(i => {
                i.style.opacity = 0;
                images[0].style.opacity = 1;
                z = 2;
            })
        }
        
    };




    setInterval(fade, 2000);
});///////////////////////전체 끝