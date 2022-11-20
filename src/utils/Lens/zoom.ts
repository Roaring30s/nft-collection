/**
 * Zooms into any image
 * @param {MouseEvent} e - Event  
 */

export function zoom(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    let zoomer = e.currentTarget;
    let nativeEvent = e.nativeEvent;
    let offsetX = nativeEvent.offsetX;
    let offsetY = nativeEvent.offsetY;
    let x = offsetX/zoomer.offsetWidth*100;
    let y = offsetY/zoomer.offsetHeight*100;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}