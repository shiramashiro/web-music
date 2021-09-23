let player = new Player(musics, 0, false, audio)

controlBtn.addEventListener('click', () => {
    player.control((data) => {
        if (!data.flag) {
            rotateSurface(false)
            changeIcon(false)
        } else {
            rotateSurface(true)
            changeIcon(true)
        }
        setTimeout(() => {
            endTime.innerText = formatTime(audio.duration)
        }, 100)
    })
})

nextBtn.addEventListener('click', () => {
    player.next((data) => {
        clearResource()
        loadResource(data.index)
        setTimeout(() => {
            endTime.innerText = formatTime(audio.duration)
        }, 100)
    })
})

lastBtn.addEventListener('click', () => {
    player.last((data) => {
        clearResource()
        loadResource(data.index)
        setTimeout(() => {
            endTime.innerText = formatTime(audio.duration)
        }, 100)
    })
})

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
