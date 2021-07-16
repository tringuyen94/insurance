const listenScrollEvent = () => {
    document.addEventListener('scroll')
}
export const toggle = (pageYvalue) => {
    if (window.pageYOffset > pageYvalue)
        return true
    else return false
}