import randomColor from 'randomcolor'

export default function generateRandomColor(len) {
    let colors = []
    for(let i = 0; i < len; i++) {
        colors.push(randomColor())
}
    return colors
}