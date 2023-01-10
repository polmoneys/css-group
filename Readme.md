### TLDR


Interfaces are made up of a wild combination of materials, how should we "group" them with CSS ?

Check [interactive demo](https://polmoneys.github.io/css-group/) with **Card**, **Panel** and **List**.

Cards for content, with aspect ratio, may or may not have media. 

Panels hold interactive children. 

Lists for...yeah. It may/may not have **start** and **end** slots. 


### Get started

CSS utility classes as **foo:bar**.

````html

<!-- Card -->
<article class="group card:landscape"  />
<!-- Panel -->
<article class="group panel"  />

````

Under **group** customize tokens and reset. 

Under **components** templates for cards, panels & lists. 

Under **utils** all you need to control layout and spacing. 

### Tooling

```bash

    # navigate to lib
    cd group
    # build
    yarn build

    # navigate to stories 
    cd stories
    # develop
    yarn dev
    # build
    yarn build

```

### Inspiration 💐


> Our requirements are more modest but at the same time more responsible: 
> buildings, furniture, drinking glasses may well be consumer items that 
> we can destroy without regret after they have served for some short or 
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic 
> enjoyment from observing them in use. 

Erik Gunnar Asplund on **Swedish Grace**.


### Feedback 


[Twitter](https://twitter.com/polmoneys)

[polmoneys.com](https://polmoneys.com)
