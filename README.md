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
  