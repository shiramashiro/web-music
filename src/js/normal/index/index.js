let length = slideshowItem.length
let currIndex = 0
let nextIndex = currIndex + 1

// currIndex = 0 c->l,nextIndex = 1 r->c
// currIndex = 1 c->l,nextIndex = 2 r->c
// currIndex = 2 c->l,nextIndex = 0 r->c
// currIndex = 0 c->l,nextIndex = 1 r->c
function changeSlideshowClassName() {
    slideshowItem[nextIndex].classList.remove('show-slideshow')
    if (currIndex == length - 1) {
        currIndex = 0
    } else {
        currIndex++
    }
    if (nextIndex == length - 1) {
        nextIndex = 0
    } else {
        nextIndex++
    }
    slideshowItem[currIndex].classList.add('sliding-from-current-to-left') // 将当前的图片向左移动
    slideshowItem[nextIndex].classList.add('sliding-from-right-to-current')
    setTimeout(() => {
        slideshowItem[currIndex].classList.remove('sliding-from-current-to-left')
        // 2s 之后关闭右边移动的图片动画
        slideshowItem[nextIndex].classList.remove('sliding-from-right-to-current')
        // 显示下一张图片
        slideshowItem[nextIndex].classList.add('show-slideshow')
    }, 2000)
}

function start() {
    setInterval(() => {
        changeSlideshowClassName()
    }, 3000)
}

start()

function createDOM() {
    for (let i = 0; i < songs.length; i++) {
        let dom = document.createElement('div')
        dom.setAttribute('class', 'song-item')
        dom.innerHTML = `
            <img src="${songs[i].surface}"/>
            <div class="desc">${songs[i].desc}</div>
        `
        songsList.appendChild(dom)
    }
}

createDOM()
