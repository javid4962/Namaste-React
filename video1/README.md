## Namaste React

#### Requirements & VS Code Extensions
- Chrome Browser
- VS Code Editor
VS Code Extensions
- Better Comments
- Bracket Pair Colorization Toggler
- ES7 + Reat/Redux/React-Native Snippets
- Gitlens - Git Supercharger
- Prettier - Code Formatter
- VSCode-icons
- Live Server
- Auto Tag Rename

-> `What is Library & Framework - Differences between Library & Framework`

Libraries and Frameworks are both `Collection of pre-written code` that developers can use to speed up software development.

1. Libraries `enhance application functionality,` while Frameworks are `used to build & deploy quickly.`
2. Libraries offer specific functionality without imposing a particular architecture, while Frameworks control the application flow and structure.
3. Libraries `can be reused across different applications to perform the same task`, while frameworks are `not designed to be reused.`
4. Libraries are `generally more flexible and can be easily replaced/swapped out`, while frameworks `can be more rapid & may limit the developer's  ability to customize certain aspects of the application.`
5. Libraries are `usually smaller & more focused`, while frameworks are `usually large in size & may include many more files & classes.`
6. Libraries are `typically easier to integrate and depend on the use case`, while frameworks often `require a significant amount of code to be written by the developer to work with the framework.`


-> `React is a Library or Framwork ?`

React is a JavaScript library that is used to build reactive websites. It not a framework but does have dedicated framework called `Create React App (CRA)` that includes files structuring and other tools so that React can be used as a framework.
React focuses on creating reusable UI Components which can be managed, updated, and reused.


-> `What is Emmet ?`

Emmet is a set of free, open-source plugins for text editors that helps web developers and email developers quickly and efficiently code in HTML, XML, XSLT and other languages.


-> `What is CDN ?`

CDN stands for `Content Delivery Network`, which is a network of servers that deliver data to web users around the world. CDNs help speedup webpage loading time by reducing latency and the distance between users and content. They also help to protect websites from DDoS attacks and other security threats.


-> `What is crossorigin ?`

The crossorigin attribute in an HTML `<script>` tag specifies the mode of an HTTP CORS request when loading JavaScript files from a third-party server. CORS stands for `Cross Origin Resource Sharing`, which checks if it is safe to share resources from different domains.


- React - core version, ReactDOM - Web version of the React
- We injected 2 cdn links to have all the super powers of React
```js 
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
- Building a h1 tag using React
```js
const heading = React.createElement("h1", {}, "Namaste Everyone");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
```
- At the end of the day `React Element is an Object`.
- React will need to know where we want to put the all stuff, so it takes/creates a `Root`.

-> `Can we have multiple roots ?`

A React App built with just React usually have a single root DOM node, but if you want to integrate React into an existing app, you can have as many isolated root DOM nodes as you like.


```html
<h1 id = "title">Hello World</h1>
```

```js
React.createElement("h1", {id : "title"}, "Hello World");
```

- Before rendering the root, if we have some content inside the root element then the contents will be overrided with the rendering content.

#### async & defer in JavaScript
async & defer are boolean attributes of `<script>` tag to load the external scripts efficiently into our web page.
i. Normally using `<script>`
ii. using `async` attribute
iii. using `defer` attribute

- If we load a webpage then there will 2 major things happend in the webpage
    a. The HTML parsing
    b. Loading of the scripts
        i. Fetching the scripts from the Network
        ii. Actually executing the scripts line by line

1. Normally using `<script>`

<pre>
|--- HTML parsing ---                                                  --- HTML parsing ---|
                     |--- Script Fetching ---||--- Script Executing ---|
</pre>

- Usually HTML parsing starts, 
- at the time of script with src encounters it fetches the scripts from the Network, while HTML parsing is paused.
- and executes the scripts line by line, after completing script executing HTMl parsing resumes.

2. Using `async` attribute

<pre>
|---     HTML parsing   ---                          --- HTML parsing ---|
   |--- Script Fetching ---||--- Script Executing ---|
</pre>

- HTML parsing starts along with script fetching happens simultaniously,
- scripts executes, while HTML parsing paused.
- after completing script execution, HTML parsing resumes.

3. Using `defer` attribute

<pre>
|---               HTML parsing               ---|
            |--- Script Fetching ---|            |--- Script Executing ---|
</pre>

- HTML parsing start,
- script fetching happens simultaniously along with HTML parsing
- after completing HTML parsing, actual script executing starts.

That the `async` attribute does not guarentees the order of execution of the scripts but `defer` does.