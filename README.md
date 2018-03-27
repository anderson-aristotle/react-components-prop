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

Let's use **props** to make our "Movie" component more flexible.

##### First, a single prop

We want to be able to pass our `Movie` component information it can display, then it can be reusable for many movies. Let's define a `title` prop for a movie title.

In your `src/index.js`, we'll change the line that renders the `Movie` component to include this `title` prop. The new line will be:

`<Movie title={"Lord of the React: Fellowship of React Components"} />`

> We pass in data wherever we are rendering our component. In rendering the `Movie` component above, we pass in a prop called "title" with a value of "Lord of the React: Fellowship of React Components".

Your `index.js` should now look like this:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './App.js';

ReactDOM.render(
  <Movie title={"Lord of the React: Fellowship of React Components"} />,
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
