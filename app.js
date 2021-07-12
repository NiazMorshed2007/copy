window.addEventListener('load', () => {
    setTimeout(primary, 200);
})




const slider = document.querySelectorAll(".container > div");
const leftItem = document.querySelectorAll('.left > p');
const indexNum = document.querySelectorAll(".index-toggle");


let counter = 0;
// let num = 1;
arr = ['active', 'leftAnima'];
arr2 = ['first', 'second', 'third'];




function primary() {
    if (counter <= 0) {
        slider[0].classList.add(arr[0]);
        slider[0].children[0].classList.add(arr[1]);
        document.querySelector('.index-wrapper').children[counter].classList.add('index-active');

    } else {
        slider[0].classList.remove(arr[0]);
        slider[0].children[0].classList.remove(arr[1]);
    }
}



document.body.addEventListener('keydown', key);

function key(event) {
    if (event.keyCode == 37) {
        leftMove();
    }

    if (event.keyCode == 39) {
        rightMove();
    }
}


function txt() {
    if (slider[counter].classList.contains("active")) {
        document.querySelector(".txt").innerHTML = slider[counter].children[0].children[0].textContent;
    }
}


// function fu() {

// }

// fu();


function rightMove() {
    //     counter;
    nav();


    if (counter < (slider.length - 1)) {
        counter++;
        let active = counter;
        console.log(counter);



        for (let i = 0; i < slider.length; i++) {

            if (active == i) {
                slider[counter].classList.add(arr[0]);
                slider[counter].children[0].classList.add(arr[1]);
                document.querySelector('.index-wrapper').children[counter].classList.add('index-active');
                txt();

            } else {
                slider[i].classList.remove(arr[0]);
                slider[i].children[0].classList.remove(arr[1]);
                document.querySelector('.index-wrapper').children[i].classList.remove('index-active');
            }
        }
    }
}




function leftMove() {
    if (counter > 0) {
        counter--;
        let active = counter;
        for (let i = 0; i < slider.length; i++) {
            if (active == i) {
                slider[counter].classList.add(arr[0]);
                slider[counter].children[0].classList.add(arr[1]);
                document.querySelector('.index-wrapper').children[counter].classList.add('index-active');
                txt();
            } else {
                slider[i].classList.remove(arr[0]);
                slider[i].children[0].classList.remove(arr[1]);
                document.querySelector('.index-wrapper').children[i].classList.remove('index-active');
            }
        }
    }
}




function nav() {
    indexNum.forEach((e, index) => {
        e.addEventListener("click", () => {
            let counter = index;
            let active = counter;
            console.log
            for (let i = 0; i < slider.length; i++) {
                slider[counter].classList.add(arr[0]);
                slider[counter].children[0].classList.add(arr[1]);
                document.querySelector('.index-wrapper').children[counter].classList.add('index-active');
                txt();

            }
        })

    })
}

nav();