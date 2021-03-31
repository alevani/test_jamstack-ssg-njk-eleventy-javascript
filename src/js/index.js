function random_color_picker(){ return Math.random() * 255}

document.querySelector('h2').style.color = `rgb(${random_color_picker()},${random_color_picker()},${random_color_picker()})`