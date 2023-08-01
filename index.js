
const addActiveClass = document.querySelectorAll('.panel');

addActiveClass.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    });
});

function removeActiveClasses () {
    addActiveClass.forEach(panel => {
        panel.classList.remove('active')
    });
}


