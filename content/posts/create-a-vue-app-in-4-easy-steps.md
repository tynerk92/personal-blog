---
title: Create a Vue3 App In 4 Easy Steps
subtitle: Everything You Need To Get Started
category:
  - Vue
author: Kylon Tyner
date: 2021-11-29T22:04:24.371Z
featureImage: /uploads/vue.png
---
I would imagine if you're reading this, you probably already know what Vue.js is. If you don't, be sure to check out my article explaining [what it is and why you should use it](https://www.kylontyner.com/what-is-vue).

## 1. Install Node/NPM

[Go here to install Node](https://nodejs.org/en/download/). After completing the installation wizard, open a new terminal (command prompt / powershell) and use these commands to verify that node and NPM are installed on your system.

```shell
node -v
npm -v
```

If the console outputs a version number, you have successfully installed Node and NPM! If it doesn't, try running the installer again.

## 2. Install Vue CLI

In order to make things easier, let's install the Vue CLI node package. The `-g` flag tells npm to install this package globally on your system.

```shell
npm install -g @vue/cli
```

## 3. Generate Project

Once that is installed, we can very easily create a new Vue app. Let's create one called `my-first-vue-app`

```shell
vue create my-first-vue-app
```

Running this command will take you through the project generation wizard. First, it will prompt you to pick a preset. In this case, let's select "Manually select features" at the bottom of the list.

![Select "Manually select features" when Vue prompts to pick a preset.](/uploads/vue-create-1.png "Manually Select Features")

Next, we select the features that we want to use.

![I selected: "Choose Vue Version", "Babel", "Typescript", "CSS Pre-processors", and "Linter / Formatter"](/uploads/vue-create-2.png "Vue Project Configuration")

Here are the specific features that I selected.

![Specific Features Selected are: "Vue Version 3.x", "Class-style syntax: No", "Babel: Yes", "CSS pre-processor: node-sass", "Linter/Formatter: Prettier", "Lint on save", "In dedicated config files"](/uploads/vue-create-3.png "Vue Project Features")

## 4. Serve The App

Great! Now that we've configured the app and let Vue CLI generate the project for us, we are ready to serve the app locally to see what it looks like. By default, vue generates an npm script called "serve" that we can use.

```shell
npm run serve
```

## That's It, We're Done!

Notice that when you run the `serve` command, at the end it prints out `App running at: Local: http://localhost:8080/`. That means if we visit that address in our browser, we can see the app running!

![The default Vue app page is displaying in the browser](/uploads/vue-create-done.png "Vue Default App")

Please let me know in the comments below if you have any questions, or if you need help getting things set up!