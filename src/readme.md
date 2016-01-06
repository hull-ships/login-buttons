# Hull Login buttons

__The Hull Login Buttons are a set of minimal, fully fonctional Social Login buttons for your page__

## Settings
This ship is intentionally very minimal to cover only the simplest use cases.
Most specific customizations can be made by adding Custom CSS

##### Button Radius
Lets you change the button's border radius.


##### Custom CSS
The Custom CSS box lets you easily add css to change the button's design and layout.
The CSS class names themselves are encoded so they don't clash with other elements in the page.
With the Google Chrome console, It's easy to find a specific item's CSS.

From the Ship's customize screen, open the console and point at the item you're interested in. You'll see the encoded CSS class there.

For instance, let's say you want to remove the icons, put them all in a row so they look like this:

![login buttons customized](http://images.contentful.com/6dwooevx4aly/OhL5O6zdIqCaMK6M6SoGy/aa510f71288fa5c74ea3302fac6f0476/Screen_Shot_2016-01-05_at_11.29.35_AM.png)

Here's a video explaining how to do it, showing you how to find the right CSS classes to customize.

<iframe width="560" height="315" src="https://www.youtube.com/embed/AxVieB3GdQ8?list=PLu5Y2n597dyUMrinYIiYP3qF3AKl9Ph67" frameborder="0" allowfullscreen></iframe>

With Chrome, [you can open the Inspector with `Ctrl` + `Shift` + `I`](https://developer.chrome.com/devtools)


Here's the CSS we used to get this result: 

```
.FbaTvT3R3pWAOyNe03mAE {
  display: block;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}

.FbaTvT3R3pWAOyNe03mAE > span {
  display: block;
  width: auto;
  float: left;
  margin: 0 2px;
} 

._1mDwlhwBbmFPZOhrQHdJN2 {
  display:none;
}

._26bcT-KGqUXKkMB1pUFbNr{
  font-size:13px;
}

.pan6vCPqPjTY6Qu8oByVp{
  padding:2px 10px;
}
```
