let rotateValue = 0 // 旋转角度
let begin
let headerImgDom = document.getElementById('img')

// 图片旋转
function rotateImg() {
    begin = setInterval(function () {
        rotateValue += 2
        headerImgDom.style.transform = 'rotate(' + rotateValue + 'deg)'
        headerImgDom.style.width = 'width:' + 15 + 'px;'
        headerImgDom.style.width = 'height:' + 15 + 'px;'
    })
}

// 图片复位
function reply() {
    begin = setInterval(function () {
        rotateValue = rotateValue
        headerImgDom.style.transform = 'rotate(' + rotateValue + 'deg)'
    })
}

// 监听点击事件
headerImgDom.addEventListener('click', () => {
    if (rotateValue == 0) {
        rotateImg()
    } else if (rotateValue > 360) {
        clearInterval(begin)
        reply()
    }
})

// 监听鼠标离开
headerImgDom.addEventListener('mouseleave', () => {
    clearInterval(begin)
    if (rotateValue != 0) {
        rotateValue = 0
        headerImgDom.style.transform = 'rotate(' + rotateValue + 'deg)'
    }
})

// 封装函数
function createAreaItem(domName, content) {
    let dom = document.getElementById(domName)
    let child = document.createElement('div')
    child.innerHTML = content
    dom.appendChild(child)
}

// 设立数组并循环
let array = [
    {
        title: '本地',
        src: '../../../../static/img/common/专辑.png'
    },
    {
        title: '喜欢',
        src: '../../../../static/img/common/喜欢.png'
    },
    {
        title: '电台',
        src: '../../../../static/img/common/直播.png'
    },
    {
        title: '歌单',
        src: '../../../../static/img/common/歌单.png'
    },
    {
        title: '历史',
        src: '../../../../static/img/common/最近.png'
    },
    {
        title: '已购',
        src: '../../../../static/img/common/购买.png'
    }
]

for (let index = 0; index < 3; index++) {
    createAreaItem(
        'area1',
        `
    <div>
        <button style=' transform: translate(0,-100%);'>
        ${array[index].title}
        <img  src="${array[index].src}"/>
        </button>
    </div>
    `
    )
}

for (let index = 3; index < 6; index++) {
    createAreaItem(
        'area2',
        `
    <div>
        <button style=' transform: translate(0,-100%);'>
        ${array[index].title}
        <img  src="${array[index].src}"/>
        </button>
    </div>
    `
    )
}
