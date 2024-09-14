// const others = document.querySelectorAll('.others');
const others = document.querySelectorAll('.others');

const text = document.getElementById('#span')

others.forEach(other => {
    other.addEventListener('click', () => {
        other.classList.toggle('active')

    })
});