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