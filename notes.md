# **These are my notes for CS260**

## Github Notes
Today I learned a little about how to use Github from vscode. 
I learned about merge conflicts as well as how to resolve them.
I want to further my knowledge in using Git from the terminal.

### In the following code, what does the link element do?
  The <link> tag defines the relationship between the current document and an external resource. The <link> tag is most often used to link to external style sheets or to add a favicon to your website. The <link> element is an empty element, it contains attributes only.
### In the following code,  what does a div tag do?
  The <div> tag defines a division or a section in an HTML document. The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript. The <div> tag is easily styled by using the class or id attribute.
### In the following code, what is the difference between the #title and .grid selector?
	.selectors are for selecting the class of the html element. # are for selecting the id of the Html element. 
### In the following code, what is the difference between padding and margin?
	Padding represents the amount of inner space in an element. Margin represents the amount of whitespace around an element.
Given this HTML and this CSS how will the images be displayed using flex?
### What does the following padding CSS do?
### What does the following code using arrow syntax function declaration do?
### What does the following code using map with an array output?
### What does the following code output using getElementByID and addEventListener?
document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
### What does the following line of Javascript do using a # selector?
	That symbol is for selecting id's.
### Which of the following are true? (mark all that are true about the DOM)
#### The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

-The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering.

#### For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

#### Accessing the DOM
Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the document variable and walk through the every element in the tree.

function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

#### displayElement(document);
You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property.


#### Modifying the DOM
The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.


#### Injecting HTML
#### The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.


However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using innerHTML.

#### Event Listeners
All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.


There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on MDN. Here are a few of the more commonly used events.

Event Category	Description
Clipboard	Cut, copied, pasted
Focus	An element gets focus
Keyboard	Keys are pressed
Mouse	Click events
Text selection	When text is selected
You can also add event listeners directly in the HTML. For example, here is a onclick handler that is attached to a button.


### By default, the HTML span element has a default CSS display property value of: 
  inline
### How would you use CSS to change all the div elements to have a background color of red?
  div { background-color: #yourColor; }
### How would you display an image with a hyperlink in HTML?
  <a href="https://www.example.com"> <img src="image.jpg" alt="Description of the image"> </a>
### In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
- Content: This is the innermost layer of the box and contains the actual content of the element, such as text or images. The content area is defined by the width and height properties.
- Padding: The padding is the space between the content and the border. It can be controlled using the padding property. Padding is important for creating space around the content.
- Border: The border is a visible or invisible boundary that surrounds the padding and content. It can be styled using properties like border-width, border-style, and border-color. The border separates the content from the margin.
- Margin: The margin is the outermost layer of the box model and creates space around the border. It can be controlled using the margin property. Margins are used to control the spacing between elements on the page.

### Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
### What will the following code output when executed using a for loop and console.log?
### How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
	Let element = document.getElementById(“byu”)
	Element.style.color = “green”
### What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
	<p> - <ol><li> - <ul><li> - <h2> - <h1> - <h3>
### How do you declare the document type to be html?
<!DOCTYPE html>
### What is valid javascript syntax for if, else, for, while, switch statements?
switch (expression) { 
case value1: // Code to execute if expression equals value1 
break; 
case value2: // Code to execute if expression equals value2 break; // ... 
default: 
	}

### What is the correct syntax for creating a javascript object?
Const myObject = {
	Property1: ‘value’,
	Property2: ‘value’,
}
### Is it possible to add new properties to javascript objects?
  Yes, myObject.newProperty = ‘new value’;
### If you want to include JavaScript on an HTML page, which tag do you use?
  <script></script>
### Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?  
### Which of the following correctly describes JSON?
	-Javascript Object notation:
	-based on key-value pairs
### What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
- chmod: Changes file permissions. You can use it to modify the read, write, and execute permissions for files and directories.
- pwd: Prints the current working directory. It shows you the full path to your current location in the file system.
- cd: Changes the current directory. You can use it to navigate the file system and move to different directories.
- ls: Lists the contents of a directory. It displays files and subdirectories in the current directory.
- vim: Opens the Vim text editor. Vim is a powerful, terminal-based text editor used for editing files in the console.
- nano: Opens the Nano text editor. Nano is a simple and user-friendly terminal-based text editor.
- mkdir: Creates a new directory. You can use it to make new folders in your file system.
- mv: Moves or renames files and directories. It's used to change the name or location of a file or directory.
- rm: Removes files and directories. It can delete files and directories, so use it with caution.
- man: Displays the manual or documentation for a command. You can look up how to use a command and its options.
- ssh: Initiates a secure shell connection to a remote server. It's used for remote command-line access.
- ps: Shows information about currently running processes. You can use it to view a list of active processes.
- wget: Downloads files from the internet. It's a command-line utility for retrieving data from web servers.
- sudo: Stands for "superuser do." It allows you to execute commands with administrative privileges.

### Which of the following console command creates a remote shell session?
	ssh -i myuser@192.168.1.100
### Which of the following is true when the -la parameter is specified for the ls console command?
	It lists all the files in the directory including the hidden ones.
	L = long format
	A = all
### Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
	TLD is the rightmost part of the domain
	RD is the second level domain
	SD is the next to the root domain
### Is a web certificate is necessary to use HTTPS.
	Yes, specifically an ssl/tls certificate. You must obtain it from a Certificate authority. 
### Can a DNS A record can point to an IP address or another A record.
	It can’t point directly to another A record. It is designed to point to an IPv4 record. You can set it up by having both A records point to the same IPv4.
### Port 443, 80, 22 is reserved for which protocol?
	443: Reserved for HTTPS
	80: Reserved for HTTP
	22: Reserved for SSH
### What will the following code using Promises output when executed?
		A promise states that it will be completed eventually. Here is an example:


### What do HTTP status codes in the 300, 400, 500 range indicate?
Here's a brief overview of the HTTP status code classes:

1xx (Informational): Request received, continuing process.
2xx (Success): The request was successfully received, understood, and accepted.
3xx (Redirection): Further action needs to be taken to complete the request.
300 Multiple Choices
301 Moved Permanently
302 Found
304 Not Modified
4xx (Client Error): The request contains bad syntax or cannot be fulfilled by the server.
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
5xx (Server Error): The server failed to fulfill a valid request.
500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable

### What does the HTTP header content-type allows you to do?
The Content-Type HTTP header is used to indicate the media type (or MIME type) of the resource sent in the HTTP message body

### What do the following attributes of a cookie do?
#### Domain
	The Domain attribute specifies the domain for which the cookie is valid. The browser will only send the cookie back to the server if the current domain matches the domain specified in the cookie.
##### Path
	The Path attribute limits the scope of the cookie to a specific path on the domain. The cookie will only be sent to the server if the path in the request URL matches or is a subdirectory of the path specified in the cookie.
#### SameSite
	The SameSite attribute helps prevent cross-site request forgery attacks by restricting when the browser sends cookies with cross-site requests. It can have three values: "Strict," "Lax," or "None."
#### HTTPOnly
	The HTTPOnly attribute is a security feature that helps prevent client-side scripts from accessing the cookie through the document.cookie API. This reduces the risk of cross-site scripting (XSS) attacks.

### Given the following MongoDB query

{ cost: { $gt: 10 }, name: /fran.*/}
select all of the matching documents.
	This part of the query filters documents where the value of the "cost" field is greater than ($gt stands for "greater than") 10.
	This part of the query filters documents where the value of the "name" field matches the regular expression /fran.*/. The regular expression /fran.*/ specifies that the "name" field should start with "fran" followed by zero or more characters (.* matches any character zero or more times).

 ### How should you store user passwords in a database?
 - Use hash functions
 - Salt passwords
 - Key stretching

### What is the WebSocket protocol used for?
The WebSocket protocol is a communication protocol that provides full-duplex communication channels over a single, long-lived connection.

### What is JSX and how are the curly braces rendered?
	In summary, JSX is a syntax extension that allows you to write HTML-like code in JavaScript, particularly in the context of React. Curly braces within JSX are used to embed JavaScript expressions, enabling dynamic content and logic in the markup. 

 ### What are React Hooks used for?
React Hooks are functions introduced in React 16.8 that allow developers to use state and lifecycle features in functional components. useState: Allows functional components to have local state. It takes an initial state as an argument and returns an array with two elements: the current state value and a function to update it.

### What does useEffect do? 
The useEffect hook in React is used to perform side effects in functional components. Side effects in this context refer to any code that needs to execute after the component renders, such as data fetching, subscriptions, manual DOM manipulations, and more. It is a replacement for lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components

### What role does npm play in web development?
npm (Node Package Manager) is a package manager for JavaScript, primarily used for managing and sharing packages (libraries, tools, and frameworks) for Node.js. However, its role extends beyond just Node.js, as it has become a crucial tool in web development ecosystems.

### What does package.json do in a npm project?
It serves several important purposes, providing metadata about the project, specifying project dependencies, and defining scripts for various tasks.

### What does the fetch function do?
The fetch function is a modern JavaScript API that provides an easy and flexible way to make HTTP requests.

### What does node.js do?
Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute server-side JavaScript code. 

### What does Vite do?
Vite is a build tool and development server for modern web development projects. It is designed to optimize the development experience and improve the build performance for frontend applications, particularly those using frameworks like Vue.js and React. Vite stands for "Vite Is a Toolkit for Efficient Development."



	
