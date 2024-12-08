console.log('sigh.. tailwind')

const box = document.querySelector('[data-role="box"]')
const add = document.getElementById('add')
const sub = document.getElementById('sub')


let count = 0

add.addEventListener('click', () => {
    count ++
    box.textContent = count
})
sub.addEventListener('click', () => {
    count --
    box.textContent = count
})
 