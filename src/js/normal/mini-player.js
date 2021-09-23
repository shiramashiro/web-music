let player = new Player(musics, 0, false, audio)

playerSurface.src = player.array[0].surface
playerTitle.innerText = player.array[0].title
playerAlbum.innerText = player.array[0].album

/**
 * mini播放器点击播放暂停时
 */
playerPlay.addEventListener('click', () => {
    player.control((data) => {
        if (data.flag) {
            playerPlay.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/playing(3).png'
        } else {
            playerPlay.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/stopped(3).png'
        }
    })
})

/**
 * mini播放器点击下一首时
 */
playerLast.addEventListener('click', () => {
    player.next((data) => {
        playerSurface.src = data.data.surface
        playerTitle.innerText = data.data.title
        playerAlbum.innerText = data.data.album
        playerPlay.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/stopped(3).png'
    })
})

/**
 * mini播放器点击上一首时
 */
playerNext.addEventListener('click', () => {
    player.last((data) => {
        playerSurface.src = data.data.surface
        playerTitle.innerText = data.data.title
        playerAlbum.innerText = data.data.album
        playerPlay.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/stopped(3).png'
    })
})

/**
 * mini播放器音乐停止时
 */
audio.addEventListener('ended', () => {
    player.next((data) => {
        playerSurface.src = data.data.surface
        playerTitle.innerText = data.data.title
        playerAlbum.innerText = data.data.album
        playerPlay.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/stopped(3).png'
    })
})
