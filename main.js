for (let s = 1; s <= 6; s++) {
    let body = document.getElementById("container");
    let element = document.createElement("div");
    element.setAttribute("id", `box`);
    let inner = document.createElement("div");
    inner.setAttribute("class", `innerBox`);
    element.appendChild(inner);
    body.appendChild(element);
}

for (let f = 0; f <= 6; f++) {
    let box = document.querySelectorAll("#box");
    let cursor = document.querySelectorAll(".innerBox");
    box[f].addEventListener("mousemove", (q) => {
        cursor[f].style.left = q.clientX + "px";
        cursor[f].style.top = q.clientY + "px";
    });
}