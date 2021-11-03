const levelOne = document.querySelector('.level-one')
const levelTwo = document.querySelector('.level-two')

const startGame = document.querySelectorAll('.start-game')
const Popup = document.querySelector('.tryagain-popup')

const uiLevel = document.querySelector('.ui-level')
const uiMessage = document.querySelector('.ui-message')

const spookyPicture = document.querySelector('.spooky-picture')
const screamSound = document.querySelector('.scream')

const collisionCheck = (value) => {
    console.warn(value)
    if (value === 'maze-border') {
        alert ('失敗，請重來')
        window.removeEventListener('mousemove', mouseMoveEvent)
        Popup.style.opacity = 1
        Popup.style.pointerEvents = 'all'
        startGame.forEach(item => {
            item.style.stroke = 'rgb(251, 138, 138)'
        })        
    }
    if (value === 'finish') {
        levelOne.style.pointerEvents = 'none'
        window.removeEventListener('mousemove', mouseMoveEvent)
        nextLevel()
    }
    if (value === 'end-game') {
        screamSound.play()
        console.log(spookyPicture)
        spookyPicture.style.display = 'block'
        document.body.style.background = 'black'
    }
}

startGame.forEach(item => {
    item.addEventListener('click', event => {
        window.addEventListener('mousemove', mouseMoveEvent)
    })
})

const mouseMoveEvent = (e) => {
    startGame.forEach(item => {
        item.style.stroke = 'rgb(17, 241, 22)'
    })
    Popup.style.opacity = 0
    Popup.style.pointerEvents = 'none'
    let check = e.target.classList.value
    collisionCheck(check)
}

const nextLevel = () => {
    levelOne.style.display = 'none'
    levelTwo.style.display = 'block'
    uiLevel.textContent = '第二關'
    uiMessage.textContent = '還有一關'
    Popup.style.opacity = 1
    Popup.style.pointerEvents = 'all'
    startGame.forEach(item => {
        item.style.stroke = 'rgb(251, 138, 138)'
    })    
}