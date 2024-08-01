const typingContainers = document.getElementById("typing-containers");
window.onmousedown = e => {
    if (typingContainers.dataset.clicked === "true") return;
    typingContainers.dataset.clicked = "true";
    const textToType = "Hello, welcome to my website!";
    const lines = ['Bobba Fett likes bobba','TQQQ TO THE MOON', "bubba likes protein", 'trigggggggggggggggggggger']
    const elements = document.getElementsByClassName('typing-container');
    let index = 0;

    let maxi = 0
    for (let i = 0; i < lines.length; i++){
        maxi = Math.max(maxi,lines[i].length);
    }
    function type() {
        let errors = 0
        if (index < maxi){
            for (let i = 0; i < elements.length; i++){       
                elements[i].textContent += lines[i].charAt(index);
            }
            index++;
            setTimeout(type, 100); // Adjust typing speed here (milliseconds per character)
        }
        
    }

    type();
};

function moveDivToCoordinates(x, y,t) {
    const div = t;
    div.style.left = x + 'px';
    div.style.top = y + 'px';
}

onload = e => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let elements = document.getElementsByClassName('typing-container');
    
    for (let i = 0; i < elements.length; i++){
        moveDivToCoordinates(width/2, height/2 - i*100,elements[i]);
    }
}