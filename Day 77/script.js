function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // finish this function
    let viewStr
    if (views < 1000000) {
        viewStr = views
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "m"
    }
    else {
        viewStr = views / 1000 + "k"
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} moths ago </p>
            </div>
        </div > `

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduciton to Web Development Course | Sigma Web Development Video # 1", "CodeWithHarry", 450000, 7, "35.45", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg")
