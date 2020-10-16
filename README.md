<h1 align="center">stimulus-audio</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/stimulus-audio" rel="nofollow">
    <img src="https://badge.fury.io/js/stimulus-audio.svg" alt="npm version">
  </a>
</p>

<p align="center">
  <b>Play audio files - even on iPhone</b></br>
  <sub>Barely exists with &lt;20 LOC </sub>
</p>

<br />

- **Supports iOS on Safari**: what restriction? :)
- **Simple**: it's just a wrapper on Audio()
- **MIT Licensed**: free for personal and commercial use

## This wasn't supposed to be hard

If you look online, it's fucking crazy how many developer-hours have been sunk into trying to make iPhone Safari play sounds. What initially seems like it should be the simplest thing in the world is just the entry-point to a rabbit hole full of worms, sitting on the tip of an iceberg. All of this because Apple - in their infinite wisdom - decided to make Safari refuse to play sounds unless the user initiated them with a tap.

Enough. This ends, now.

Just drop an `audio` controller on your `body` and you will have a fully unlocked audio player available.

## Setup

First, add stimulus-audio to your `package.json`:

`yarn add stimulus-audio`

Add stimulus-audio to your main JS entry point or Stimulus controllers root folder:

```js
import { Application } from 'stimulus'
import Audio from 'stimulus-audio'

import { definitionsFromContext } from 'stimulus/webpack-helpers'
const application = Application.start()
const context = require.context('../controllers', true, /\.js$/)
application.load(definitionsFromContext(context))

// Manually register Audio as a Stimulus controller
application.register('audio', Audio)
```

Add an `audio` controller to your `body`:

```html
<body data-controller="audio"></body>
```

Finally, you can play sounds from anywhere in your application using the `audio` accessor from the DOM element you put the controller on. This is a reference to a standard [Audio](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio) object, which supports `play`, `pause` and many other family favorites.

```js
document.body.audio.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3'
document.body.audio.play()
```

Note that `play()` returns a Promise, so you can do this:

```js
document.body.audio.play()
  .then(() => console.log('The song has finished.'))
  .catch(err => console.log('There was an error:', err))
```

<tiny>It's that easy.</tiny>

## Contributing

Bug reports and pull requests are welcome.

## License

This package is available as open source under the terms of the MIT License.
