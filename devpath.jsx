import { useState, useEffect, useCallback } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const MODULES = [
  {
    id: "foundations",
    title: "Foundations",
    description: "HTML, CSS, and your first steps with Claude Code",
    lessons: [
      {
        id: "html-first-page",
        title: "Your First HTML Page",
        subtitle: "Build a real webpage from scratch — and learn how Claude Code can help",
        duration: "20 min",
        content: {
          intro: `Every website you've ever visited is built on HTML — HyperText Markup Language. It's the skeleton that gives web pages their structure. In this lesson, you'll create your very first HTML page from scratch, and you'll learn how Claude Code can accelerate the process.`,
          sections: [
            {
              heading: "What is HTML?",
              text: `HTML is a markup language made up of "elements" — tags that wrap around content and tell the browser what that content is. A heading, a paragraph, an image, a link — each has its own tag.\n\nHere's the simplest possible HTML page:`,
              code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>`,
              codeLanguage: "html",
            },
            {
              heading: "Breaking it down",
              text: `Let's look at what each piece does:\n\n• <!DOCTYPE html> tells the browser this is an HTML5 document\n• <html> is the root element that wraps everything\n• <head> contains metadata — things the browser needs but doesn't display\n• <title> sets the text that appears in the browser tab\n• <body> contains everything visible on the page\n• <h1> is a top-level heading\n• <p> is a paragraph`,
            },
            {
              heading: "Try it yourself",
              text: `Create a file called index.html on your computer, paste the code above, and open it in your browser. You should see your heading and paragraph. Now try adding:\n\n• A second heading with <h2>\n• Another paragraph\n• A link using <a href="https://example.com">Click me</a>`,
            },
          ],
          claudeTip: {
            title: "Your first Claude Code workflow",
            text: `Open your terminal and try this prompt with Claude Code:\n\n"Create an index.html file with a heading that says 'My Portfolio', a paragraph introducing myself, and a list of three hobbies."\n\nClaude Code will generate the file for you. Then open it in your browser to see the result. Notice how you described what you wanted in plain English — that's the core skill of working with Claude Code. The more specific your description, the better the output.`,
            prompt: `Create an index.html file with a heading that says "My Portfolio",
a paragraph introducing myself, and an unordered list of three hobbies.`,
          },
        },
      },
      {
        id: "css-styling",
        title: "Styling with CSS",
        subtitle: "Make your pages look great — and iterate fast with Claude Code",
        duration: "25 min",
        content: {
          intro: `HTML gives your page structure, but CSS (Cascading Style Sheets) gives it style — colors, fonts, spacing, layout. In this lesson, you'll learn CSS fundamentals and discover how Claude Code makes visual iteration incredibly fast.`,
          sections: [
            {
              heading: "How CSS works",
              text: `CSS uses selectors to target HTML elements, then applies style rules to them. You can write CSS directly in your HTML file using a <style> tag, or link to a separate .css file.\n\nHere's a simple example:`,
              code: `<style>
  body {
    font-family: system-ui, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #fafafa;
  }

  h1 {
    color: #1a1a2e;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 0.5rem;
  }

  p {
    color: #444;
    line-height: 1.6;
  }
</style>`,
              codeLanguage: "css",
            },
            {
              heading: "The box model",
              text: `Every element in CSS is a box with four layers:\n\n• Content — the actual text or image\n• Padding — space between content and border\n• Border — the edge of the element\n• Margin — space between this element and others\n\nUnderstanding this model is key to controlling layout. When something "doesn't look right," it's almost always a box model issue.`,
            },
            {
              heading: "Key properties to know",
              text: `Start with these essential CSS properties:\n\n• color and background-color for colors\n• font-family, font-size, font-weight for typography\n• margin and padding for spacing\n• border and border-radius for borders\n• display (block, flex, grid) for layout\n• max-width and margin: 0 auto for centering content`,
            },
            {
              heading: "Try it yourself",
              text: `Take the HTML page you built in Lesson 1 and add a <style> tag in the <head>. Try to:\n\n• Change the background color\n• Pick a nice font\n• Add padding around the body\n• Style your headings with a different color\n• Add a subtle border under each heading`,
            },
          ],
          claudeTip: {
            title: "Iterating on design with Claude Code",
            text: `This is where Claude Code really shines. Instead of tweaking CSS values one pixel at a time, describe what you want:\n\n"Make the heading larger and dark blue. Add more spacing between paragraphs. Make the page feel more modern and clean."\n\nClaude Code will update your styles instantly. If you don't like the result, just describe what to change. This rapid iteration loop — describe → see → refine — is one of the most powerful Claude Code workflows for frontend development.`,
            prompt: `Take my index.html and make it look more professional:
use a clean sans-serif font, add generous padding,
center the content with a max-width, and use a subtle color palette.`,
          },
        },
      },
      {
        id: "js-fundamentals",
        title: "JavaScript Fundamentals",
        subtitle: "Add interactivity to your pages",
        duration: "30 min",
        content: {
          intro: `HTML is structure, CSS is style — JavaScript is behavior. It's the language that makes web pages interactive: responding to clicks, updating content dynamically, validating forms, fetching data. In this lesson, you'll learn the JavaScript fundamentals you need to start making your pages come alive.`,
          sections: [
            {
              heading: "Variables and data types",
              text: `Variables store information so you can use it later. In modern JavaScript, you declare them with let (for values that change) or const (for values that don't).\n\nJavaScript has a few basic data types you'll use constantly:\n\n• Strings — text wrapped in quotes: "Hello, world!"\n• Numbers — no quotes needed: 42 or 3.14\n• Booleans — true or false\n• Arrays — ordered lists: ["apple", "banana", "cherry"]\n• Objects — key-value pairs: { name: "Joe", age: 30 }`,
              code: `// Declaring variables
const name = "Joe";
let score = 0;

// Arrays hold lists of things
const hobbies = ["coding", "hiking", "reading"];

// Objects group related data together
const user = {
  name: "Joe",
  level: "beginner",
  lessonsCompleted: 2
};

// Access values with dot notation
console.log(user.name);       // "Joe"
console.log(hobbies[0]);      // "coding"`,
              codeLanguage: "javascript",
            },
            {
              heading: "Functions",
              text: `Functions are reusable blocks of code. You define them once and call them whenever you need them. They can take inputs (parameters) and return outputs.`,
              code: `// A simple function
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Joe"));  // "Hello, Joe!"

// Arrow functions — a shorter syntax you'll see a lot
const double = (num) => num * 2;

console.log(double(5));  // 10

// Functions can do more complex work
function getInitials(fullName) {
  const parts = fullName.split(" ");
  const first = parts[0][0];
  const last = parts[parts.length - 1][0];
  return first + last;
}

console.log(getInitials("Joe Smith"));  // "JS"`,
              codeLanguage: "javascript",
            },
            {
              heading: "The DOM — connecting JavaScript to HTML",
              text: `The DOM (Document Object Model) is how JavaScript talks to your HTML page. Every HTML element becomes a JavaScript object you can read, change, or remove.\n\nThis is where things get exciting — you can make your page respond to what users do.`,
              code: `<!-- In your HTML -->
<h1 id="title">Welcome</h1>
<button id="changeBtn">Click me</button>
<p id="counter">Clicks: 0</p>

<script>
  // Grab elements from the page
  const title = document.getElementById("title");
  const button = document.getElementById("changeBtn");
  const counterText = document.getElementById("counter");

  let clicks = 0;

  // Listen for a click and respond
  button.addEventListener("click", () => {
    clicks++;
    counterText.textContent = "Clicks: " + clicks;
    title.textContent = "You clicked " + clicks + " times!";
  });
</script>`,
              codeLanguage: "html",
            },
            {
              heading: "Conditionals and loops",
              text: `Conditionals let your code make decisions. Loops let it repeat actions. Together, they handle most of the logic in any program.`,
              code: `// Conditionals — if / else
const score = 85;

if (score >= 90) {
  console.log("A — Excellent!");
} else if (score >= 80) {
  console.log("B — Great job!");
} else {
  console.log("Keep practicing!");
}

// Loops — doing something for each item
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log("I like " + fruit);
}

// .forEach — another common pattern
fruits.forEach((fruit, index) => {
  console.log(index + 1 + ". " + fruit);
});`,
              codeLanguage: "javascript",
            },
            {
              heading: "Try it yourself",
              text: `Take your portfolio page from the previous lessons and add some JavaScript to make it interactive:\n\n• Add a button that toggles between a light and dark color scheme\n• Add a "Show more" button that reveals a hidden section of content\n• Create a simple counter that tracks how many times a button is clicked\n\nStart with just one of these — whichever sounds most interesting. You can always ask Claude Code to help you build the others.`,
            },
          ],
          claudeTip: {
            title: "Using Claude Code to add interactivity",
            text: `JavaScript is where Claude Code becomes incredibly useful, because debugging logic is harder than tweaking CSS. Try describing the behavior you want:\n\n"Add a dark mode toggle to my portfolio page. When I click a button, it should switch the background to dark gray and the text to white. Clicking again should switch back."\n\nWhen something doesn't work as expected, describe the bug:\n\n"The counter goes up when I click, but the text doesn't update on screen. Can you fix it?"\n\nClaude Code can see your code and trace the logic — often faster than you could track down the issue yourself.`,
            prompt: `Add a dark mode toggle button to my index.html. It should
switch between light and dark themes when clicked, and
remember which theme is active using a CSS class on the body.`,
          },
        },
      },
      {
        id: "build-a-mini-project",
        title: "Build a Mini Project",
        subtitle: "Combine HTML, CSS, and JS into a working app — with Claude Code driving",
        duration: "40 min",
        content: {
          intro: `You now know the three core languages of the web: HTML for structure, CSS for style, and JavaScript for behavior. In this lesson, you'll put them all together to build a complete, functional mini-app — a personal bookmark manager. More importantly, you'll practice the full Claude Code workflow: plan, build, iterate.`,
          sections: [
            {
              heading: "What we're building",
              text: `A bookmark manager that lets you:\n\n• Type in a name and URL to save a bookmark\n• See all your bookmarks in a clean list\n• Delete bookmarks you don't need anymore\n• Filter bookmarks by typing in a search box\n\nIt's small enough to build in one session, but complex enough to use everything you've learned — form handling, DOM manipulation, event listeners, styling, and layout.`,
            },
            {
              heading: "Step 1: The HTML structure",
              text: `Start with the skeleton — a form for adding bookmarks, a search input, and an empty list that JavaScript will populate.`,
              code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Bookmarks</title>
</head>
<body>
  <div class="container">
    <h1>My Bookmarks</h1>

    <form id="bookmarkForm">
      <input type="text" id="nameInput" placeholder="Bookmark name" required />
      <input type="url" id="urlInput" placeholder="https://example.com" required />
      <button type="submit">Add</button>
    </form>

    <input type="text" id="searchInput" placeholder="Search bookmarks..." />

    <ul id="bookmarkList"></ul>

    <p id="emptyMessage">No bookmarks yet. Add your first one above!</p>
  </div>
</body>
</html>`,
              codeLanguage: "html",
            },
            {
              heading: "Step 2: The CSS styling",
              text: `Apply the clean, minimal style you learned in Lesson 2. Notice how the form uses CSS flexbox to lay out the inputs and button side by side.`,
              code: `<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: system-ui, sans-serif;
    background: #fafafa;
    color: #374151;
    line-height: 1.6;
  }

  .container {
    max-width: 560px;
    margin: 0 auto;
    padding: 48px 24px;
  }

  h1 {
    font-size: 1.75rem;
    color: #111827;
    margin-bottom: 24px;
  }

  form {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  input {
    padding: 10px 14px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.15s;
  }

  input:focus { border-color: #3b82f6; }

  #nameInput { flex: 1; }
  #urlInput { flex: 1.5; }
  #searchInput { width: 100%; margin-bottom: 20px; }

  button {
    padding: 10px 20px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;
  }

  button:hover { background: #1d4ed8; }

  ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
  }

  li a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
  }

  li a:hover { text-decoration: underline; }

  .delete-btn {
    background: none;
    border: none;
    color: #9ca3af;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 4px 8px;
  }

  .delete-btn:hover { color: #ef4444; }

  #emptyMessage {
    text-align: center;
    color: #9ca3af;
    margin-top: 32px;
    font-size: 0.95rem;
  }
</style>`,
              codeLanguage: "css",
            },
            {
              heading: "Step 3: The JavaScript logic",
              text: `This is where it all comes together. The JavaScript handles four things: adding bookmarks from the form, rendering the list, deleting bookmarks, and filtering by search. Notice how each piece is its own function — keeping code organized is a habit worth building early.`,
              code: `<script>
  let bookmarks = [];

  const form = document.getElementById("bookmarkForm");
  const nameInput = document.getElementById("nameInput");
  const urlInput = document.getElementById("urlInput");
  const searchInput = document.getElementById("searchInput");
  const list = document.getElementById("bookmarkList");
  const emptyMsg = document.getElementById("emptyMessage");

  function render(filter = "") {
    list.innerHTML = "";
    const filtered = bookmarks.filter(b =>
      b.name.toLowerCase().includes(filter.toLowerCase())
    );

    emptyMsg.style.display = filtered.length === 0 ? "block" : "none";

    filtered.forEach((bookmark, index) => {
      const li = document.createElement("li");
      li.innerHTML = \`
        <a href="\${bookmark.url}" target="_blank">\${bookmark.name}</a>
        <button class="delete-btn" data-index="\${index}">&times;</button>
      \`;
      list.appendChild(li);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    bookmarks.push({ name: nameInput.value, url: urlInput.value });
    nameInput.value = "";
    urlInput.value = "";
    render(searchInput.value);
  });

  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const i = parseInt(e.target.dataset.index);
      bookmarks.splice(i, 1);
      render(searchInput.value);
    }
  });

  searchInput.addEventListener("input", (e) => {
    render(e.target.value);
  });

  render();
</script>`,
              codeLanguage: "javascript",
            },
            {
              heading: "How it all connects",
              text: `Take a step back and notice the pattern:\n\n• HTML creates the elements (form, inputs, list)\n• CSS makes them look good (layout, spacing, colors)\n• JavaScript makes them work (add, delete, search, render)\n\nThe render() function is the heart of the app — every time data changes, it re-draws the list. This "data drives the UI" pattern is the same idea behind React and every modern framework. You're already thinking like a frontend developer.`,
            },
            {
              heading: "Try it yourself",
              text: `Build this project step by step, or ask Claude Code to generate the whole thing. Then try extending it:\n\n• Add categories or tags to bookmarks\n• Save bookmarks to localStorage so they survive a page refresh\n• Add an "edit" button to rename bookmarks\n• Sort bookmarks alphabetically\n\nEach extension practices a different JavaScript concept. Pick one and try describing it to Claude Code.`,
            },
          ],
          claudeTip: {
            title: "The plan → build → iterate workflow",
            text: `This lesson's project is a great example of the full Claude Code workflow:\n\n1. Plan: Describe the whole project upfront so Claude understands the scope\n2. Build: Let Claude generate the first version\n3. Iterate: Refine one thing at a time — "add a search feature," "make the delete button red on hover"\n\nThe key insight: you don't need to know how to code everything from memory. You need to know what's possible (which these lessons teach you) and how to describe it clearly (which practice with Claude Code teaches you). That combination is incredibly powerful.`,
            prompt: `Build me a bookmark manager app in a single HTML file.
It should have a form to add bookmarks (name + URL),
display them in a clean list, let me delete them,
and include a search box to filter by name.
Use a minimal, modern design.`,
          },
        },
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "React, components, and building real user interfaces",
    lessons: [
      {
        id: "intro-to-react",
        title: "Introduction to React",
        subtitle: "Why components change everything",
        duration: "30 min",
        content: {
          intro: `In the Foundations module, you built pages with plain HTML, CSS, and JavaScript. That works fine for small projects, but as pages get more complex — dozens of interactive elements, data flowing everywhere — managing it all with manual DOM manipulation becomes a nightmare. React solves this by letting you build your UI out of reusable components, each managing its own piece of the page. It's the most widely used frontend framework, and it's what DevPath itself is built with.`,
          sections: [
            {
              heading: "What is a component?",
              text: `A component is a self-contained piece of UI. Think of it like a custom HTML element that you design yourself. A navigation bar, a button, a user profile card — each can be a component.\n\nIn React, components are just JavaScript functions that return what should appear on screen:`,
              code: `function Greeting() {
  return (
    <div>
      <h1>Hello, Joe!</h1>
      <p>Welcome to your first React component.</p>
    </div>
  );
}`,
              codeLanguage: "jsx",
            },
            {
              heading: "Wait — is that HTML inside JavaScript?",
              text: `That HTML-like syntax is called JSX. It looks like HTML, but it's actually JavaScript that React transforms behind the scenes. There are a few small differences from regular HTML:\n\n• Use className instead of class (because "class" is a reserved word in JS)\n• Use camelCase for attributes: onClick instead of onclick, htmlFor instead of for\n• Every tag must be closed: <img /> not <img>\n• You can embed JavaScript expressions inside curly braces: {variable}`,
              code: `function UserCard() {
  const name = "Joe";
  const lessonsCompleted = 4;

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Lessons completed: {lessonsCompleted}</p>
      <p>Status: {lessonsCompleted > 3 ? "On fire!" : "Getting started"}</p>
    </div>
  );
}`,
              codeLanguage: "jsx",
            },
            {
              heading: "Composing components",
              text: `The real power of React is that components can include other components. You build small pieces and snap them together like building blocks:`,
              code: `function Header() {
  return <h1>My App</h1>;
}

function Footer() {
  return <p>Built with React and Claude Code</p>;
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>This is the main content.</p>
      </main>
      <Footer />
    </div>
  );
}`,
              codeLanguage: "jsx",
            },
            {
              heading: "Why this matters",
              text: `Remember the bookmark manager from Lesson 4? The render() function rebuilt the entire list every time something changed. That works, but it's fragile — you're manually managing what's on screen.\n\nReact flips this around. You describe what the UI should look like for any given data, and React figures out what needs to change on screen. You don't touch the DOM directly. This is called declarative rendering, and it's the single biggest mental shift in modern frontend development.\n\nInstead of:\n"Find the list element, create a new li, set its text, append it"\n\nYou write:\n"Here's my array of bookmarks — render a li for each one"\n\nReact handles the rest.`,
            },
            {
              heading: "How to set up React",
              text: `For learning, the fastest way to start is with a tool like Vite:\n\nnpm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev\n\nThis gives you a local development server with hot reloading — every time you save a file, the browser updates instantly. But you can also experiment with React in single-file playgrounds (like this DevPath app is built as).`,
            },
          ],
          claudeTip: {
            title: "Scaffolding React projects with Claude Code",
            text: `React has more moving parts than plain HTML — a build tool, file structure, imports. This is where Claude Code saves you a ton of setup time:\n\n"Create a new React app with Vite. Set up a basic file structure with a Header component, a Main component, and a Footer component. Use a clean, minimal style."\n\nClaude Code will scaffold the entire project — files, imports, boilerplate — in seconds. You skip the tedious setup and go straight to building.\n\nAs you learn React, also try: "Explain what this component does line by line." Claude Code is great at walking you through code you don't fully understand yet.`,
            prompt: `Create a React component called ProfileCard that displays
a user's name, bio, and avatar image. Use clean styling
with rounded corners and a subtle shadow.`,
          },
        },
      },
      {
        id: "state-and-props",
        title: "State & Props",
        subtitle: "Making components dynamic and reusable",
        duration: "25 min",
        content: {
          intro: `Components that always show the same thing aren't very useful. Real UIs need to handle user input, display different data, and update over time. React has two core concepts for this: props (data passed into a component from the outside) and state (data managed inside a component that can change). Understanding these two ideas unlocks everything in React.`,
          sections: [
            {
              heading: "Props — passing data to components",
              text: `Props (short for "properties") are how you pass data from a parent component to a child component. Think of them like function arguments — they let you reuse the same component with different data:`,
              code: `// A reusable component that accepts props
function LessonCard({ title, duration, isComplete }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <span>{duration}</span>
      {isComplete && <span className="badge">Done!</span>}
    </div>
  );
}

// Using it with different data
function Curriculum() {
  return (
    <div>
      <LessonCard title="HTML Basics" duration="20 min" isComplete={true} />
      <LessonCard title="CSS Styling" duration="25 min" isComplete={true} />
      <LessonCard title="React Intro" duration="30 min" isComplete={false} />
    </div>
  );
}`,
              codeLanguage: "jsx",
            },
            {
              heading: "State — data that changes",
              text: `State is data that lives inside a component and can change over time — usually in response to user actions. When state changes, React automatically re-renders the component to reflect the new data.\n\nYou create state with the useState hook:`,
              code: `import { useState } from "react";

function Counter() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add one
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}`,
              codeLanguage: "jsx",
            },
            {
              heading: "The key rule: state flows down",
              text: `Data in React flows in one direction — from parent to child, through props. A parent can pass its state down to children as props, and those children render based on what they receive:\n\n• Parent owns the state (the "source of truth")\n• Parent passes state values down as props\n• Children display the data but don't own it\n• To change the state, the parent passes down a function that children can call\n\nThis sounds rigid, but it makes your app predictable — you always know where data comes from and how it changes.`,
              code: `import { useState } from "react";

function TodoItem({ text, done, onToggle }) {
  return (
    <li
      onClick={onToggle}
      style={{ textDecoration: done ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn HTML", done: true },
    { text: "Learn CSS", done: true },
    { text: "Learn React", done: false },
  ]);

  const toggle = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
  };

  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoItem
          key={i}
          text={todo.text}
          done={todo.done}
          onToggle={() => toggle(i)}
        />
      ))}
    </ul>
  );
}`,
              codeLanguage: "jsx",
            },
            {
              heading: "Rendering lists with .map()",
              text: `You'll constantly need to render a list of items — bookmarks, todos, users, messages. In React, you use JavaScript's .map() method to transform an array of data into an array of components:\n\nconst items = ["Apple", "Banana", "Cherry"];\n\nitems.map(item => <li key={item}>{item}</li>)\n\nThe key prop is important — it helps React track which items changed when the list updates. Use a unique identifier (an id, or the item itself if it's unique).`,
            },
            {
              heading: "Props vs. State cheat sheet",
              text: `Here's a quick reference:\n\n• Props: passed in from parent, read-only inside the component, like function arguments\n• State: created inside the component with useState, can be updated with the setter function, triggers a re-render when it changes\n\nIf data comes from outside → it's a prop\nIf data is created and managed inside → it's state\nIf a child needs to change a parent's data → the parent passes down a callback function as a prop`,
            },
          ],
          claudeTip: {
            title: "Debugging state and props with Claude Code",
            text: `State bugs are the most common issue in React. Things to watch for:\n\n• "My component doesn't update" — you might be mutating state directly instead of using the setter\n• "I'm getting stale data" — you might need the functional form: setCount(prev => prev + 1)\n• "My list renders wrong after deleting" — you might be missing or misusing the key prop\n\nWhen you hit these issues, describe the symptom to Claude Code:\n\n"When I click delete on a todo, the wrong item disappears. Here's my component..."\n\nClaude Code can trace the data flow and find where things go wrong — it's like having a debugging partner.`,
            prompt: `I have a React component with a list of items. When I click
"delete" on an item, the wrong one gets removed. Help me
find and fix the bug. Here's my component: [paste code]`,
          },
        },
      },
      {
        id: "building-a-todo-app",
        title: "Build a Todo App",
        subtitle: "Your first complete React project",
        duration: "45 min",
        content: {
          intro: `Time to put it all together. You're going to build a complete todo app in React — the classic "hello world" of frontend frameworks. But we're going to do it properly: multiple components, clean state management, add/complete/delete functionality, and a polished design. By the end, you'll have built a real React app and practiced the full Claude Code workflow.`,
          sections: [
            {
              heading: "What we're building",
              text: `A todo app with these features:\n\n• Add new todos by typing and pressing Enter or clicking a button\n• Mark todos as complete (with a satisfying strikethrough)\n• Delete todos you don't need\n• See a count of remaining items\n• Filter between All, Active, and Completed todos\n\nWe'll break this into components: an input form, individual todo items, a filter bar, and the main app that holds everything together.`,
            },
            {
              heading: "The component structure",
              text: `Before writing code, think about how to break this UI into components. This planning step is a habit worth building:\n\n• App — the root component, owns all the state\n• TodoForm — the input and add button\n• TodoItem — a single todo with checkbox and delete button\n• TodoFilters — the All / Active / Completed tabs\n\nEach component has one job. App manages the data, the others just display it and report user actions back up through callbacks.`,
            },
            {
              heading: "Building it step by step",
              text: `Here's the full app. Read through it and notice how each concept from the previous lessons shows up — useState for state, props for passing data down, .map() for rendering lists, and callback props for handling events:`,
              code: `import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        style={styles.input}
      />
      <button type="submit" style={styles.addBtn}>Add</button>
    </form>
  );
}

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div style={{
      ...styles.todoItem,
      ...(todo.done ? styles.todoItemDone : {})
    }}>
      <div
        onClick={onToggle}
        style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, cursor: "pointer" }}
      >
        <div style={{
          ...styles.checkbox,
          ...(todo.done ? styles.checkboxDone : {})
        }}>
          {todo.done && "✓"}
        </div>
        <span style={{
          textDecoration: todo.done ? "line-through" : "none",
          color: todo.done ? "#9ca3af" : "#111827"
        }}>
          {todo.text}
        </span>
      </div>
      <button onClick={onDelete} style={styles.deleteBtn}>×</button>
    </div>
  );
}

function TodoFilters({ filter, onFilterChange, remaining }) {
  const filters = ["all", "active", "completed"];
  return (
    <div style={styles.filterBar}>
      <span style={styles.remaining}>
        {remaining} item{remaining !== 1 ? "s" : ""} left
      </span>
      <div style={{ display: "flex", gap: 4 }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            style={{
              ...styles.filterBtn,
              ...(filter === f ? styles.filterBtnActive : {})
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const filtered = todos.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "completed") return t.done;
    return true;
  });

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todos</h1>
      <TodoForm onAdd={addTodo} />
      {todos.length > 0 && (
        <>
          <div style={styles.list}>
            {filtered.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            ))}
          </div>
          <TodoFilters
            filter={filter}
            onFilterChange={setFilter}
            remaining={remaining}
          />
        </>
      )}
      {todos.length === 0 && (
        <p style={styles.empty}>No todos yet. Add one above!</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 480,
    margin: "0 auto",
    padding: "48px 24px",
    fontFamily: "system-ui, sans-serif",
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 24,
  },
  form: { display: "flex", gap: 8, marginBottom: 24 },
  input: {
    flex: 1,
    padding: "10px 14px",
    border: "1px solid #d1d5db",
    borderRadius: 8,
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
  },
  addBtn: {
    padding: "10px 20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 15,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  todoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: 10,
    transition: "border-color 0.15s",
  },
  todoItemDone: { background: "#f9fafb" },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    border: "2px solid #d1d5db",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 700,
    color: "white",
    flexShrink: 0,
  },
  checkboxDone: {
    background: "#16a34a",
    borderColor: "#16a34a",
  },
  deleteBtn: {
    background: "none",
    border: "none",
    color: "#d1d5db",
    fontSize: 20,
    cursor: "pointer",
    padding: "4px 8px",
    borderRadius: 6,
  },
  filterBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    paddingTop: 16,
    borderTop: "1px solid #f3f4f6",
  },
  remaining: { fontSize: 13, color: "#9ca3af" },
  filterBtn: {
    padding: "6px 12px",
    border: "none",
    background: "transparent",
    borderRadius: 6,
    fontSize: 13,
    color: "#6b7280",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: 500,
  },
  filterBtnActive: {
    background: "#eff6ff",
    color: "#2563eb",
    fontWeight: 600,
  },
  empty: {
    textAlign: "center",
    color: "#9ca3af",
    marginTop: 40,
    fontSize: 15,
  },
};`,
              codeLanguage: "jsx",
            },
            {
              heading: "Breaking down the patterns",
              text: `Let's highlight the key React patterns at work here:\n\n• State lives at the top: App owns the todos array and the filter value. No child component manages its own copy of the data.\n\n• Callbacks flow down: addTodo, toggleTodo, and deleteTodo are defined in App and passed as props. Children call them to request changes.\n\n• Immutable updates: We never modify the array directly. Instead, we create new arrays with .map(), .filter(), and the spread operator (...). This is how React knows something changed.\n\n• Unique keys: Each todo gets a key={todo.id} so React can efficiently update the list when items are added, removed, or reordered.\n\n• Component separation: TodoForm manages its own input text (local state), but defers the actual "add" action to the parent through onAdd. This keeps responsibilities clear.`,
            },
            {
              heading: "Try it yourself",
              text: `Build this todo app, then try extending it. Each extension exercises a different React skill:\n\n• Edit mode — click a todo's text to edit it inline (state management + conditional rendering)\n• Due dates — add an optional date to each todo and sort by it (working with more complex state)\n• Categories — group todos by project or label (filtering + data modeling)\n• Drag to reorder — let users rearrange todos by dragging (event handling + array manipulation)\n\nStart with one extension. Describe what you want to Claude Code and build it together.`,
            },
          ],
          claudeTip: {
            title: "Building complete features with Claude Code",
            text: `Now that you're building real React apps, you can give Claude Code more ambitious prompts. The key is to describe the feature completely — what it does, how it looks, and how it connects to what's already there:\n\n"Add an edit feature to my todo app. When I double-click a todo, it should turn into a text input with the current text. Pressing Enter saves the edit, pressing Escape cancels. Style the input to match the existing design."\n\nNotice how that prompt covers the trigger (double-click), the behavior (input appears), the save/cancel mechanism, and the styling expectation. This level of detail gets you a working feature in one shot.`,
            prompt: `Add an inline edit feature to my todo app. Double-clicking a
todo should turn it into a text input pre-filled with the
current text. Enter saves, Escape cancels. Match the
existing style.`,
          },
        },
      },
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Basics",
    description: "Backend APIs, databases, and deployment",
    lessons: [
      {
        id: "node-express-api",
        title: "Your First API with Node & Express",
        subtitle: "Build a backend that serves data",
        duration: "35 min",
        content: {
          intro: `So far, everything you've built runs entirely in the browser. But real web apps need a backend — a server that stores data, handles authentication, talks to databases, and serves information to your frontend. Node.js lets you write that server in the same JavaScript you already know, and Express is a lightweight framework that makes it easy to set up routes and handle requests.`,
          sections: [
            {
              heading: "How the web actually works",
              text: `When you visit a website, here's what happens behind the scenes:\n\n1. Your browser (the client) sends an HTTP request to a server\n2. The server processes the request — maybe looks up data, checks permissions\n3. The server sends back an HTTP response — usually HTML, JSON, or an error\n\nThe request has a method that tells the server what you want to do:\n\n• GET — "Give me data" (loading a page, fetching a list)\n• POST — "Here's new data" (submitting a form, creating a record)\n• PUT — "Update this data" (editing a profile)\n• DELETE — "Remove this data" (deleting a bookmark)\n\nAn API (Application Programming Interface) is just a server that responds with structured data (usually JSON) instead of HTML pages. Your React frontend talks to your API to get and send data.`,
            },
            {
              heading: "Setting up Express",
              text: `First, create a new project and install Express:`,
              code: `mkdir my-api
cd my-api
npm init -y
npm install express`,
              codeLanguage: "bash",
            },
            {
              heading: "Your first server",
              text: `Create a file called server.js. This is a complete, working API:`,
              code: `const express = require("express");
const app = express();
const PORT = 3001;

// This lets Express read JSON from request bodies
app.use(express.json());

// In-memory data store (we'll replace this with a database later)
let bookmarks = [
  { id: 1, name: "React Docs", url: "https://react.dev" },
  { id: 2, name: "MDN Web Docs", url: "https://developer.mozilla.org" },
  { id: 3, name: "Claude Code", url: "https://claude.ai" },
];
let nextId = 4;

// GET all bookmarks
app.get("/api/bookmarks", (req, res) => {
  res.json(bookmarks);
});

// GET a single bookmark by ID
app.get("/api/bookmarks/:id", (req, res) => {
  const bookmark = bookmarks.find(b => b.id === parseInt(req.params.id));
  if (!bookmark) return res.status(404).json({ error: "Not found" });
  res.json(bookmark);
});

// POST a new bookmark
app.post("/api/bookmarks", (req, res) => {
  const { name, url } = req.body;
  if (!name || !url) return res.status(400).json({ error: "Name and URL required" });

  const bookmark = { id: nextId++, name, url };
  bookmarks.push(bookmark);
  res.status(201).json(bookmark);
});

// DELETE a bookmark
app.delete("/api/bookmarks/:id", (req, res) => {
  const index = bookmarks.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Not found" });

  bookmarks.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});`,
              codeLanguage: "javascript",
            },
            {
              heading: "Breaking it down",
              text: `Each route follows the same pattern:\n\n• app.get(), app.post(), app.delete() — the HTTP method\n• "/api/bookmarks" — the URL path (called an endpoint)\n• (req, res) => {} — a handler function that receives the request and sends a response\n\nNotice how this is the same bookmark data from Lesson 4, but now it lives on a server. Any client — your React app, a mobile app, another server — can use these endpoints to read and modify bookmarks.\n\nRun it with: node server.js\n\nThen visit http://localhost:3001/api/bookmarks in your browser — you'll see JSON.`,
            },
            {
              heading: "Testing your API",
              text: `You can test your API without a frontend using curl in the terminal:\n\ncurl http://localhost:3001/api/bookmarks\ncurl -X POST http://localhost:3001/api/bookmarks -H "Content-Type: application/json" -d '{"name":"GitHub","url":"https://github.com"}'\ncurl -X DELETE http://localhost:3001/api/bookmarks/1\n\nOr use a tool like Postman or the VS Code REST Client extension. Each request hits a different endpoint and triggers different logic on the server.`,
            },
            {
              heading: "Connecting your React frontend",
              text: `To call your API from React, use the built-in fetch function:`,
              code: `// In your React component
const [bookmarks, setBookmarks] = useState([]);

// Fetch bookmarks when the component loads
useEffect(() => {
  fetch("http://localhost:3001/api/bookmarks")
    .then(res => res.json())
    .then(data => setBookmarks(data));
}, []);

// Add a new bookmark
const addBookmark = async (name, url) => {
  const res = await fetch("http://localhost:3001/api/bookmarks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, url }),
  });
  const newBookmark = await res.json();
  setBookmarks([...bookmarks, newBookmark]);
};`,
              codeLanguage: "jsx",
            },
          ],
          claudeTip: {
            title: "Building APIs fast with Claude Code",
            text: `Backend code is where Claude Code really accelerates your workflow because there's a lot of boilerplate. Instead of looking up Express syntax, describe what you need:\n\n"Create a REST API with Express for a todo app. I need endpoints to list all todos, create a new todo, toggle a todo's done status, and delete a todo. Use an in-memory array for now. Add proper error handling and status codes."\n\nClaude Code will generate the entire server with correct HTTP methods, status codes, error handling, and data validation. You can then test it and refine: "Add an endpoint to search todos by text" or "Add CORS support so my React app can call this API."`,
            prompt: `Create a REST API with Express for a todo app. I need
endpoints to list all todos, create a todo, toggle done
status, and delete a todo. Use an in-memory array. Add
error handling and proper HTTP status codes.`,
          },
        },
      },
      {
        id: "connecting-a-database",
        title: "Connecting a Database",
        subtitle: "Store and retrieve real data",
        duration: "30 min",
        content: {
          intro: `The API from the last lesson has a problem: every time you restart the server, all your data disappears. That's because it's stored in a JavaScript variable — in memory. Real apps need a database to persist data. In this lesson, you'll learn what databases are, why they matter, and how to connect one to your Express API using SQLite — the simplest database to start with.`,
          sections: [
            {
              heading: "What is a database?",
              text: `A database is a system for storing, organizing, and retrieving data. Think of it as a structured file that your server reads and writes to, with powerful tools for querying and filtering.\n\nThere are two main types:\n\n• SQL databases (SQLite, PostgreSQL, MySQL) — store data in tables with rows and columns, like a spreadsheet. You query them with SQL (Structured Query Language). Great for structured data with relationships.\n\n• NoSQL databases (MongoDB, Firebase) — store data as flexible documents (like JSON objects). Good for data that doesn't fit neatly into tables.\n\nWe'll use SQLite because it stores everything in a single file — no separate server to install or configure. Perfect for learning.`,
            },
            {
              heading: "Setting up SQLite with better-sqlite3",
              text: `Install the better-sqlite3 package, which gives you a clean way to work with SQLite in Node:`,
              code: `npm install better-sqlite3`,
              codeLanguage: "bash",
            },
            {
              heading: "Creating your database",
              text: `Add a database setup file that creates your table and provides helper functions:`,
              code: `// db.js
const Database = require("better-sqlite3");
const db = new Database("bookmarks.db");

// Create the table if it doesn't exist
db.exec(\`
  CREATE TABLE IF NOT EXISTS bookmarks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
\`);

// Helper functions
const getAll = () => db.prepare("SELECT * FROM bookmarks ORDER BY created_at DESC").all();

const getById = (id) => db.prepare("SELECT * FROM bookmarks WHERE id = ?").get(id);

const create = (name, url) => {
  const result = db.prepare("INSERT INTO bookmarks (name, url) VALUES (?, ?)").run(name, url);
  return getById(result.lastInsertRowid);
};

const remove = (id) => {
  const result = db.prepare("DELETE FROM bookmarks WHERE id = ?").run(id);
  return result.changes > 0;
};

const search = (query) => {
  return db.prepare("SELECT * FROM bookmarks WHERE name LIKE ?").all("%" + query + "%");
};

module.exports = { getAll, getById, create, remove, search };`,
              codeLanguage: "javascript",
            },
            {
              heading: "Updating your API to use the database",
              text: `Now swap out the in-memory array for your database functions:`,
              code: `// server.js (updated)
const express = require("express");
const db = require("./db");
const app = express();

app.use(express.json());

app.get("/api/bookmarks", (req, res) => {
  const { q } = req.query;
  const bookmarks = q ? db.search(q) : db.getAll();
  res.json(bookmarks);
});

app.get("/api/bookmarks/:id", (req, res) => {
  const bookmark = db.getById(req.params.id);
  if (!bookmark) return res.status(404).json({ error: "Not found" });
  res.json(bookmark);
});

app.post("/api/bookmarks", (req, res) => {
  const { name, url } = req.body;
  if (!name || !url) return res.status(400).json({ error: "Name and URL required" });
  const bookmark = db.create(name, url);
  res.status(201).json(bookmark);
});

app.delete("/api/bookmarks/:id", (req, res) => {
  const deleted = db.remove(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Not found" });
  res.status(204).send();
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));`,
              codeLanguage: "javascript",
            },
            {
              heading: "SQL basics you need to know",
              text: `SQL reads almost like English. Here are the four operations you'll use most:\n\n• SELECT * FROM bookmarks — get all rows\n• SELECT * FROM bookmarks WHERE id = 1 — get one row\n• INSERT INTO bookmarks (name, url) VALUES ('GitHub', 'https://github.com') — add a row\n• DELETE FROM bookmarks WHERE id = 1 — remove a row\n\nThe ? placeholders in the code above are parameterized queries — they prevent SQL injection attacks by keeping user input separate from the SQL command. Always use them instead of string concatenation.`,
            },
            {
              heading: "Try it yourself",
              text: `Update the bookmark API from the previous lesson to use SQLite:\n\n1. Install better-sqlite3 and create the db.js file\n2. Update your routes to call database functions instead of array methods\n3. Restart the server, add some bookmarks, then restart again — they're still there!\n\nThen try extending it:\n\n• Add an UPDATE endpoint to rename bookmarks\n• Add a "tags" column and filter by tag\n• Add a "favorites" boolean and an endpoint to toggle it`,
            },
          ],
          claudeTip: {
            title: "Claude Code and databases",
            text: `Database work involves a lot of syntax that's easy to get wrong — SQL queries, schema definitions, migration scripts. Claude Code handles all of it:\n\n"Add a SQLite database to my Express bookmarks API. Create a bookmarks table with id, name, url, and created_at fields. Update all my routes to use the database instead of the in-memory array. Add a search endpoint that filters by name."\n\nClaude Code will generate the schema, helper functions, and updated routes in one go. When you need to change the schema later: "Add a 'tags' column to the bookmarks table and update the API to support filtering by tag."`,
            prompt: `Add a SQLite database to my Express API. Create the table
schema, write helper functions for CRUD operations, and
update all routes to use the database. Add a search endpoint.`,
          },
        },
      },
      {
        id: "deploying-your-app",
        title: "Deploying Your App",
        subtitle: "Put your project on the internet",
        duration: "20 min",
        content: {
          intro: `You've built a frontend, a backend, and connected a database. But right now, everything only runs on your computer. Deployment is the process of putting your app on a server so anyone on the internet can use it. This lesson covers the key concepts and walks through deploying with popular, beginner-friendly platforms.`,
          sections: [
            {
              heading: "What deployment actually means",
              text: `When you run npm run dev or node server.js, your app is running on localhost — your machine. Deployment means putting your code on someone else's machine (a server in a data center) that's always on and connected to the internet.\n\nThere are two things to deploy:\n\n• Frontend (your React app) — gets compiled into static HTML, CSS, and JS files that any web server can host. This is the simpler part.\n• Backend (your Express API) — needs a server that runs Node.js and keeps your process alive. This is slightly more involved.`,
            },
            {
              heading: "Deploying your frontend",
              text: `For React apps built with Vite, deployment is straightforward:\n\n1. Run the build command: npm run build\n2. This creates a "dist" folder with optimized static files\n3. Upload those files to a static hosting service\n\nPopular free options:\n\n• Vercel — the easiest. Connect your GitHub repo and it auto-deploys on every push\n• Netlify — similar to Vercel, great for static sites and simple serverless functions\n• GitHub Pages — free hosting directly from your GitHub repository\n\nWith Vercel, it's literally: push your code to GitHub, import the repo on vercel.com, and you're live.`,
            },
            {
              heading: "Deploying your backend",
              text: `Your Express API needs a platform that runs Node.js:\n\n• Railway — connect your GitHub repo, Railway detects Node.js and deploys automatically. Free tier available.\n• Render — similar to Railway, with a generous free tier for web services\n• Fly.io — great for apps that need to be fast globally\n\nEach platform needs to know one thing: how to start your app. You specify this in your package.json:`,
              code: `{
  "name": "my-api",
  "scripts": {
    "start": "node server.js"
  }
}`,
              codeLanguage: "json",
            },
            {
              heading: "Environment variables",
              text: `When you deploy, you'll need environment variables for things like:\n\n• Database connection strings\n• API keys for third-party services\n• The port number (hosting platforms assign this dynamically)\n\nNever put secrets in your code. Instead, use process.env:`,
              code: `// Instead of hardcoding:
const PORT = 3001;

// Use an environment variable with a fallback:
const PORT = process.env.PORT || 3001;

// For database URLs:
const DATABASE_URL = process.env.DATABASE_URL || "./bookmarks.db";`,
              codeLanguage: "javascript",
            },
            {
              heading: "The deployment checklist",
              text: `Before you deploy, make sure:\n\n• Your app runs with npm start (not just npm run dev)\n• You're using process.env.PORT for the server port\n• No secrets are hardcoded — they're all in environment variables\n• Your .gitignore excludes node_modules, .env, and database files\n• You have a README explaining how to run the project\n• CORS is configured if your frontend and backend are on different domains`,
            },
            {
              heading: "Try it yourself",
              text: `Deploy the bookmark app you've been building:\n\n1. Push your code to a GitHub repository\n2. Deploy the React frontend to Vercel (connect your repo, done)\n3. Deploy the Express backend to Railway (connect your repo, set environment variables)\n4. Update your frontend's API URL to point to the deployed backend\n\nOnce both are deployed, share the link — your app is live on the internet!`,
            },
          ],
          claudeTip: {
            title: "Claude Code for deployment setup",
            text: `Deployment config is exactly the kind of tedious, error-prone work that Claude Code handles well:\n\n"Help me deploy this app. Set up the build script in package.json, create a .gitignore file, add environment variable support to my server, configure CORS, and create a Dockerfile."\n\nClaude Code knows the specific config each platform expects. You can also ask: "What do I need to change before deploying this Express app to Railway?" and get a checklist tailored to your actual code.`,
            prompt: `Prepare my Express + React app for deployment. Add a proper
start script, configure CORS, use environment variables for
PORT and DATABASE_URL, create a .gitignore, and set up the
Vite build for production.`,
          },
        },
      },
    ],
  },
  {
    id: "claude-code-mastery",
    title: "Claude Code Mastery",
    description: "Advanced techniques, hooks, MCP, and power-user workflows",
    lessons: [
      {
        id: "effective-prompting",
        title: "Effective Prompting for Code",
        subtitle: "Get better results with better prompts",
        duration: "20 min",
        content: {
          intro: `The biggest lever you have with Claude Code is how you communicate what you want. A vague prompt gets a generic result. A specific, well-structured prompt gets exactly what you need. This lesson covers the prompting patterns that make the biggest difference.`,
          sections: [
            {
              heading: "The specificity spectrum",
              text: `Compare these two prompts:\n\nVague: "Make a website"\nSpecific: "Create a single-page portfolio site with a hero section showing my name and title, a grid of 3 project cards with titles and descriptions, and a contact section with email and GitHub links. Use a dark color scheme with blue accents."\n\nThe second prompt gives Claude Code enough context to produce something close to what you actually want on the first try. The key dimensions of specificity are: what to build, how it should look, what data or content to include, and what technologies to use.`,
            },
            {
              heading: "The iterate-don't-restart pattern",
              text: `One of the most common mistakes is starting over when the result isn't perfect. Instead, build on what you have:\n\n1. Start with a broad prompt to get the structure\n2. Then refine: "Move the navigation to the left side"\n3. Then polish: "Make the active nav item bold with a blue left border"\n4. Then edge cases: "What happens when the screen is narrow? Make it responsive"\n\nEach step is a small, focused change. This is faster and produces better results than trying to specify everything upfront.`,
            },
            {
              heading: "Providing context",
              text: `Claude Code works best when it understands the bigger picture. Try including:\n\n• What the project is for: "This is a dashboard for tracking fitness goals"\n• Who will use it: "The users are non-technical small business owners"\n• What already exists: "I already have a React app with Tailwind set up"\n• What you've tried: "I tried using flexbox but the items aren't centering"\n\nContext prevents Claude Code from making assumptions that don't match your situation.`,
            },
            {
              heading: "Useful prompt templates",
              text: `Here are patterns you can reuse:\n\nFor new features:\n"Add [feature] to [file/component]. It should [behavior]. Style it to match [reference]."\n\nFor debugging:\n"[Component] is [broken behavior]. Expected: [correct behavior]. Here's what I see: [description]."\n\nFor refactoring:\n"Refactor [code area] to [improvement]. Keep the same behavior but [goal]."`,
            },
          ],
          claudeTip: {
            title: "Meta-prompting: ask Claude Code to help you prompt",
            text: `Here's a power move: if you're not sure how to describe what you want, ask Claude Code to help you articulate it.\n\n"I want to build some kind of dashboard for my personal finances but I'm not sure what features to include. Help me think through what this should look like and then build it."\n\nClaude Code can brainstorm with you, ask clarifying questions, and then execute on the plan. You don't need to have everything figured out before you start.`,
            prompt: `I want to build a personal finance dashboard but I'm not sure
what it should include. Help me think through the key features,
then let's build it step by step.`,
          },
        },
      },
      {
        id: "claude-code-workflows",
        title: "Multi-File Project Workflows",
        subtitle: "Managing real projects with Claude Code",
        duration: "25 min",
        content: {
          intro: `Up until now, most of our projects have been single files. But real apps have many files — components, utilities, styles, configs, tests. Working with Claude Code on multi-file projects requires a different approach than single-file prompts. This lesson covers the strategies and workflows that make Claude Code effective on real-world projects.`,
          sections: [
            {
              heading: "CLAUDE.md — your project's brain",
              text: `The most impactful thing you can do for a multi-file project is create a CLAUDE.md file in your project root. This file gives Claude persistent context about your project that carries across sessions.\n\nA good CLAUDE.md includes:\n\n• Project overview: what it does, who it's for\n• Architecture: how files and folders are organized\n• Conventions: naming patterns, code style, preferred libraries\n• Common commands: how to run, test, build, deploy\n• Key decisions: "We use Zustand for state management, not Redux" or "All API calls go through src/api/client.js"`,
              code: `# CLAUDE.md

## Overview
DevPath is a learning platform that teaches web development
through project-based lessons, with Claude Code integrated
into every lesson.

## Tech Stack
- React (single-file JSX with inline styles)
- Hash-based routing (custom useHashRouter hook)
- In-memory state (useState for progress tracking)

## Architecture
- All code is in devpath.jsx
- MODULES array contains curriculum data
- CLAUDE_REFERENCE array contains reference page data
- Components: Nav, Dashboard, Curriculum, LessonView, Reference

## Conventions
- Inline styles using style objects (no CSS files)
- Clean, minimal design: #fafafa background, blue accents (#2563eb)
- All lesson content follows the same structure:
  intro, sections[], claudeTip

## Commands
- Open the .jsx file in a React preview to test`,
              codeLanguage: "markdown",
            },
            {
              heading: "The /init command",
              text: `Don't want to write CLAUDE.md from scratch? Run /init in Claude Code and it will analyze your project and generate one for you. Review it, tweak anything that's off, and you're set.\n\nThis is one of the highest-leverage things you can do — it takes two minutes and makes every future Claude Code session significantly better.`,
            },
            {
              heading: "Scoping your prompts",
              text: `In a multi-file project, vague prompts lead to confusion. Always tell Claude Code where to work:\n\n• Good: "Add a loading spinner to the Dashboard component in src/components/Dashboard.jsx"\n• Bad: "Add a loading spinner"\n\nIf a change touches multiple files, list them:\n\n• "Update the BookmarkCard component and its parent BookmarkList to support an 'edit' mode. The card is in src/components/BookmarkCard.jsx and the list is in src/components/BookmarkList.jsx"\n\nThis prevents Claude Code from guessing which files to modify and potentially breaking things you didn't intend to change.`,
            },
            {
              heading: "The /compact command",
              text: `Long Claude Code sessions accumulate a lot of context — every file you've discussed, every change made. Eventually this can slow things down or cause Claude to lose track.\n\nThe /compact command condenses the conversation history into a summary. Use it:\n\n• When switching from one task to a completely different one\n• When the session feels slow or Claude repeats itself\n• After finishing a major feature, before starting the next one\n\nThink of it as cleaning your desk between tasks.`,
            },
            {
              heading: "Working with existing codebases",
              text: `When you open Claude Code in an existing project for the first time:\n\n1. Run /init to generate CLAUDE.md\n2. Ask Claude to explore: "Explain the project structure and how data flows from the API to the UI"\n3. Start with a small change to build trust: "Fix the typo in the header component"\n4. Then go bigger: "Add a search feature to the user list page"\n\nThis gradual approach lets you verify Claude Code understands the project before making significant changes.`,
            },
            {
              heading: "Multi-step workflows",
              text: `For complex features, break the work into steps and let Claude Code handle each one:\n\n1. "First, create the database schema for a 'tags' feature — each bookmark can have multiple tags"\n2. "Now add API endpoints to create tags and assign them to bookmarks"\n3. "Add a tag selector component to the bookmark form in the frontend"\n4. "Finally, add a tag filter to the bookmarks list page"\n\nEach step is focused and verifiable. You can test between steps, catch issues early, and course-correct. This is more reliable than one giant prompt that tries to do everything at once.`,
            },
          ],
          claudeTip: {
            title: "The session workflow",
            text: `Here's the workflow experienced Claude Code users follow for every session:\n\n1. Start in your project directory: claude\n2. If it's a new project, run /init\n3. Describe the feature or fix you're working on — include file paths\n4. Review the changes Claude makes\n5. Test as you go\n6. When switching tasks, run /compact\n7. When done, review all changes with git diff before committing\n\nThis rhythm — prompt, review, test, compact — is how you stay productive across long sessions without losing quality.`,
            prompt: `Explore this project and explain the file structure,
key components, and how data flows through the app.
Then suggest three improvements you'd make.`,
          },
        },
      },
      {
        id: "mcp-and-hooks",
        title: "MCP Servers & Hooks",
        subtitle: "Extend Claude Code's capabilities",
        duration: "30 min",
        content: {
          intro: `Out of the box, Claude Code can read files, write code, and run terminal commands. But what if you want it to interact with a design tool, query a live database, or automatically run tests after every edit? That's where MCP servers and hooks come in — they extend what Claude Code can do and automate parts of your workflow.`,
          sections: [
            {
              heading: "What is MCP?",
              text: `MCP (Model Context Protocol) is an open standard that lets Claude Code connect to external tools and data sources. An MCP server is a small program that exposes specific capabilities — like reading from a database, searching Figma designs, or interacting with a project management tool.\n\nWhen you connect an MCP server, Claude Code gains new abilities. For example:\n\n• A Postgres MCP server lets Claude query your database directly\n• A GitHub MCP server lets Claude create issues, review PRs, and manage repos\n• A Figma MCP server lets Claude read design specs and generate matching code\n\nYou don't need to build these from scratch — there's a growing ecosystem of pre-built MCP servers you can install.`,
            },
            {
              heading: "Setting up an MCP server",
              text: `MCP servers are configured in your Claude Code settings. Here's what a configuration looks like:`,
              code: `// In your Claude Code settings (.claude/settings.json)
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://localhost:5432/myapp"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-token-here"
      }
    }
  }
}`,
              codeLanguage: "json",
            },
            {
              heading: "Using MCP in practice",
              text: `Once an MCP server is connected, you can reference its capabilities in your prompts naturally:\n\n• "Query the database and show me all users who signed up this week"\n• "Look at the Figma design for the settings page and build a matching React component"\n• "Create a GitHub issue for the login bug we just found"\n\nClaude Code knows what tools are available and uses them when relevant. You don't need special syntax — just describe what you want and Claude Code will use the right MCP tool.`,
            },
            {
              heading: "What are hooks?",
              text: `Hooks let you run custom scripts at specific points in Claude Code's workflow. They're like event listeners for Claude Code's actions:\n\n• PreToolUse — runs before Claude executes a tool (like writing a file or running a command)\n• PostToolUse — runs after a tool completes\n• Notification — runs when Claude wants to notify you of something\n\nThe most common use cases:\n\n• Auto-format code after every file edit (run Prettier on save)\n• Run linting after code changes to catch issues immediately\n• Run relevant tests after modifying a file\n• Block certain dangerous commands from executing`,
            },
            {
              heading: "Setting up hooks",
              text: `Hooks are configured in your project's .claude/settings.json:`,
              code: `// .claude/settings.json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "write|edit",
        "command": "npx prettier --write $CLAUDE_FILE_PATH"
      }
    ],
    "PreToolUse": [
      {
        "matcher": "bash",
        "command": "echo 'Running command: $CLAUDE_TOOL_INPUT'"
      }
    ]
  }
}`,
              codeLanguage: "json",
            },
            {
              heading: "Practical hook examples",
              text: `Here are hooks that experienced developers use:\n\n• Auto-format: Run Prettier or ESLint --fix after every file write\n• Auto-test: Run the test file related to whatever component was just modified\n• Safety guardrails: Block commands that could delete important files or push to main\n• Logging: Keep a record of all commands Claude Code runs for review\n\nHooks are optional and advanced — you don't need them to be productive with Claude Code. But once you find yourself doing the same manual step after every edit (like running tests), that's a sign you should automate it with a hook.`,
            },
            {
              heading: "Where to go from here",
              text: `You've now covered the full spectrum — from writing your first HTML tag to extending Claude Code with MCP servers and hooks. Here's how to keep growing:\n\n• Build projects: The best way to learn is to build things you actually want to use\n• Read source code: Look at how open-source projects are structured\n• Explore the MCP ecosystem: Browse available MCP servers and try connecting one to a project\n• Join the community: Share what you're building and learn from what others are doing\n\nThe most important thing: keep using Claude Code as you learn. Every prompt you write is practice. Every project you build teaches you something new. You're no longer starting from zero — you have a solid foundation and a powerful tool to build on.`,
            },
          ],
          claudeTip: {
            title: "Your Claude Code power-user toolkit",
            text: `Here's a summary of every technique from this module:\n\n• Be specific in prompts — include file paths, expected behavior, and styling expectations\n• Iterate, don't restart — refine what you have instead of starting over\n• Use CLAUDE.md — give Claude persistent context about your project\n• Use /compact — keep sessions clean when switching tasks\n• Scope multi-file changes — list exactly which files to modify\n• Break complex work into steps — prompt, review, test, repeat\n• Set up MCP servers — connect Claude to your database, design tools, and services\n• Add hooks — automate formatting, testing, and safety checks\n\nYou don't need all of these on day one. Start with good prompts and CLAUDE.md, then layer in the rest as your projects grow more complex.`,
            prompt: `Set up my project with a CLAUDE.md file that describes
the architecture, conventions, and common commands.
Then add a PostToolUse hook that runs Prettier on any
file I edit.`,
          },
        },
      },
    ],
  },
];

const CLAUDE_REFERENCE = [
  {
    category: "Getting Started",
    items: [
      {
        title: "What is Claude Code?",
        description:
          "Claude Code is a command-line tool that lets you delegate coding tasks to Claude directly from your terminal. You describe what you want in natural language, and Claude reads your codebase, writes code, runs commands, and iterates until the task is done.",
      },
      {
        title: "Installation",
        description:
          "Install globally via npm:\n\nnpm install -g @anthropic-ai/claude-code\n\nThen run 'claude' in any project directory to start a session.",
      },
      {
        title: "Basic usage",
        description:
          'Start Claude Code with the "claude" command in your terminal. You can give it instructions in natural language. It can see your project files, create new files, edit existing ones, and run terminal commands — all with your approval.',
      },
    ],
  },
  {
    category: "Core Workflows",
    items: [
      {
        title: "Describe → Generate → Refine",
        description:
          "The most common pattern: describe what you want, let Claude generate it, then refine with follow-up prompts. Each iteration builds on the last. Don't start over — iterate.",
      },
      {
        title: "Debugging with Claude Code",
        description:
          'Paste an error message or describe the broken behavior. Claude Code can read your code, identify the issue, and fix it. Try: "I\'m getting a TypeError on line 42 of app.js — the map function isn\'t working on the data variable."',
      },
      {
        title: "Code review & refactoring",
        description:
          'Ask Claude Code to review your code for improvements: "Review this component for performance issues and suggest improvements." It can also refactor: "Refactor this to use async/await instead of callbacks."',
      },
    ],
  },
  {
    category: "Slash Commands",
    items: [
      {
        title: "/help",
        description: "Show available commands and usage information.",
      },
      {
        title: "/clear",
        description:
          "Clear the conversation history. Useful when you want to start a new task without prior context affecting Claude's responses.",
      },
      {
        title: "/compact",
        description:
          "Condense the conversation into a summary. Helpful during long sessions to keep Claude focused and reduce token usage.",
      },
      {
        title: "/init",
        description:
          "Generate a CLAUDE.md file for your project. This file gives Claude persistent context about your project — conventions, architecture, key files — so it works better in future sessions.",
      },
    ],
  },
  {
    category: "Advanced Features",
    items: [
      {
        title: "CLAUDE.md project files",
        description:
          "Create a CLAUDE.md file in your project root to give Claude persistent context. Include: project overview, key architecture decisions, coding conventions, common commands, and anything you'd tell a new developer joining the project.",
      },
      {
        title: "MCP Servers",
        description:
          "Model Context Protocol (MCP) servers extend Claude Code's capabilities. They let Claude interact with external tools and services — databases, APIs, design tools, and more. Configure them in your project settings.",
      },
      {
        title: "Hooks",
        description:
          "Hooks let you run custom scripts at specific points in Claude Code's workflow — before/after commands, before/after file edits, etc. Use them to enforce linting, run tests automatically, or trigger builds.",
      },
      {
        title: "Headless mode",
        description:
          'Run Claude Code non-interactively with the -p flag: \'claude -p "add input validation to the signup form"\'. Great for scripting, CI/CD pipelines, or batch operations across multiple files.',
      },
    ],
  },
  {
    category: "Tips & Best Practices",
    items: [
      {
        title: "Be specific about what you want",
        description:
          'Instead of "make a form," say "create a signup form with email and password fields, client-side validation, and a submit button that posts to /api/signup." More detail = better results on the first try.',
      },
      {
        title: "Iterate, don't restart",
        description:
          "If the first result isn't perfect, refine it. \"Move the button to the right side\" or \"Make the error messages red\" is faster than re-describing the entire component.",
      },
      {
        title: "Give context about your project",
        description:
          "Mention the framework, styling approach, and conventions you're using. \"I'm using React with Tailwind and prefer functional components with hooks\" helps Claude match your project's patterns.",
      },
      {
        title: "Use Claude Code for learning",
        description:
          'After Claude generates code, ask it to explain what it did: "Explain how this useEffect hook works" or "Why did you use flexbox instead of grid here?" Claude Code is a great teacher.',
      },
    ],
  },
];

// ─── Router ──────────────────────────────────────────────────────────────────

function useHashRouter() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback((path) => {
    window.location.hash = path;
  }, []);

  return { route, navigate };
}

// ─── Progress State (connected to SQLite via API) ───────────────────────────

const API_URL = "http://localhost:3002/api/progress";

function useProgress() {
  const [completed, setCompleted] = useState({});

  // Load progress from the database when the app starts
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCompleted(data))
      .catch((err) => console.warn("Could not load progress:", err));
  }, []);

  // Toggle a lesson and save to the database
  const toggleLesson = useCallback((lessonId) => {
    setCompleted((prev) => {
      const updated = { ...prev, [lessonId]: !prev[lessonId] };
      // Clean up false values
      if (!updated[lessonId]) delete updated[lessonId];
      return updated;
    });

    // Tell the server to toggle this lesson
    fetch(`${API_URL}/${lessonId}`, { method: "POST" }).catch((err) =>
      console.warn("Could not save progress:", err)
    );
  }, []);

  const totalLessons = MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedCount = Object.values(completed).filter(Boolean).length;

  return { completed, toggleLesson, totalLessons, completedCount };
}

// ─── Components ──────────────────────────────────────────────────────────────

function Nav({ route, navigate }) {
  const links = [
    { path: "#/", label: "Dashboard" },
    { path: "#/curriculum", label: "Curriculum" },
    { path: "#/reference", label: "Claude Code Reference" },
  ];

  const isActive = (path) => {
    if (path === "#/") return route === "#/" || route === "#";
    return route.startsWith(path);
  };

  return (
    <nav
      style={{
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={() => navigate("#/")}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            D
          </div>
          <span style={{ fontWeight: 700, fontSize: 18, color: "#111827" }}>
            DevPath
          </span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: "none",
                background: isActive(link.path) ? "#eff6ff" : "transparent",
                color: isActive(link.path) ? "#2563eb" : "#6b7280",
                fontWeight: isActive(link.path) ? 600 : 500,
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Dashboard({ navigate, completedCount, totalLessons, completed }) {
  const percentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const nextLesson = MODULES.flatMap((m) => m.lessons).find(
    (l) => !completed[l.id]
  );

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ marginBottom: 48 }}>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#111827",
            marginBottom: 8,
            lineHeight: 1.2,
          }}
        >
          Welcome to DevPath
        </h1>
        <p style={{ fontSize: 18, color: "#6b7280", lineHeight: 1.6 }}>
          Learn to build web apps from scratch — with Claude Code as your
          copilot every step of the way.
        </p>
      </div>

      {/* Progress Card */}
      <div
        style={{
          background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
          borderRadius: 16,
          padding: 32,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#2563eb",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 4,
              }}
            >
              Your Progress
            </p>
            <p style={{ fontSize: 28, fontWeight: 700, color: "#1e3a5f" }}>
              {completedCount} of {totalLessons} lessons
            </p>
          </div>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: `conic-gradient(#2563eb ${percentage * 3.6}deg, #bfdbfe ${percentage * 3.6}deg)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: "#eff6ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 16,
                color: "#2563eb",
              }}
            >
              {percentage}%
            </div>
          </div>
        </div>
        <div
          style={{
            height: 8,
            backgroundColor: "#bfdbfe",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${percentage}%`,
              backgroundColor: "#2563eb",
              borderRadius: 4,
              transition: "width 0.5s ease",
            }}
          />
        </div>
      </div>

      {/* Next Up + Quick Links */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {nextLesson && (
          <div
            onClick={() => navigate(`#/lesson/${nextLesson.id}`)}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 16,
              padding: 28,
              cursor: "pointer",
              transition: "all 0.2s",
              backgroundColor: "white",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#93c5fd";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(37,99,235,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#2563eb",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 8,
              }}
            >
              Up Next
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#111827",
                marginBottom: 6,
              }}
            >
              {nextLesson.title}
            </p>
            <p style={{ fontSize: 14, color: "#6b7280" }}>
              {nextLesson.subtitle}
            </p>
            <p
              style={{
                fontSize: 13,
                color: "#9ca3af",
                marginTop: 12,
              }}
            >
              {nextLesson.duration}
            </p>
          </div>
        )}

        <div
          onClick={() => navigate("#/reference")}
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 16,
            padding: 28,
            cursor: "pointer",
            transition: "all 0.2s",
            backgroundColor: "white",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#93c5fd";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(37,99,235,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#e5e7eb";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#6b7280",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 8,
            }}
          >
            Quick Access
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#111827",
              marginBottom: 6,
            }}
          >
            Claude Code Reference
          </p>
          <p style={{ fontSize: 14, color: "#6b7280" }}>
            Commands, workflows, tips, and best practices
          </p>
        </div>
      </div>

      {/* Learning Path Overview */}
      <div style={{ marginTop: 48 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#111827",
            marginBottom: 20,
          }}
        >
          Your Learning Path
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {MODULES.map((mod, i) => {
            const modCompleted = mod.lessons.filter(
              (l) => completed[l.id]
            ).length;
            return (
              <div
                key={mod.id}
                onClick={() => navigate("#/curriculum")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: 20,
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  cursor: "pointer",
                  backgroundColor: "white",
                  transition: "border-color 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#93c5fd")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#e5e7eb")
                }
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor:
                      modCompleted === mod.lessons.length && mod.lessons.length > 0
                        ? "#dcfce7"
                        : "#f3f4f6",
                    color:
                      modCompleted === mod.lessons.length && mod.lessons.length > 0
                        ? "#16a34a"
                        : "#9ca3af",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontWeight: 600,
                      color: "#111827",
                      fontSize: 15,
                    }}
                  >
                    {mod.title}
                  </p>
                  <p style={{ fontSize: 13, color: "#6b7280" }}>
                    {mod.description}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#9ca3af",
                    whiteSpace: "nowrap",
                  }}
                >
                  {modCompleted}/{mod.lessons.length}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Curriculum({ navigate, completed, toggleLesson }) {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <h1
        style={{
          fontSize: 32,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 8,
        }}
      >
        Curriculum
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "#6b7280",
          marginBottom: 40,
          lineHeight: 1.6,
        }}
      >
        Work through each module in order. Every lesson teaches a web development
        concept alongside a Claude Code technique.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {MODULES.map((mod, mi) => (
          <div key={mod.id}>
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#2563eb",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Module {mi + 1}
                </span>
              </div>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 4,
                }}
              >
                {mod.title}
              </h2>
              <p style={{ fontSize: 14, color: "#6b7280" }}>
                {mod.description}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {mod.lessons.map((lesson, li) => {
                const isComplete = completed[lesson.id];
                const hasContent = lesson.content !== null;
                return (
                  <div
                    key={lesson.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "16px 20px",
                      border: "1px solid #e5e7eb",
                      borderRadius: 12,
                      backgroundColor: isComplete ? "#f0fdf4" : "white",
                      cursor: hasContent ? "pointer" : "default",
                      transition: "all 0.15s",
                      opacity: hasContent ? 1 : 0.7,
                    }}
                    onClick={() =>
                      hasContent && navigate(`#/lesson/${lesson.id}`)
                    }
                    onMouseEnter={(e) => {
                      if (hasContent)
                        e.currentTarget.style.borderColor = "#93c5fd";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e5e7eb";
                    }}
                  >
                    {/* Checkbox */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLesson(lesson.id);
                      }}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 6,
                        border: isComplete
                          ? "2px solid #16a34a"
                          : "2px solid #d1d5db",
                        backgroundColor: isComplete ? "#16a34a" : "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        flexShrink: 0,
                        transition: "all 0.15s",
                      }}
                    >
                      {isComplete && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M3 7L6 10L11 4"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>

                    {/* Lesson info */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <p
                          style={{
                            fontWeight: 600,
                            color: isComplete ? "#16a34a" : "#111827",
                            fontSize: 15,
                          }}
                        >
                          {lesson.title}
                        </p>
                        {!hasContent && (
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 600,
                              color: "#9ca3af",
                              backgroundColor: "#f3f4f6",
                              padding: "2px 8px",
                              borderRadius: 4,
                            }}
                          >
                            COMING SOON
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: 13, color: "#6b7280" }}>
                        {lesson.subtitle}
                      </p>
                    </div>

                    <span
                      style={{ fontSize: 13, color: "#9ca3af", flexShrink: 0 }}
                    >
                      {lesson.duration}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeBlock({ code, language }) {
  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        borderRadius: 12,
        padding: 24,
        overflowX: "auto",
        marginTop: 16,
        marginBottom: 16,
      }}
    >
      {language && (
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "#64748b",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: 12,
          }}
        >
          {language}
        </div>
      )}
      <pre
        style={{
          margin: 0,
          fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', monospace",
          fontSize: 14,
          lineHeight: 1.7,
          color: "#e2e8f0",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {code}
      </pre>
    </div>
  );
}

function ClaudeTipBox({ tip }) {
  return (
    <div
      style={{
        border: "1px solid #bfdbfe",
        backgroundColor: "#eff6ff",
        borderRadius: 12,
        padding: 24,
        marginTop: 32,
        marginBottom: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: 6,
            background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 700,
            fontSize: 12,
          }}
        >
          C
        </div>
        <span
          style={{
            fontWeight: 700,
            fontSize: 14,
            color: "#1d4ed8",
          }}
        >
          {tip.title}
        </span>
      </div>
      <p
        style={{
          fontSize: 14,
          color: "#1e3a5f",
          lineHeight: 1.7,
          whiteSpace: "pre-line",
          marginBottom: tip.prompt ? 16 : 0,
        }}
      >
        {tip.text}
      </p>
      {tip.prompt && (
        <div
          style={{
            backgroundColor: "#dbeafe",
            borderRadius: 8,
            padding: 16,
            fontFamily: "'SF Mono', 'Fira Code', monospace",
            fontSize: 13,
            color: "#1e40af",
            lineHeight: 1.6,
            whiteSpace: "pre-wrap",
          }}
        >
          {tip.prompt}
        </div>
      )}
    </div>
  );
}

function LessonView({ lessonId, navigate, completed, toggleLesson }) {
  const allLessons = MODULES.flatMap((m) => m.lessons);
  const lessonIndex = allLessons.findIndex((l) => l.id === lessonId);
  const lesson = allLessons[lessonIndex];

  if (!lesson || !lesson.content) {
    return (
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h1
          style={{ fontSize: 24, fontWeight: 700, color: "#111827", marginBottom: 8 }}
        >
          {lesson ? lesson.title : "Lesson not found"}
        </h1>
        <p style={{ color: "#6b7280", marginBottom: 24 }}>
          {lesson
            ? "This lesson is coming soon. Check back later!"
            : "We couldn't find that lesson."}
        </p>
        <button
          onClick={() => navigate("#/curriculum")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Back to Curriculum
        </button>
      </div>
    );
  }

  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;
  const isComplete = completed[lesson.id];
  const { content } = lesson;

  // Find which module this lesson belongs to
  let moduleName = "";
  for (const mod of MODULES) {
    if (mod.lessons.some((l) => l.id === lessonId)) {
      moduleName = mod.title;
      break;
    }
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
      {/* Breadcrumb */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 32,
          fontSize: 14,
        }}
      >
        <span
          onClick={() => navigate("#/curriculum")}
          style={{ color: "#2563eb", cursor: "pointer" }}
        >
          Curriculum
        </span>
        <span style={{ color: "#d1d5db" }}>/</span>
        <span style={{ color: "#6b7280" }}>{moduleName}</span>
        <span style={{ color: "#d1d5db" }}>/</span>
        <span style={{ color: "#111827", fontWeight: 500 }}>
          {lesson.title}
        </span>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 8,
          }}
        >
          <span style={{ fontSize: 13, color: "#6b7280" }}>
            {lesson.duration}
          </span>
        </div>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#111827",
            lineHeight: 1.2,
            marginBottom: 8,
          }}
        >
          {lesson.title}
        </h1>
        <p style={{ fontSize: 18, color: "#6b7280", lineHeight: 1.5 }}>
          {lesson.subtitle}
        </p>
      </div>

      {/* Intro */}
      <p
        style={{
          fontSize: 16,
          color: "#374151",
          lineHeight: 1.8,
          marginBottom: 40,
        }}
      >
        {content.intro}
      </p>

      {/* Sections */}
      {content.sections.map((section, i) => (
        <div key={i} style={{ marginBottom: 36 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#111827",
              marginBottom: 12,
            }}
          >
            {section.heading}
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#374151",
              lineHeight: 1.8,
              whiteSpace: "pre-line",
            }}
          >
            {section.text}
          </p>
          {section.code && (
            <CodeBlock code={section.code} language={section.codeLanguage} />
          )}
        </div>
      ))}

      {/* Claude Code Tip */}
      {content.claudeTip && <ClaudeTipBox tip={content.claudeTip} />}

      {/* Mark Complete + Nav */}
      <div
        style={{
          borderTop: "1px solid #e5e7eb",
          marginTop: 48,
          paddingTop: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => toggleLesson(lesson.id)}
          style={{
            padding: "12px 24px",
            borderRadius: 10,
            border: isComplete ? "2px solid #16a34a" : "2px solid #2563eb",
            backgroundColor: isComplete ? "#f0fdf4" : "#2563eb",
            color: isComplete ? "#16a34a" : "white",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            transition: "all 0.15s",
          }}
        >
          {isComplete ? "Completed" : "Mark as Complete"}
        </button>

        <div style={{ display: "flex", gap: 8 }}>
          {prevLesson && (
            <button
              onClick={() => navigate(`#/lesson/${prevLesson.id}`)}
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                backgroundColor: "white",
                color: "#374151",
                fontWeight: 500,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Previous
            </button>
          )}
          {nextLesson && (
            <button
              onClick={() => navigate(`#/lesson/${nextLesson.id}`)}
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                backgroundColor: "white",
                color: "#374151",
                fontWeight: 500,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Next Lesson
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Reference() {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <h1
        style={{
          fontSize: 32,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 8,
        }}
      >
        Claude Code Reference
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "#6b7280",
          marginBottom: 40,
          lineHeight: 1.6,
        }}
      >
        Everything you need to know about Claude Code — commands, workflows, and
        techniques to build faster.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {CLAUDE_REFERENCE.map((cat) => {
          const isOpen = openCategory === cat.category;
          return (
            <div
              key={cat.category}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                overflow: "hidden",
                backgroundColor: "white",
              }}
            >
              <button
                onClick={() =>
                  setOpenCategory(isOpen ? null : cat.category)
                }
                style={{
                  width: "100%",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#111827",
                  }}
                >
                  {cat.category}
                </span>
                <span
                  style={{
                    color: "#9ca3af",
                    fontSize: 14,
                    transition: "transform 0.2s",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </button>

              {isOpen && (
                <div
                  style={{
                    borderTop: "1px solid #f3f4f6",
                    padding: "8px 24px 24px",
                  }}
                >
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        paddingTop: 20,
                        paddingBottom: 20,
                        borderBottom:
                          i < cat.items.length - 1
                            ? "1px solid #f3f4f6"
                            : "none",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          color: "#111827",
                          fontSize: 15,
                          marginBottom: 6,
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          fontSize: 14,
                          color: "#4b5563",
                          lineHeight: 1.7,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const { route, navigate } = useHashRouter();
  const { completed, toggleLesson, totalLessons, completedCount } =
    useProgress();

  const renderPage = () => {
    if (route.startsWith("#/lesson/")) {
      const lessonId = route.replace("#/lesson/", "");
      return (
        <LessonView
          lessonId={lessonId}
          navigate={navigate}
          completed={completed}
          toggleLesson={toggleLesson}
        />
      );
    }
    switch (route) {
      case "#/curriculum":
        return (
          <Curriculum
            navigate={navigate}
            completed={completed}
            toggleLesson={toggleLesson}
          />
        );
      case "#/reference":
        return <Reference />;
      default:
        return (
          <Dashboard
            navigate={navigate}
            completedCount={completedCount}
            totalLessons={totalLessons}
            completed={completed}
          />
        );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        fontFamily:
          "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <Nav route={route} navigate={navigate} />
      {renderPage()}
    </div>
  );
}