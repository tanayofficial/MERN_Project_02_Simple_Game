    
    const height = window.innerHeight;
    const width = window.innerWidth;

    let div = document.getElementsByClassName("b_01")[0];
    let imgContainer = document.getElementsByClassName("imgContainer");
    let crew = document.getElementsByTagName("img");
    let popContainer = document.getElementsByClassName("popContainer")[0];
    popContainer.style.visibility = "hidden";

    let point = document.getElementById("score");
    let liveScore = 0;
    point.innerHTML = liveScore;

    function showPopup() {
        popContainer.style.visibility = "visible";
        var audio = new Audio('win.wav');
        audio.play();
    }

    let c0 = -height - 1400;
    function loop0() {
        if (c0 == 0) {
            c0 = -height - 200;
        } else {
            c0++;
            imgContainer[0].style.marginBottom = height + c0 + 'px';
        }
    }
    let c1 = -height - 300;
    function loop1() {
        if (c1 == 0) {
            c1 = -height - 200;
        } else {
            c1++;
            imgContainer[1].style.marginBottom = height + c1 + 'px';
        }
    }
    let c2 = -height - 950;
    function loop2() {
        if (c2 == 0) {
            c2 = -height - 200;
        } else {
            c2++;
            imgContainer[2].style.marginBottom = height + c2 + 'px';
        }
    }
    let c3 = -height - 500;
    function loop3() {
        if (c3 == 0) {
            c3 = -height - 200;
        } else {
            c3++;
            imgContainer[3].style.marginBottom = height + c3 + 'px';
        }
    }
    let c4 = -height - 360;
    function loop4() {
        if (c4 == 0) {
            c4 = -height - 200;
        } else {
            c4++;
            imgContainer[4].style.marginBottom = height + c4 + 'px';
        }
    }
    let c5 = -height - 800;
    function loop5() {
        if (c5 == 0) {
            c5 = -height - 200;
        } else {
            c5++;
            imgContainer[5].style.marginBottom = height + c5 + 'px';
        }
    }
    let c6 = -height - 900;
    function loop6() {
        if (c6 == 0) {
            c6 = -height - 200;
        } else {
            c6++;
            imgContainer[6].style.marginBottom = height + c6 + 'px';
        }
    }

    let c7 = -height - 500;
    function loop7() {
        if (c7 == 0) {
            c7 = -height - 200;
        } else {
            c7++;
            imgContainer[7].style.marginBottom = height + c7 + 'px';
        }
    }

    let c8 = -height - 600;
    function loop8() {
        if (c8 == 0) {
            c8 = -height - 200;
        } else {
            c8++;
            imgContainer[8].style.marginBottom = height + c8 + 'px';
        }
    }

    let c9 = -height - 700;
    function loop9() {
        if (c9 == 0) {
            c9 = -height - 200;
        } else {
            c9++;
            imgContainer[9].style.marginBottom = height + c9 + 'px';
        }
    }

    let c10 = -height - 800;
    function loop10() {
        if (c10 == 0) {
            c10 = -height - 200;
        } else {
            c10++;
            imgContainer[10].style.marginBottom = height + c10 + 'px';
        }
    }



    setInterval(loop0, 1)
    setInterval(loop1, 3)
    setInterval(loop2, 2)
    setInterval(loop3, 4)
    setInterval(loop4, 2)
    setInterval(loop5, 3)
    setInterval(loop6, 4)
    setInterval(loop7, 2)
    setInterval(loop8, 1)
    setInterval(loop9, 4)
    setInterval(loop10, 3)

    function afterClick(index) {
        let nImg = document.createElement("img");
        nImg.src = "plantGif.gif"
        nImg.alt = "Plant gif"
        var audio = new Audio('click.wav');
        audio.play();
        console.log(imgContainer[1].childNodes[1]);
        imgContainer[index].replaceChild(nImg, crew[index]);
        setTimeout(divisible, 1000, index);
        liveScore += 10;
        point.innerHTML = liveScore;
        if (liveScore === 70) {
            setTimeout(showPopup, 1000)
        }
    }

    function divisible(index) {
        crew[index].style.opacity = 0;
    }
