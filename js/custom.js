const divs = document.querySelectorAll('div');

const handleMouseOver = (e) => {
    anime({
        targets: e.target, // this can be an array
        rotateY: 45,
    })
}

const handleMouseOut = (e) => {
    anime({
        targets: e.target,
        rotateY: 0
    })
}

divs.forEach(div => div.addEventListener("mouseover", handleMouseOver));
divs.forEach(div => div.addEventListener("mouseout", handleMouseOut));