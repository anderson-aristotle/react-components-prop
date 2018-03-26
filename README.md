# React Components

The basic unit you'll be working with in ReactJS is a component. Components are
pieces of our application that we can define once and reuse all over the place.

For an intro to components, watch [this video.](https://generalassembly.wistia.com/medias/h64z7lp1ir)

## Learning Objectives

After this lesson, you will be able to:

-   Identify and define React components
-   Describe why we use components in React
-   Build a React component
-   Describe JSX

### Components

If you're used to writing out all of a page's views in a single HTML file, using
React components is a very different way of approaching web development.

With React components, there is more integration and less separation of HTML,
CSS, and JavaScript.

-   Instead of creating a few large files, you will organize your web app into
  small, reusable components that encompass their own content, presentation,
  and behavior.

When using React, building components will be your main front-end task.

-   Because they're so encapsulated, components make it easy to reuse your code, test, and separate concerns.

### Identifying Components

Take a look at [CraigsList](https://boston.craigslist.org/search/aap) (note:
right click to open in a new tab!).

![](https://i.imgur.com/KyGkUDI.jpg)

Each listing is a component. How can you identify this?

-   Listings look identical in structure, but have different information    populating them
-   Listings are dynamically generated based on the user's search

Now go to [Amtrak.com](https://www.amtrak.com/home). We want to look at the
listing page, so put in any "From" (for example, New
York - Penn Station), any "To" (for example, Boston - South Station), and pick
any date. Hit "Find Trains". Now look at the listing page:

![](https://i.imgur.com/p8twGTj.png)

Scrolling down it, identify the visual "components" the website is comprised
of. We suggest drawing this out on paper! So something like this...

![](https://i.imgur.com/APxsAMF.png)

As you're drawing this out, think about the following questions...

-   Where do you see "nested components;" that is, where are there components inside another component? Where do you see just one "layer" instead?
-   Are there any components that share the same structure?
-   For components that share the same structure, what is different about them?

#### So -

What does a component look like? Let's start with a simple example...

### Code along: A Very Basic Component

In this section, we'll walk through:

-   Removing the pre-filled contents of your app.
    -   create-react-app filled your app with sample content - let's make room for your app!
-   Adding your own component definition.
    -   You want the app to display the words "Welcome to my Movies!"
-   Going through what we've done in detail!

To start, remove the entire contents of the `src/App.js` file.

Then, add the component definition below - and yes, we know there are no
semicolons here. Industry standards for React are to use semicolons as little
as possible!

-   With that said, many companies have their own programming style guide. While many companies don't use semicolons in React, some companies do - for example, AirBnB. It's important to check with your company for their practices!

```js
// bring in React and Component from React

import React, {Component} from 'react';

// define our Welcome component
class Welcome extends Component {
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <h1>Welcome to my Movies!</h1>
    )
  }
}

export default Welcome
```

#### Let's break down the things we see here...

`import React, {Component} from 'react'`

This imports React methods and the `Component` class from the React library.

`class Welcome`

This is the component we're creating. In this example, we are creating a
component and calling it "Welcome".

`extends Component`

We inherit from the `Component` React library class to create our component
definitions. Here, we are creating a new `Component` subclass called `Welcome`.

-   Because it extends (also known as inherits from) `Component`, our `Welcome` class gets to reuse code and capabilities from `React.Component`.

`render()`

Every component has, at minimum, a `render` method. The render method is what
renders the component to the screen, so it controls what is displayed for this
component. From this function, we return what we want to display.

-   In our case, we are rendering a "Welcome to my Movies!" heading: `<h1>Welcome to my Movies!</h1>`.

> Note! That heading tag above looks like it's straight out of HTML, but it's
> actually a special language called JSX, which you'll see more of later.
> For now, know that JSX will act like HTML when it's rendered to the screen.

`export default Welcome`

This exposes the `Welcome` class to other files. This means that other files can
`import` from the `App.js` file in order to use the `Welcome` class. In our
case, we'll be importing it into `index.js` by calling an `import` to `App.js`.

When we try to import something from `App.js`, JavaScript will attempt to match
a named export.

-   Our only named export in `App.js` is `Welcome`.

The `default` keyword means that if we try to import anything from this file
that the app can't find, JavaScript will automatically revert to importing
`Welcome` instead.

-   Only one default export is allowed per file.

#### Check it out!

If you switch to your browser and navigate to [local host port 3000](http://localhost:3000), you can
see your "Welcome to my Movies!" heading. This app dynamically reloads each
time you save, so you can check your changes at any point.

Wait - What's that HTML doing in my Javascript?

This is currently the contents of our `src/App.js` file:

```js
// bring in React and Component from React

import React, {Component} from 'react';

// define our Welcome component
class Welcome extends Component {
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <h1>Welcome to my Movies!</h1>
    )
  }
}

export default Welcome
```

Let's talk about the value that the render method returns. It looks an awful
lot like an HTML heading, but it's not. We often write out React components in
JSX.

Wait, what's that? Try it yourself alongside [this video](https://generalassembly.wistia.com/medias/dcps4dqziy) in [this codepen](https://codepen.io/susir/pen/wJPoBw) (note:
right click both links to open in a new tab!)

So, JSX allows us to write code that strongly resembles HTML. It is eventually
compiled to lightweight JavaScript objects.

Your `Welcome` component's `render` method:

-   Currently returns JSX, not HTML.
-   The JSX creates a heading with `'Welcome to my Movies!'`.
-   Your component reads this and renders a "Welcome to my Movies!" heading.

> React can be written without JSX. We won't be doing this, but if you want to
> learn more, check out [this blog post](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/)(note: open in new tab!).

#### Challenge: Add some more information

-   Change your `Welcome` component to return multiple lines.
    -   Add a line below the "Welcome to my Movies!" heading that will display something else to our users in an `h3`.

> Hint: Remember, the return statement in render can only return one DOM
> element. You can, however, place multiple elements within a parent div
> element.
