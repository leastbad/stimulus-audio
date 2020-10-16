import { Controller } from 'stimulus'

export default class extends Controller {
  initialize () {
    this.element['audio'] = new Audio(
      'data:audio/mpeg;base64,//OExAAAAAAAAAAAAEluZm8AAAAHAAAABAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P39/f39/f39/f39/f39/f39/f39/f39/f3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAJAa/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUxAAAAANIAAAAAExBTUUzLjk2LjFV//MUxAsAAANIAAAAAFVVVVVVVVVVVVVV//MUxBYAAANIAAAAAFVVVVVVVVVVVVVV//MUxCEAAANIAAAAAFVVVVVVVVVVVVVV'
    )
    document.body.addEventListener('click', this.unlockAudio)
    document.body.addEventListener('touchstart', this.unlockAudio)
  }

  unlockAudio = () => {
    document.body.removeEventListener('click', this.unlockAudio)
    document.body.removeEventListener('touchstart', this.unlockAudio)
    this.element['audio']
      .play()
      .then(() => {})
      .catch(() => {})
  }
}
