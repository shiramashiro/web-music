audio.addEventListener('timeupdate', () => {
    axis.style.width = (audio.currentTime / audio.duration) * 100 + '%'
    setTimeout(() => {
        startTime.innerText = formatTime(audio.currentTime)
    }, 100)
})

audio.addEventListener('ended', () => {
    clearResource()
    changeIcon(false)
})

processor.addEventListener('click', (event) => {
    let rate = (event.clientX - processor.getBoundingClientRect().left) / processor.getBoundingClientRect().width
    let percent = rate * 100
    axis.style.width = percent + '%'
    audio.currentTime = audio.duration * rate
})
