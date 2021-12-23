---
title: Handling User Input In Vue
subtitle: Vue Core Concepts
category:
  - Vue
author: Kylon Tyner
date: 2021-12-23T00:14:34.086Z
featureImage: /uploads/vue.png
number: 5
---
# Handling User Input In Vue

User input is necessary in any website or webapp. Without user input, our application would become a static page with no possible interactions. Vue has an intuitive way of handling all types of user input, so let's explore those here.

## Vue Event Binding Syntax

There are several ways to handle events in Vue, which might seem confusing at first.

```html
<div v-on:click="doSomething('test')"></div>
<div @click="doSomething('test')"></div>
<div @click.prevent="doSomething"></div>
<button 
  v-on="{ mousedown: doSomething, mouseup: doSomethingElse('test') }"
></button>
```

See what I mean? Those all look different, but they all do roughly the same thing.

### v-on

`v-on` is the standard directive that tells Vue to bind to an event on this element. Realizing it was annoying to type v-on for every event, Vue lets us use `@` as shorthand notation. That is why we can replace `v-on:click` with `@click`

However, if we use the uncommon object-syntax: `v-on={ event: function }`, we can't use shorthand notation.

[Go here to see the official **v-on** documentation](https://v3.vuejs.org/api/directives.html#v-on)

### Modifiers

In the example above, we saw `<div @click.prevent="doSomething"></div>`. You might be wondering what the `.prevent` is and what it does.

This is what [Vue calls an Event Modifier](https://vuejs.org/v2/guide/events.html#Event-Modifiers). In the case of `.prevent`, we're telling Vue that we would like to prevent any default behavior of this event.

This can be useful for overriding default browser event handlers. I've found it most useful when performing custom form submit actions, so as not to refresh the page:

```html
<form @submit.prevent="doSomething">
  <label for="first-name">First Name</label>
  <input id="first-name" type="text" placeholder="First Name">
  <label for="last-name">First Name</label>
  <input id="last-name" type="text" placeholder="Last Name">
  <button>Filter By Name</button>
</form>

...

<script>
  function doSomething(event) {
    // This will do something without refreshing the page
    // Because we have prevented the default form submit
  }
</script>
```

### Chaining Modifiers

Modifiers can be used together to form a Modifier Chain.

This will stop the event from propagating to child elements, and also prevent any default click events.

```html
<div @click.stop.prevent="doSomething"></div>
```

## Mouse Input Examples

@\[codepen](RwLLVEd, Vue Click Event Handling)