function createMusicItem(surfaceSrc, titleText, albumText, playBtnSrc, moreActionSrc) {
    // 创建节点以及设置属性
    let music = document.createElement('div')
    music.setAttribute('class', 'music-item')
    let surface = document.createElement('img')
    surface.setAttribute('class', 'surface')
    surface.src = surfaceSrc
    let middle = document.createElement('div')
    middle.setAttribute('class', 'middle')
    let title = document.createElement('div')
    title.setAttribute('class', 'title')
    title.innerText = titleText
    let album = document.createElement('div')
    album.setAttribute('class', 'album')
    album.innerText = albumText
    let playBtn = document.createElement('img')
    playBtn.setAttribute('id', 'play-btn')
    playBtn.src = playBtnSrc
    let moreAction = document.createElement('img')
    moreAction.setAttribute('id', 'more-action')
    moreAction.src = moreActionSrc
    // 父节点添加子节点
    music.appendChild(surface)
    middle.appendChild(title)
    middle.appendChild(album)
    music.appendChild(middle)
    music.appendChild(playBtn)
    music.appendChild(moreAction)
    musicList.appendChild(music)
}

function forMusicItem() {
    let pbSrc = '../../../static/img/common/black-play.png'
    let maSrc = '../../../static/img/common/black-vertical-more.png'
    for (let i = 0; i < musics.length; i++) {
        createMusicItem(musics[i].surface, musics[i].title, musics[i].album, pbSrc, maSrc)
    }
}

forMusicItem()
