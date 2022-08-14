const main = document.querySelector('.main')
const diaryButton = document.querySelector('.diary-btn-open')
const diaryButtonClose = document.querySelector('.diary-btn-close')
const content = document.querySelector('.open')
const spockBtn = document.querySelector('.gif-spock-btn')
const prosper = document.querySelector('.prosper')

let audio = new Audio('https://www.trekcore.com/audio/background/tos_bridge_1_activate.mp3')
let keypress1 = new Audio('https://trekcore.com/audio/toscomputer/tos_keypress1.mp3')
let keypress8 = new Audio('https://trekcore.com/audio/toscomputer/tos_keypress8.mp3')
let spock = [new Audio('https://trekcore.com/audio/other/voice_spock_fascinating.mp3'), new Audio('https://trekcore.com/audio/other/voice_spock_mostillogical.mp3'), new Audio('https://trekcore.com/audio/other/voice_spock_logicimpeccable.mp3'), new Audio('https://trekcore.com/audio/other/voice_spock_vulcansneverbluff.mp3')]
let prosperAudio = new Audio('http://soundfxcenter.com/television/star-trek/8d82b5_Spock_Live_Long_And_Prosper_Sound_Effect.mp3')

function randomListIndex(array){
    length = array.length
    return Math.floor(Math.random() * length)
}

prosper.addEventListener('click', () => prosperAudio.play())

spockBtn.addEventListener('click', () => {
    spock[randomListIndex(spock)].play()
})

diaryButton.addEventListener('click', () => {
    audio.play()
    keypress1.play()
    diaryButton.classList.add('hidden')
    content.classList.remove('hidden')
    let i = 0;
    const interval = setInterval(() => {
        i++
        if (i > 99) {
            clearInterval(interval)
        }
        content.style.opacity = scale(i, 100, 0, 1, 0)
    }, 5)
})

diaryButtonClose.addEventListener('click', () => {
    keypress8.play()
    let i = 100;
    const interval = setInterval(() => {
        i--
        if(i<1) {
            content.classList.add('hidden')
            diaryButton.classList.remove('hidden')
            clearInterval(interval)
        }
        content.style.opacity = scale(i,100, 0, 1, 0)
    }, 5)
})

const scale = (num, in_min, in_max, out_min, out_max) =>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
