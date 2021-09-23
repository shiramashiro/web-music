let player = new Player(musics, 0, false, audio)

/**
 * 加载资源
 *
 * @author 郑人滏
 * @param {Number} index 索引值
 */
function loadResource(index) {
    audio.src = musics[index].src
    title.innerText = musics[index].title
    album.innerText = musics[index].album
    lyrics.innerText = musics[index].lyrics
    currentSurface.src = musics[index].surface
    controlBtn.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/stopped.png'
    masking.style.backgroundImage = 'url(' + musics[index].surface + ')'
}

/**
 * 旋转唱片
 *
 * @author 郑人滏
 * @param {Boolean} flag true 为开始旋转；false 为停止旋转
 */
function rotateSurface(flag) {
    if (flag) {
        currentSurface.classList.add('rotate-surface')
    } else {
        currentSurface.classList.remove('rotate-surface')
    }
}

function changeIcon(flag) {
    if (!flag) {
        controlBtn.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/stopped.png'
    } else {
        controlBtn.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/playing.png'
    }
}

/**
 * 清楚资源
 *
 * @author 郑人滏
 */
function clearResource() {
    axis.style.width = 0 + '%'
    rotateSurface(false)
}

/**
 * 格式化时间
 *
 * @author 郑人滏
 */
function formatTime(time) {
    let arr = (time / 60).toFixed(2).split('.')
    let result = ''
    if (arr[1] > 60) {
        let minute = parseInt(arr[0]) + 1
        let seconds = parseInt(arr[1]) - 60
        result = minute + ':' + seconds
    } else {
        result = arr[0] + ':' + arr[1]
    }
    return result
}

/* 初始化程序 */
function init() {
    setTimeout(() => {
        endTime.innerText = formatTime(audio.duration)
    }, 100)
    loadResource(0)
}

init()

/* */

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
        loadResource(data.index)
        clearResource()
        setTimeout(() => {
            endTime.innerText = formatTime(audio.duration)
        }, 100)
    })
})

lastBtn.addEventListener('click', () => {
    player.last((data) => {
        loadResource(data.index)
        clearResource()
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
    loadResource(data.index)
    clearResource()
    changeIcon(false)
})

processor.addEventListener('click', (event) => {
    let rate = (event.clientX - processor.getBoundingClientRect().left) / processor.getBoundingClientRect().width
    let percent = rate * 100
    axis.style.width = percent + '%'
    audio.currentTime = audio.duration * rate
})
