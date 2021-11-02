const levelOne = document.querySelector('.level-one')
const levelTwo = document.querySelector('.level-two')

const nextButton = document.querySelector('.next-button')

const uiLevel = document.querySelector('.ui-level')
const uiMessage = document.querySelector('.ui-message')

const spookyPicture = document.querySelector('.spooky-picture')
const screamSound = document.querySelector('.scream')

const collisionCheck = (value) => {
    if (value === 'maze-border') alert ('失敗，請重來')
    if (value === 'finish') {
        nextButton.style.opacity = 1
        nextButton.style.pointerEvents = 'all'
        levelOne.style.pointerEvents = 'none'
    }
    if (value === 'end-game') {
        screamSound.play()
        console.log(spookyPicture)
        spookyPicture.style.display = 'block'
        document.body.style.background = 'black'
    }
}

window.addEventListener('mousemove', (e) => {
    let check = e.target.classList.value
    collisionCheck(check)
})

nextButton.addEventListener('click', () => {
    levelOne.style.display = 'none'
    levelTwo.style.display = 'block'
    nextButton.style.opacity = 0
    nextButton.style.pointerEvents = 'none'
    uiLevel.textContent = '第二關'
    uiMessage.textContent = '還有一關'
})