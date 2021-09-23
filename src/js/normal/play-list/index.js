function createDOM() {
    for (let i = 0; i < musics.length; i++) {
        let music = document.createElement('div')
        music.setAttribute('class', 'music-item')
        music.innerHTML = `
            <img class="surface" src="${musics[i].surface}"/>
            <div class="middle">
                <div class="title">${musics[i].title}</div>
                <div class="album">${musics[i].album}</div>
            </div>
            <img class="play-btn" src="../../../static/img/common/black-play.png"/>
            <img class="more-action" src="../../../static/img/common/black-vertical-more.png"/>
        `
        musicList.appendChild(music)
    }
}

createDOM()
