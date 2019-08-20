import imgSrc from '../assets/resume.pdf'
let download = document.querySelector('.PDF')
download.onclick = ()=>{
    let aLink = document.createElement('a')
    document.body.appendChild(aLink)
    aLink.href = imgSrc
    aLink.download = "李思情-前端简历.pdf"
    aLink.click()
    aLink.remove()
}