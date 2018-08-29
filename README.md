[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


# React Components and Props

The basic unit you'll be working with in ReactJS is a component. Components are
pieces of our application that we can define once and reuse all over the place.

## Learning Objectives

After this lesson, you will be able to:

-   Describe props and why we need them.
-   Create a component that renders props.
-   Create nested components that pass props.

### Review

Let's start up our server, and review the code in `src/App.js` and
`src/Movie.js`. What have we done so far?

-  Our top level component `App` contains an array of movies. Think of this as
   as a stand-in for data fetched from an API.
-  The `App` component iterates through that array, and renders a `Movie`
   component for each item in the array.
-  The `App` component pass a "prop" to each movie. We'll talk more about
   props in this lesson.
-  The `Movie` component uses its props to render markup for each movie.

> Why do our `App` and `Movie` components look different syntactically? Because
> there are two different ways to declare components in React. For components
> that have no methods attached to them, we can use arrow functions that return
> JSX. If we need more complex components, we need to use the `class` syntax.
> Both our components could actually be arrow functions right now, but we did
> our `Movie` component the long way to demonstrate that syntax.

### Component Data with Props

What are props? Props are simply arguments passed into a component, as though they were arguments to a function. The component can then use this data to render something or pass the data on to another component.

The React framework was built to handle data that changes over time. Props allow
data to flow downward into components from central source (generally, an API),
without needing any code inside the components that receive props to handle
changes in this data.

Components that just render data based on their props are known as "stateless"
or "functional" components. They're very easy to reason about, because they take
data and produce markup, without any side effects or internal state. In React,
we should aim to make as many of our components stateless as possible.

#### Code-along: Passing multiple props to a component

Right now, `Movie` just expects one prop, and that's all we're giving it. Of course, we often want components to display more complex information. To do so, we can pass multiple props to our component! Let's expand on our movie array.

```js
const movies = [
  {
    title: 'Dr. Strangelove',
    director: 'Stanley Kubrick'
  },
  {
    title: 'Eraserhead',
    director: 'David Lynch'
  },
  {
    title: 'Fantastic Mr. Fox',
    director: 'Wes Anderson'
  }
]
```

Now that we have additional information, let's pass that to the component as well. Remember that you'll also have to change the component definition so that it is using the new prop you pass to it. Also, you have to return a single element from the render method, but you can always wrap multiple elements in a `div` tag.

> Note: We typically want to pass our props individually, instead of as an object. This helps keep our components consistent and specific. It also prevents us from referring to our props in a manner like `this.props.movie.title` where `this` already refers to an instance of a `Movie` component.

We'll ave our `Movie` component render both the title of the film and its director.

#### Lab: Multiple props from a more complex object

Since we're just pulling props out of an object, we can use any object we want. For example, we can nest an array inside it.

Let's say our movie has some actors. Update each movie object to include an array:

``` js
const movies = [
  {
    title: 'Dr. Strangelove',
    director: 'Stanley Kubrick',
    cast: [
      'Peter Sellers',
      'George C. Scott',
      'Slim Pickens'
    ]
  },
  {
    title: 'Eraserhead',
    director: 'David Lynch',
    cast: [
      'Jack Nance',
      'Charlotte Stewart',
      'Jeanne Bates'
    ]
  },
  {
    title: 'Fantastic Mr. Fox',
    director: 'Wes Anderson',
    cast: [
      'George Clooney',
      'Meryl Streep',
      'Bill Murray'
    ]
  }
]
```

Now we can use this new information as a prop, just like normal. We'll pass the entire array of actors through to the movie component. First, update your `return` call in `src/App.js`:

```jsx
return (
  <Movie
    title={movie.title}
    director={movie.director}
    cast={movie.cast}
  />
)
```

If you check your application now, nothing has changed. Remember, a component class will just ignore any props it receives that it doesn't use. But, we want to use the actors! So, second, update your `Movie` class' `render` method in `src/Movie.js`:

```html
<div>
  <h1>{this.props.title}</h1>
  <p>Directed by {this.props.director}</p>
  <p>Starring: {this.props.cast}</p>
</div>
```

If you check the page now, you'll see React prints the entire array, as that's what was passed in. It's a start, but we can improve upon this. Try to iterate through that `cast` array and
display each actor individually.

### Nested Components with Props

Since we're going to be rendering many actors and they will all share common properties, it would be a great time to make another component!

#### Code-along: Create an `Actor` component

On your own, create an `Actor` component that will receive two props: `name`,
a string representing the actor's full name, and `role`, a string describing
the character that actor plays in the film. Your component should display this
information like this:

```
Starring:
Peter Sellers as "Dr. Strangelove"
George C. Scott as "General Buck Turgidson"
```

You may be thinking that this component is very simple. After all, it just
renders two HTML elements. It doesn't have any interactive functionality or
any logic of its own. That means it's a great use case for a
functional component, with the arrow function syntax.

Here's some updated data, including roles for each actor.

```js
const movies = [
  {
    title: 'Dr. Strangelove',
    director: 'Stanley Kubrick',
    cast: [
      {
        name: 'Peter Sellers',
        role: 'President Merkin Muffley'
      },
      {
        name: 'George C. Scott',
        role: 'General Buck Turgidson'
      },
      {
        name: 'Slim Pickens',
        role: 'Major T.J. "King" Kong'
      }
    ]
  },
  {
    title: 'Eraserhead',
    director: 'David Lynch',
    cast: [
      {
        name: 'Jack Nance',
        role: 'Henry Spencer'
      },
      {
        name: 'Charlotte Stewart',
        role: 'Mary X'
      },
      {
        name: 'Jeanne Bates',
        role: 'Mrs. X'
      }
    ]
  },
  {
    title: 'Fantastic Mr. Fox',
    director: 'Wes Anderson',
    cast: [
      {
        name: 'George Clooney',
        role: 'Mr. Fox'
      },
      {
        name: 'Meryl Streep',
        role: 'Mrs. Fox'
      },
      {
        name: 'Bill Murray',
        role: 'Badger'
      }
    ]
  }
]
```

Create an `Actor` component, and use it render each actor inside the
`Movie` component. We want to use the arrow function syntax for our
`Actor` component, but we haven't seen an example yet of passing props into a functional component. To do it, we need to make sure we understand "destructuring", a feature added to JS in ES6. Here's
an example.

```js
const me = {
  name: 'Caleb',
  favoriteFood: 'Tacos'
}

// isolating object properties the old way
const name = me.name
const favoriteFood = me.favoriteFood

// isolating object properties with destructuring
const { name } = me
const { favoriteFood } = me
```

These two methods of pulling properties out of an object produce the
same result. The paremeters to React functional components usually use destructuring.

Instead of this:

```jsx
const Developer = (props) => (
  <p>My name is {props.name}</p>
)
```

We typically do this:

```jsx
const Developer = ({ name }) => (
  <p>My name is {name}</p>
)
```

Getting comfortable with this pattern will make it easier to read React documentation and tutorials.

## Additional Resources

- [Intro to Components](https://generalassembly.wistia.com/medias/h64z7lp1ir)
