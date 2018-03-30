# React Components and Props

The basic unit you'll be working with in ReactJS is a component. Components are
pieces of our application that we can define once and reuse all over the place.

For an intro to components, watch [this video.](https://generalassembly.wistia.com/medias/h64z7lp1ir)

## Learning Objectives

After this lesson, you will be able to:

-   Describe Props and why we need them.
-   Create a Component that renders Props.
-   Create nested Components that pass Props.

### Review and Refactor

Right now, `App` is our top level component. It has a render method that returns JSX for our movie information. For that to show up on the page we needed to call the component from our `src/index.js` file, which you can think of as the main "hub" of our React app.

Keeping components separate and organized is a best practice, and since we want to be able to render many movies without having to duplicate code, it makes sense to create a `Movie` component that can handle displaying movies instead of this top level `App` component.

#### Code along: Creating our `Movie` component

Let's duplicate the `src/App.js` file and name the new one `src/Movie.js`. The only `import` statement we need is the one that defines `React` and `Component`, we won't need the other ones so let's get rid of those. We also want to make sure we name this class `Movie` and export that class from the file.

Now that we have a `Movie` component, we need to call it somewhere in our code. We have also made it the `Movie` component's responsiblity to display movie information so let's change what the `App` component's render method returns. What we want to return is a call to our `Movie` component.

```js
// inside our App component
return (
  <Movie />
)
```

Now that we are referencing our `Movie` component inside our `src/App.js` file, we'll have to import it so that it knows what we're talking about. Under the other imports add: `import Movie from './Movie.js';`

If you check out the page, nothing changed! We are still displaying the same information, we just separated out some of our functionality.

### Component Data with Props

What are props? Props are simply arguments passed into a component, as though they were arguments to a function. The component can then use this data to render something or pass the data on to another component.

The React framework was built to handle data that changes over time. So far, we've defined a `Movie` component whose `render` method returns some movie information in JSX. That component is called from our `App` component, which is called inside `src/index.js`.

This is great, but our data is hard coded into our component. Not exactly dynamic. We have also stored information about multiple movies inside of the `Movie` component, which by definition should only handle one movie at a time. Rather than simply displaying hard coded information, let's make our component more reusable by passing props to it that it can display.

The question is, how do we pass props to our `Movie` component without hard coding it into the component's `render` method?

Find out! Try it yourself alongside [this video](https://generalassembly.wistia.com/medias/gchiu63slo) in [this codepen](https://codepen.io/susir/pen/vxWypq) _(note: right click both for new tab!)_

#### Code along: Adding props to our component

Let's use **props** to make our `Movie` component more flexible.

##### First, a single prop

We want to be able to pass our `Movie` component information it can display, then it can be reusable for many movies. First let's remove any hard coded movie information from our `Movie` component. You should still have the same data inside the `App` component, if not you can copy this snippet:

```js
const movie = 'Saving Private Ryan'

const movies = [
  'Lord of the Rings',
  'Wayne\'s World',
  'Moana',
  'Saving Private Ryan'
]
```

and paste it into the `App` component. Make sure it is inside the `render` method but outside of its `return`. Now that the data is out of the component, we'll have to pass it the data we want it to render as a prop.

Let's start with just the one movie. Still in `src/App.js`, we'll change the line that renders the `Movie` component to include the `title` information of the single movie. The new line will be:

`<Movie title={movie} />`

> We pass in data wherever we are rendering our component. In rendering the `Movie` component above, we pass in a prop we call "title" with a value of 'Saving Private Ryan'.

Your `App` component class should now look something like this:

```js
class App extends Component {
  render () {
    const movie = 'Saving Private Ryan'

    const movies = [
      'Lord of the Rings',
      'Wayne\'s World',
      'Moana',
      'Saving Private Ryan'
    ]

    return (
      <Movie title={movie}/>
    )
  }
}
```

Now, every time we render our component, we will pass in data.

If you check your application now you'll see that we're going to have to change how we defined our component.  We're passing the `title` prop into the component, but the component isn't referencing any props yet.

In our `Movie` component definition, we will change the render method to return `<h1>{this.props.title}</h1>`. The portion `{this.props.title}` deserves a closer look:

-   `this` refers to the specific `Movie` component instance.
-   `this.props` will collect all the props for this component instance.
-   `this.props.title` pulls out the `title` property from `this.props`.
-   `this.props.title` got set when we called our `Movie` component and added the `title=` portion.

> The `{}` syntax in JSX renders the result of any expression inside it. It works even without props. If you wrote `{2+2}` in your JSX, `4` would be rendered.

In `src/Movie.js`, your `Movie` class should now look close to this:

```jsx
class Movie extends Component {
  render () {
    return (
        <h1>{this.props.title}</h1>
    )
  }
}
```

> Check it out! You should be able to browse to [localhost port 3000](http://localhost:3000) to view this change!

#### Lab: Passing multiple props to a component

Of course, we often want components to display more complex information. To do so, we can pass multiple properties to our component! We'll use the same two steps we took to add the first prop, we just need additional data. Let's expand on that movie just a bit by making it an object:

```js
const movie = {
  title: 'Saving Private Ryan',
  director: 'Steven Spielberg'
}
```

Now that we have additional information, let's pass that to the component as well. Remember that you'll also have to change the component definition so that it is using the new prop you pass to it. Also you have to return a single element from the render method, but you can always wrap multiple elements in a `div` tag.

> Note: We typically want to pass our props individually, instead of as an object. This helps keep our components consistent and specific. It also prevents us from referring to our props in a manner like `this.props.movie.title` where `this` already refers to an instance of a `Movie` component.

#### Code Along: Multiple props from a more complex object

Since we're just pulling props out of an object, we can use any object we want. For example, we can nest an array inside it.

Let's say our movie has some actors. Update your object to include an array:

``` js
const movie = {
  title: 'Saving Private Ryan',
  director: 'Steven Spielberg',
  actors: [
    'Tom Hanks',
    'Matt Damon',
    'Tom Sizemore'
  ]
}
```

Now we can use this new information as a prop, just like normal. You could choose to pass a single element (`actors[0]`) or the entire array.  We'll use the entire array so that the component can display _all_ a movies's actors. First, update your `return` call in `src/App.js`:

``` js
return (
  <Movie
    title={movie.title}
    director={movie.director}
    actors={movie.actors}
  />
)
```

If you check your application now, nothing has changed. Remember, a component class will just ignore any props it receives that it doesn't use. But, we want to use the actors! So, second, update your `Movie` class' `render` method in `src/Movie.js`:

```html
<div>
  <h1>{this.props.title}</h1>
  <p>Directed by {this.props.director}</p>
  <p>Starring: {this.props.actors}</p>
</div>
```

If you check the page now, you'll see React prints the entire array, as that's what was passed in. It's a start, but we can improve upon this.

> [Read more about using props in JSX, if you'd like!](https://facebook.github.io/react/docs/jsx-in-depth.html)

### Nested Components with Props

Things are starting to look good now, but we found a small problem while rendering our actors array. We probably want to render each element of that array individually instead of cramming them all together.

Since we're going to be rendering many actors and they will all share common properties, it would be a great time to make another component!

#### Lab: Create an `Actor` component

On your own, create an `Actor` component that will receive an actor's `name` as a prop. It should render an `li` for that prop.

Once that's defined, you will have to figure out how to render one `Actor` component inside of your `Movie` component for each element of that `actors` array. Remember to pass the name to each component as a prop and make sure they are all contained within the same `ul`!

#### Bonus Challenge

If you finish up early, take this time to expand upon the `movies` array. This one:

```js
const movies = [
  'Lord of the Rings',
  'Wayne\'s World',
  'Moana',
  'Saving Private Ryan'
]
```

Make each element of the array an object, the current string can become the `title` property. Add a director and an array of actors to each object in the array. See if you can get it to render every movie and actor correctly instead of just rendering the one movie.

> Note: 'Lord of the Rings' is a trilogy of movies, 'Moana' has multiple directors, you may feel free to replace these movies with ones that fit the structure of the previous movie we used.
