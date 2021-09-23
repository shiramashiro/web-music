let player = new Player(musics, 0, false, audio)

playerSurface.src = player.array[0].surface
playerTitle.innerText = player.array[0].title
playerAlbum.innerText = player.array[0].album

function createDOM(surface, title, album) {
    let music = document.createElement('div')
    music.setAttribute('class', 'music-item')
    music.innerHTML = `
        <img class="surface" src="${surface}"/>
        <div class="middle">
            <div class="title">${title}</div>
            <div class="album">${album}</div>
        </div>
        <img class="play-btn" src="../../../static/img/common/black-play.png"/>
        <img class="more-action" src="../../../static/img/common/black-vertical-more.png"/>
    `
    musicList.appendChild(music)
}

function createItem() {
    for (let i = 0; i < musics.length; i++) {
        createDOM(musics[i].surface, musics[i].title, musics[i].album)
    }
}

createItem()

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
