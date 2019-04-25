setTimeout(() => {
    let $items_container = document.querySelector('.Projects__items');
    let $arrows = document.querySelectorAll('.arrow');

    let jumps = 0;
    let jumpsMax = Math.ceil($items_container.scrollWidth / $items_container.clientWidth); //cantidad(n) max. que podemos avanazar

    let maxScrollLeft = $items_container.scrollWidth - $items_container.clientWidth; // cantidad máxima de desplazamiento en px
    let jumpScroll = Math.round(maxScrollLeft / jumpsMax); // px que avanzara al hacer clicl


    const moveScroll = (jump) => {
        if (jump >= jumpsMax) {
            $items_container.scrollLeft = jumpScroll * jump;
            endState()
        } else if (jump <= 0) {
            $items_container.scrollLeft = jumpScroll * jump;
            startState()
        } else {
            $items_container.scrollLeft = jumpScroll * jump;
        }

    }
    const startState = () => {

        jumps = 0;
        $arrows[0].style.display = 'none';

    }

    const endState = () => {
        jumps = jumpsMax;
        $arrows[1].style.display = 'none';
    }


    $arrows.forEach(element => {
        if ($items_container.scrollWidth == $items_container.clientWidth) {
            element.style.display = 'none';
        }
        startState()
        element.addEventListener('click', (ev) => {
            if (ev.target.dataset.arrow == 'right') {
                $arrows[0].style.display = 'block';
                jumps++
                moveScroll(jumps)
            } else {
                $arrows[1].style.display = 'block';
                jumps--
                moveScroll(jumps)
            }

        })
    });

}, 200);