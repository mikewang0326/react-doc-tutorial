## Installation

#### + Add React to a New App

<pre><code>
npm install -g create-react-app
create-react-app my-app

cd my-app
npm start
</code></pre>



#### + CDN Links

Add CDN Links to index.html

<pre><code>
&lt;script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"&gt;&lt;/script&gt;
&lt;script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"&gt;&lt;/script&gt;
</code></pre>

## Main Concept

- 1.Hello World

  [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- 2.Introduce JSX
  
  *JSX* is a syntax extension to JavaScript.
  
  *JSX* produces React “elements”.
  
  [Give it five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes)
  
  > The faster you react, the less you think. Not always, but often.
 
  > He said “Man, give it five minutes.” I asked him what he meant by that? He said, it’s fine to disagree, it’s fine to push back, it’s great to have strong opinions and beliefs, but give my ideas some time to set in before you’re sure you want to argue against them. “Five minutes” represented “think”, not react. 

  > There’s also a difference between asking questions and pushing back. Pushing back means you already think you know. Asking questions means you want to know. Ask more questions.
  
  > Learning to think first rather than react quick is a life long pursuit. It’s tough. I still get hot sometimes when I shouldn’t. But I’m really enjoying all the benefits of getting better.
  
  > Dismissing an idea is so easy because it doesn’t involve any work. You can scoff at it. You can ignore it. You can puff some smoke at it. That’s easy. The hard thing to do is protect it, think about it, let it marinate, explore it, riff on it, and try it. The right idea could start out life as the wrong idea.
  
  *Example2* is an optional preprocessor to let you use HTML-like syntax.
  
  [Pete Hunt: React: Rethinking best practices -- JSConf EU 2013](https://www.youtube.com/watch?v=x7cQ3mrcKaY)
  
  [PPT](https://www.slideshare.net/floydophone/react-preso-v2)
  
- 3.Render Elements

  *Elements are the smallest building blocks of React apps.*

- 4.Components and Props

  *Always start component names with a capital letter.*  
  *All React components must act like pure functions with respect to their props.*

- 5.State and Lifecycle

  *componentDidMount()*
  
  componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
  
  *componentWillUnmount()*
  
  componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
  
  *Do Not Modify State Directly*
  <pre><code>
  // Wrong
  this.state.comment = 'Hello';
  </code></pre>
  
  <pre><code>
  // Correct
  this.setState({comment: 'Hello'});
  </code></pre>
  
- 6.Handling Events

  *You have to be careful about the meaning of **this** in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.*  
  [Understanding JavaScript Bind ()](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)

- 7.Conditional Rendering
  
- 8.Lists and Keys

  Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
  
  Keys only make sense in the context of the surrounding array.
  
  Keys used within arrays should be unique among their siblings.

- 9.Forms

  In HTML, form elements such as &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState()
  

- 10.Lifting State Up
   
   There should be a single *“source of truth”* for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.

   Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, it takes less work to find and *isolate bugs*. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.

- 11.Composition vs Inheritance

  At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.
  
  *Props and composition* give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. 
  
- 12.Thinking in React  
  *Step 1: Break The UI Into A Component Hierarchy*
  
  The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. 
  
  *Step 2: Build A Static Version in React*
  
  There are two types of “model” data in React: props and state.
  
  Step 3: Identify The Minimal (but complete) Representation Of UI State
  
  To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is *[DRY: Don’t Repeat Yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)*.
  
  Simply ask three questions about each piece of data:
  
  *1, Is it passed in from a parent via props?*
  
  If so, it probably isn’t state.
  
  *2, Does it remain unchanged over time?* 
  If so, it probably isn’t state.
  
  *3, Can you compute it based on any other state or props in your component?*
   
  If so, it isn’t state. 
  
  *Step 4: Identify Where Your State Should Live*
  
  Remember: *React is all about one-way data flow down the component hierarchy*. It may not be immediately clear which component should own what state. This is often the most challenging part for newcomers to understand, so follow these steps to figure it out:
  
  For each piece of state in your application:
  
  - Identify every component that renders something based on that state.
  - Find a common owner component (a single component above all the components that need the state in the hierarchy).
  - Either the common owner or another component higher up in the hierarchy should own the state.
  - If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.
  