/**
 * 音乐播放类
 *
 * @author 郑人滏
 * @since 2021年9月23日00:22:55
 * @description 用于控制一个音频元素的上一曲，下一曲，以及控制音频元素的播放或暂停。
 * 需要提供一个音乐数据、索引值从何开始的、音乐最开始是否播，以及音乐元素的dom节点。
 */
class Player {
    /**
     *
     * @param {Array} array 音乐列表
     * @param {Number} index 起始索引值
     * @param {Boolean} flag 播放标志
     * @param {Element} node 音频DOM节点
     */
    constructor(array, index, flag, node) {
        this.array = array
        this.index = index
        this.flag = flag
        this.node = node
    }

    set setIndex(_index) {
        this.index = _index
    }

    get getIndex() {
        return this.index
    }

    /**
     * 切换上一首歌
     *
     * @param {Function} callback 回调函数，提供切换后的索引值以及音乐
     */
    last(callback) {
        this.index--
        if (this.index < 0) this.index = this.array.length - 1
        this.node.src = this.array[this.index].src
        callback({ index: this.index, data: this.array[this.index] })
    }

    /**
     * 切换下一首歌
     *
     * @param {Function} callback 回调函数，提供切换后的索引值以及音乐
     */
    next(callback) {
        this.index++
        if (this.index > this.array.length - 1) this.index = 0
        this.node.src = this.array[this.index].src
        callback({ index: this.index, data: this.array[this.index] })
    }

    /**
     * 暂停或播放歌曲
     *
     * @param {Function} callback 回调函数，提供暂停或播放之后的标志
     */
    control(callback) {
        if (this.flag) {
            this.node.pause()
            this.flag = false
        } else {
            this.node.play()
            this.flag = true
        }
        callback({ flag: this.flag })
    }
}
