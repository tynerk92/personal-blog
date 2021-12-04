---
title: What Is Declarative Rendering In Vue?
subtitle: Core Vue Concepts
category:
  - Vue
author: Kylon Tyner
date: 2021-12-04T20:27:48.967Z
featureImage: /uploads/vue.png
number: 4
---
# What Is Declarative Rendering In Vue?

In order to understand declarative rendering, let's first see what it normally takes to dynamically update the DOM.

## Imperative Rendering

Traditional JavaScript uses imperative rendering techniques in order to manipulate the DOM.

```html
<div id="counter"></div>

<script>
  let counter = 0;
  
  setInterval(() => {
    this.counter++
    updateDOM()
  }, 1000)
  
  function updateDOM() {
    const counter = document.getElementById('counter');
    counter.innerHTML = `Counter: ${counter}`
  }
</script>
```

Here, we have to actually change the contents of the #counter div. In this example, it's not such a big deal because its only one element. However, if our application grows to be multiple pages or to have lots of functional pieces, this can get really tedious. That's where Vue comes in.

## Declarative Rendering

With declarative rendering, it is the data the determines how the DOM is rendered. Web frameworks, such as Vue, allow us to render the DOM declaratively. We provide the data, and let the framework determine what it needs to do in order to display that data correctly.

Here is the same example as above using declarative rendering in a Vue app.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="OKBENq" data-preview="true" data-user="thomasabishop" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/thomasabishop/pen/OKBENq">
  Vue.js CDN</a> by Thomas Bishop (<a href="https://codepen.io/thomasabishop">@thomasabishop</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

```html
<div id="counter">
  Counter: {{ counter }}
</div>

<script>
  const Counter = {
    data() {
      return {
        counter: 0
      }
    },
    mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
    }
  }
  
  Vue.createApp(Counter).mount('#counter')
</script>
```

In this example, every 1000ms (or 1 second), we are increasing the counter. Because of Vue's reactivity system, it knows to update the DOM with the new value. The reactivity system adds a layer of abstraction so that we no longer have to worry about **how** to render, we just have to tell Vue **what** to render.