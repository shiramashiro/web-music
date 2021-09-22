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

/**
 * 控制音乐是否播放
 *
 * @author 郑人滏
 */
function controlMusic() {
    if (isPlaying) {
        audio.pause()
        isPlaying = false
        rotateSurface(false)
        changeIcon(false)
    } else {
        audio.play()
        isPlaying = true
        rotateSurface(true)
        changeIcon(true)
    }
    setTimeout(() => {
        endTime.innerText = formatTime(audio.duration)
    }, 100)
}

function changeIcon(flag) {
    if (!flag) {
        controlBtn.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/stopped.png'
    } else {
        controlBtn.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/playing.png'
    }
}

/**
 * 切换上一首歌
 *
 * @author 郑人滏
 */
function lastMusic() {
    clearResource()
    musicIndex--
    if (musicIndex < 0) {
        musicIndex = musics.length - 1
    }
    loadResource(musicIndex)
    setTimeout(() => {
        endTime.innerText = formatTime(audio.duration)
    }, 100)
}

/**
 * 切换下一首歌
 *
 * @author 郑人滏
 */
function nextMusic() {
    clearResource()
    musicIndex++
    if (musicIndex > musics.length - 1) {
        musicIndex = 0
    }
    loadResource(musicIndex)
    setTimeout(() => {
        endTime.innerText = formatTime(audio.duration)
    }, 100)
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
