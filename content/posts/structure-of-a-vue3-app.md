---
title: Structure of a Vue3 App
subtitle: A Breakdown of the CLI-Generated App
category:
  - Vue
author: Kylon Tyner
date: 2021-11-27T19:58:00.117Z
featureImage: /uploads/logo-vuejs-min.png
---
If you haven't already, go read my guide on [setting up a Vue3 App](https://www.kylontyner.com/create-a-vue-app-in-4-easy-steps). Once that is done, you're ready to dive in!

## Application Entry Point

Open your favorite code editor or IDE (I like [VSCode](https://code.visualstudio.com/) and [Atom](https://atom.io/)). If you open the directory where you created the Vue app (`my-first-vue-app` if you followed my first guide), you will see a directory tree like this.

![](/uploads/directory-tree.png "Vue3 Application Default Directory Tree")

Take a look at the file `my-first-vue-app/src/main.ts`.

```typescript
import { createApp } from "vue";
import App from "./App.vue"

createApp(App).mount("#app")
```

This tells Vue to create an application with the `App` component (from the file `App.vue` in the current directory) as the entry component and to mount the application inside whatever HTML element has an ID of "app".

So, if we take a look at the file `my-first-vue-app/public/index.html`, we can see that it is the entry-point for the Vue application because we see this.

```html
<html lang="">
  <head>
    ...
  </head>
  <body>
    ...
    <div id="app"></div>
  </body>
</html>
```

Now, back to the `App.vue` thing. Open the file `my-first-vue-app/src/App.vue`. This is the file referenced in `main.ts`. We will go into more detail later in this article.

## Component Structure

Each component in Vue should be contained inside of a single `.vue` file. Here, I'll break down the component into its 3 parts, but we'll go into more detail in future articles.

### The Template

```html
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>
```

### The Component

```html
<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>
```

### The Styles

```html
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

## App Configuration

Vue does not have any **required** configuration files, but can be configured through `main.ts`. More on that later.

However, we've asked Vue-CLI to provide us with some external tools. Namely: ESLint, TypeScript, and Babel.

In the project directory, each of these external tools have their own configuration file (`.eslintrc.js`, `tsconfig.json`, and `babel.config.js` respectively).

For more information on  these configuration files, look at the official documentation for [ESLint](https://eslint.org/docs/user-guide/configuring/), [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html), and [Babel](https://babeljs.io/docs/en/configuration)