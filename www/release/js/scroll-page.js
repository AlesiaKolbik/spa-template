"use strict";
scrollPages();

window.addEventListener('resize', function () {
    window.scrollTo(0, 0);
scrollPages();
});

function scrollPages() {
    const fullpade = document.getElementById('fullpage');
    const childNodeFulPage = fullpade.childNodes;
    let counterSections = 0;
    const heightWindow = document.documentElement.clientHeight;
    if (window.innerWidth <= 1024) {
        fullpade.parentNode.removeAttribute('style');
        fullpade.removeAttribute('style');
        for (let i = 0; i < childNodeFulPage.length; i++) {
            if (childNodeFulPage[i].nodeType === 1) {
                childNodeFulPage[i].removeAttribute('style');
                counterSections += 1;
            }
        }
        return;
    }

    for (let i = 0; i < childNodeFulPage.length; i++) {
        if (childNodeFulPage[i].nodeType === 1) {
            childNodeFulPage[i].style.height = heightWindow + 'px';
            counterSections += 1;
        }
    }

    fullpade.setAttribute('style', 'height:' + heightWindow * counterSections + 'px ;');
    fullpade.style.height = heightWindow * counterSections;
    fullpade.parentNode.style.overflow = "hidden";
    const lengthFullpade = fullpade.clientHeight;
    let lengthSection = lengthFullpade / counterSections;
    let lengthScroll = 0;

    document.onwheel = function (e) {

        if (window.innerWidth <= 1024) {
            return;
        }

        if (e.deltaY > 0) {
            if (Math.abs(lengthScroll + lengthSection) < lengthFullpade) {
                lengthScroll += lengthSection;
                fullpade.setAttribute('style', 'height:' + heightWindow * counterSections + 'px ;transform:translateY(-' + lengthScroll + 'px)');
            }

        }

        if (e.deltaY < 0) {
            if (-lengthScroll < 0) {
                lengthScroll -= lengthSection;
                fullpade.setAttribute('style', 'height:' + heightWindow * counterSections + 'px ;transform:translateY(-' + lengthScroll + 'px)');

            }

        }
    }
}
