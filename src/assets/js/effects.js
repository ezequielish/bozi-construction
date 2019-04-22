
function fade(element) {
    element.forEach(i => {
        let animate = i.offsetTop - 600;
        if (animate < scrollY) {
            i.setAttribute('style', 'transform:translateY(0px); transition:1s; opacity: 1')
        }
    })
}
//(element,elementTwo,transparant, painted)
//example backgroundEffect(element,elementTwo,1,0) active transparency
//example backgroundEffect(element,elementTwo,0,1) active painted
//example backgroundEffect(header,section3,0,1) //paint the header when it reaches section 2
function backgroundEffect(element, elementTwo, transp, pint) {
    if (pint) {

        let animate = elementTwo.offsetTop - 200;
        if (animate < scrollY) {
            element.setAttribute('style', 'background-color:#ffffff;  transition:.8s;');
        } else {
            element.setAttribute('style', 'background-color:#e8e3e34f;  transition:.8s;');

        }
    }
}
module.exports = {
    fade,
    backgroundEffect

}



