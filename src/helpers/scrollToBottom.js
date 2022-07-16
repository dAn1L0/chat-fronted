import {animateScroll} from 'react-scroll'


export const scrollToBottom = (id) => {

  animateScroll.scrollToBottom({
    container: id,
    duration: 0
  })
}

export const scrollToBottomAnimated = (id) => {

  animateScroll.scrollToBottom({
    container: id,
    duration: 250
  })
}