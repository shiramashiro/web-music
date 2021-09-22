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
        controlBtn.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/stopped.png'
    } else {
        audio.play()
        isPlaying = true
        rotateSurface(true)
        controlBtn.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/playing.png'
    }
}

/**
 * 切换上一首歌
 *
 * @author 郑人滏
 */
function lastMusic() {
    musicIndex--
    if (musicIndex < 0) {
        musicIndex = musics.length - 1
    }
    loadResource(musicIndex)
}

/**
 * 切换下一首歌
 *
 * @author 郑人滏
 */
function nextMusic() {
    musicIndex++
    if (musicIndex > musics.length - 1) {
        musicIndex = 0
    }
    loadResource(musicIndex)
}

/* 为按钮添加事件 */

controlBtn.onclick = controlMusic
lastBtn.onclick = lastMusic
nextBtn.onclick = nextMusic

/* */

/* 初始化程序 */
function init() {
    loadResource(0)
}

init()

/* */
