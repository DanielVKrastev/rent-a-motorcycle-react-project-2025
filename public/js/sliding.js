const boxes = document.querySelectorAll('ul .box');
console.log(boxes);

window.addEventListener('scroll', checkBoxes);
checkBoxes();
function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
      
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        
        if(boxTop < triggerBottom){
            console.log('show');
            box.classList.add('show')
        } else{
            console.log('remove');
            box.classList.remove('show')
        }
    })
}

console.log(checkBoxes());