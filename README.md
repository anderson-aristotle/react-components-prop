# React Components, Props, and State

The basic unit you'll be working with in ReactJS is a component. Components are
pieces of our application that we can define once and reuse all over the place.

For an intro to components, watch [this video.](https://generalassembly.wistia.com/medias/h64z7lp1ir)

## Learning Objectives

After this lesson, you will be able to:

-   Describe Props and State
-   Create a Component that renders Props
-   Create nested Components that pass Props
-   Create an initial state in a component
-   Change the state of a component

### Review and Refactor

`Movie` in `src/App.js` is our component class. It has a `render` method that returns the JSX for our movie information. Keeping components separate and organized is a best practice, so we created that class in its own file.

To show up on the page, though, that component still needs to actually be called from somewhere.  The main "hub" of our React app is `src/index.js`.  We'll investigate how `src/index.js` is currently loading and rendering the component, and we'll improve the code by making it more explicit and readable.

Look at your `src/index.js` file, and contrast it with the code below.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './App.js';

ReactDOM.render(
  <Movie />,
  document.getElementById('root')
)
```

The first (and smallest) difference is that we've dropped the CSS file import. We just aren't using it.

The next difference is that `import App from './App';` has turned into `import Movie from './App.js'`.

> This line imports the `Movie` component from the `src/App.js` file. Remember, the `default` part of `export default Movie` in `src/App.js` means that importing other names - like `App` - actually _already_ brings in the `Movie` component! As a best practice, though, we're going to explicitly import the `Movie` component.


The last difference is that `ReactDOM.render(
  <App />,` has turned into `ReactDOM.render(
    <Movie />,`.

> This changes the `ReactDOM.render()` call to explicitly say "Render whatever the component `Movie` returns."


### `Movie` exercise

#### Code along: Calling our `Movie` component explicitly

Update your `index.js` file to have the three changes listed above:
-   Delete the CSS import.
-   Change the component name that's imported to be your `Movie` component.
-   Change the component name that's used inside `ReactDOM.render` to be your `Movie` component.

> Check it out! You should be able to browse to [localhost port 3000](http://localhost:3000) and see that nothing has changed.


### Component Data with Props

The React framework was built to handle data that changes over time.

So far, we have defined a `Movie` component in `App.js`. The component's `render` method returns some movie information in JSX.

In `index.js`, we are importing this component, appending what the `Movie` component's `render` method returns to the virtual DOM, and rendering that.

This is great, but our data is hard coded into our component. Not exactly dynamic.

Rather than simply displaying hard coded information, let's make our component more reusable by passing data to it that it can display.

The question is, how do we pass data to our `Movie` component without hard coding it into the component's `render` method?

Find out! Try it yourself alongside [this video](https://generalassembly.wistia.com/medias/gchiu63slo) in [this codepen](https://codepen.io/susir/pen/vxWypq) _(note: right click both for new tab!)_

#### Code along: Adding props to our component

Let's use **props** to make our `Movie` component more flexible.

##### First, a single prop

We want to be able to pass our `Movie` component information it can display, then it can be reusable for many movies. Let's define a `title` prop for a movie title.

In your `src/index.js`, we'll change the line that renders the `Movie` component to include this `title` prop. The new line will be:

`<Movie title="Lord of the React: Fellowship of React Components" />`

> We pass in data wherever we are rendering our component. In rendering the `Movie` component above, we pass in a prop called "title" with a value of "Lord of the React: Fellowship of React Components".

Your `index.js` should now look like this:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './App.js';

ReactDOM.render(
  <Movie title="Lord of the React: Fellowship of React Components" />,
  document.getElementById('root')
)
```

Now, every time we render our component, we will pass in data.

If you check your application now, nothing has changed.  We're passing the `title` prop into the component, but the component isn't _using_ it yet.

In our component definition, we will change the `<h1>{movie.title}</h1>` to `<h1>{this.props.title}</h1>`. The portion `{this.props.title}` deserves a closer look:

-   `this` refers to the specific component instance.
-   `this.props` will collect all the props for this component instance.
-   `this.props.title` pulls out the `title` property from `this.props`.

> The `{}` syntax in JSX renders the result of any expression inside it. It works even without props. If you wrote `{2+2}` in your JSX, `4` would be rendered.

Now that we are receiving our movie data as a prop, we can get rid of the hard coded movie variable we had to define earlier.

In `App.js`, your `Movie` class should now look close to this:

```jsx
class Movie extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
```

> Check it out! You should be able to browse to [localhost port 3000](http://localhost:3000) to view this change!

## What about... multiple props?

Of course, we often want components to display more complex information. To do so, we can pass multiple properties to our component! We'll use the same two steps we took to add the first prop.

First, add another prop to the component call: `<Movie title="Lord of the React: Fellowship of React Components" />,` changes to `<Movie title="Mad Max: Fury Road" director="George Miller" />`.

Update your `index.js` file to reflect this:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

ReactDOM.render(
  <Movie title="Mad Max: Fury Road" director="George Miller" />,
  document.getElementById('root')
)
```

Now, in our component definition, we have to access both values. The second step is to change the `Movie` component class in `App.js` to use the director information!


```js
class Movie extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Directed by {this.props.director}</p>
      </div>
    )
  }
}
```


> Check it out! You should be able to browse to [localhost port 3000](http://localhost:3000) to view this change!

#### What about... multiple props passed from an object?

If we have many props, it might get difficult to keep track when we're passing everything in to render a component. A better practice is to organize values in some kind of object and then pass props to the component from that object. Let's see this strategy.

Currently, in `index.js`, we put a movie's information directly into the `ReactDOM.render` call. Instead, we'll create an object that holds movie information, making it clearer for other developers and easier to change in the future. In your `index.js file`, below the `import` statements, add this object definition:

``` js
const movie = {
  title: "Mad Max: Fury Road",
  director: "George Miller"
}
```

Next, we'll update what's passed into the component. Near the bottom of your `index.js`, modify the `ReactDOM.render()` call:

``` js
ReactDOM.render(
  <Movie
    title={movie.title}
    director={movie.director}
  />,
  document.getElementById('root')
)
```

For the title to display we don't have to change anything in `App.js`, because it's still receiving exactly the same values for exactly the same props. We're just sending it those values in a slightly different way.

> Check it out! If you browse to [localhost port 3000](http://localhost:3000) nothing should have changed.
> Try changing the values inside the `movie` object without changing the `ReactDOM.render()` call. See how the page updates.

#### Multiple props from a more complex object

Since we're just pulling props out of an object, we can use any object we want. For example, we can nest an array inside it.

Let's say our movie has some actors. Update your object to include an array:


``` js
const movie = {
  title: "Mad Max: Fury Road",
  director: "George Miller",
  actors: [
    "Tom Hardy",
    "Charlize Theron",
    "Nicholas Hoult"
  ]
}
```

Now we can use this new information as a prop, just like normal. You could choose to pass a single element (`actors[0]`) or the entire array.  We'll use the entire array so that the component can display _all_ a movies's actors. First, update your `ReactDOM.render()` call in `index.js`:


``` js
ReactDOM.render(
  <Movie
    title={movie.title}
    director={movie.director}
    actors={movie.actors}
  />,
  document.getElementById('root')
)
```

If you check your application now, nothing has changed. Remember, a component class will just ignore any props it receives that it doesn't use. But, we want to use the actors! So, second, update your `Movie` class' `render` method in `App.js`:

```html
<div>
  <h1>{this.props.title}</h1>
  <p>Directed by {this.props.director}</p>
  <p>Starring: {this.props.actors}</p>
</div>
```

If you check the page now, you'll see React prints the entire array, as that's what was passed in. It's a start, but we can improve upon this.

Check it out!

> [Read more about using props in JSX, if you'd like!](https://facebook.github.io/react/docs/jsx-in-depth.html) This link is also in the Further Reading page at the end of the React module, under the Facebook documentation.

#### Nested Components with Props

Things are starting to look good now, but we found a small problem while rendering our actors array. We probably want to render each element of that array individually instead of cramming them all together.

Since we're going to be rendering many actors and they will all share common properties, it would be a great time to make another component!

As a lab, create your own `Actor` component that will receive an actor's `name` as a prop. It should render a `li` for that prop.

Once that's defined, you will have to figure out how to render an `Actor` component inside of your `Movie` component for every element of that `actors` array. Make sure they are all contained within the same `ul`!
