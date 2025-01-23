const heart = document.querySelector(".ri-heart-line")

let flag = 0
heart.addEventListener("click", () => {
    if (flag == 0) {
        heart.classList.add("like-icon")
        flag = 1
    } else {
        heart.classList.remove("like-icon")
        flag = 0
    }
})