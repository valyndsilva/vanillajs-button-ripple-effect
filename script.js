const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX;
        const y = e.clientY;
        // console.log(x,y); // point you click in the button with respect to the entire viewport
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        // console.log(buttonTop,buttonLeft); //exact position of the button
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
        console.log(xInside, yInside); // exact point clicked in the button
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    })
})