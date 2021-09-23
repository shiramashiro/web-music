let player = new Player(musics, 0, false, audio)

playerSurface.src = player.array[0].surface
playerTitle.innerText = player.array[0].title
playerAlbum.innerText = player.array[0].album

playerPlay.addEventListener('click', () => {
    player.control((data) => {
        if (data.flag) {
            playerPlay.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/playing(3).png'
        } else {
            playerPlay.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/stopped(3).png'
        }
    })
})

playerLast.addEventListener('click', () => {
    player.next((data) => {
        playerSurface.src = data.data.surface
        playerTitle.innerText = data.data.title
        playerAlbum.innerText = data.data.album
        playerPlay.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/stopped(3).png'
    })
})

playerNext.addEventListener('click', () => {
    player.last((data) => {
        playerSurface.src = data.data.surface
        playerTitle.innerText = data.data.title
        playerAlbum.innerText = data.data.album
        playerPlay.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/stopped(3).png'
    })
})

audio.addEventListener('ended', () => {
    player.next((data) => {
        playerSurface.src = data.data.surface
        playerTitle.innerText = data.data.title
        playerAlbum.innerText = data.data.album
        playerPlay.src = 'https://generic-data.oss-cn-chengdu.aliyuncs.com/img/training/stopped(3).png'
    })
})
