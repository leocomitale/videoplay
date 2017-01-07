# videoplay
A deck.js extension to make embedded videos behave.

To use it, copy the javascript file to a new directory in your deck.js 
extensions library and add a directive to load it in your presentation file, for example:

```
<script src="deck/extensions/videoplay/deck.videoplay.js"></script>
```

Then whenever you insert a slide with an embedded ```<video>``` element, you won't need to use the control
options like ```autoplay``` and ```loop```.  The extension will automatically find videos in the slides, 
reset them to their start position, and play them in a loop until you move onto the next slide at which point they 
will be paused.
