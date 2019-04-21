
const transformInArray = (objectItem) => {
    $items = [];

    objectItem.forEach(item => {
        $items.push(item)
    })

    return $items
}

//This function is activated when start or carousel
function inizialitedCarrusel(itemsImg, btnCarrusel, countPortada) {
    /**Mark circle carrusel */

    let $itemBtn = transformInArray(btnCarrusel) //are created array circle in the carrusel

    $itemBtn.map((item, index) => {
        item.classList.remove('active_iten_circle')
        if (countPortada === index) {
            item.classList.add('active_iten_circle')
        }
    })

    /**Show img */
    let $imgCarrusel = transformInArray(itemsImg) //are created array img in the carrusel

    $imgCarrusel.map((img, index) => {
        img.style.opacity = 0;
        if (countPortada === index) {
            img.style.opacity = 1;
        }
    })
}

//This function is activated when you click on an item
function change(itemsImg, btnCarrusel, btn) {
    let $itemBtn = transformInArray(btnCarrusel) //are created array circle in the carrusel

    $itemBtn.map((item, index) => {
        item.classList.remove('active_iten_circle')//remove class item

        if (btn == index) {
            item.classList.add('active_iten_circle')//add class it item active
        }
    })

    /**Show img */
    let $imgCarrusel = transformInArray(itemsImg) //are created array img in the carrusel

    $imgCarrusel.map((img, index) => {
        img.style.opacity = 0;
        if (btn == index) {
            img.style.opacity = 1;
        }
    })
}

module.exports = {
    inizialitedCarrusel,
    change
}
