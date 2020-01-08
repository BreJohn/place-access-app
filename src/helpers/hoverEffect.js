export function hoverEffect (e) {
    if (e.currentTarget.className.indexOf('hovered-state') < 0 && e.currentTarget.className.indexOf('wrapper') > -1) {
        e.currentTarget.classList.add('hovered-state')
    } else {
        e.currentTarget.classList.remove('hovered-state')
    }
}
