





// // set inital value to zero
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
let counter = 0;

btns.forEach(function (btn, index) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if( styles.contains("decrease")){
            counter -= 1
        }else if( styles.contains("increase")){
            counter += 1
        }else if( styles.contains("reset")){
            counter = 0
        }

        value.innerHTML = counter;
    })
})






























// btns.forEach(function (btn) {
//   console.log(btn);
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }

//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "#222";
//     }
//     value.textContent = count;
//   });
// });
