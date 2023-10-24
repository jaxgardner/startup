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
## What does the following line of Javascript do using a # selector?
## Which of the following are true? (mark all that are true about the DOM)
## By default, the HTML span element has a default CSS display property value of: 
  inline
## How would you use CSS to change all the div elements to have a background color of red?
  div { background-color: #yourColor; }
## How would you display an image with a hyperlink in HTML?
  <a href="https://www.example.com"> <img src="image.jpg" alt="Description of the image"> </a>
## In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Content: This is the innermost layer of the box and contains the actual content of the element, such as text or images. The content area is defined by the width and height properties.
Padding: The padding is the space between the content and the border. It can be controlled using the padding property. Padding is important for creating space around the content.
Border: The border is a visible or invisible boundary that surrounds the padding and content. It can be styled using properties like border-width, border-style, and border-color. The border separates the content from the margin.
Margin: The margin is the outermost layer of the box model and creates space around the border. It can be controlled using the margin property. Margins are used to control the spacing between elements on the page.

## Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
## What will the following code output when executed using a for loop and console.log?
## How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
	Let element = document.getElementById(“byu”)
	Element.style.color = “green”
## What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
	<p> - <ol><li> - <ul><li> - <h2> - <h1> - <h3>
## How do you declare the document type to be html?
<!DOCTYPE html>
## What is valid javascript syntax for if, else, for, while, switch statements?
switch (expression) { 
case value1: // Code to execute if expression equals value1 
break; 
case value2: // Code to execute if expression equals value2 break; // ... 
default: 
	}

## What is the correct syntax for creating a javascript object?
Const myObject = {
	Property1: ‘value’,
	Property2: ‘value’,
}
## Is it possible to add new properties to javascript objects?
  Yes, myObject.newProperty = ‘new value’;
## If you want to include JavaScript on an HTML page, which tag do you use?
  <script></script>
## Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?  
## Which of the following correctly describes JSON?
	-Javascript Object notation:
	-based on key-value pairs
## What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
	chmod: Changes file permissions. You can use it to modify the read, write, and execute permissions for files and directories.
	pwd: Prints the current working directory. It shows you the full path to your current location in the file system.
	cd: Changes the current directory. You can use it to navigate the file system and move to different directories.
	ls: Lists the contents of a directory. It displays files and subdirectories in the current directory.
	vim: Opens the Vim text editor. Vim is a powerful, terminal-based text editor used for editing files in the console.
	nano: Opens the Nano text editor. Nano is a simple and user-friendly terminal-based text editor.
	mkdir: Creates a new directory. You can use it to make new folders in your file system.
	mv: Moves or renames files and directories. It's used to change the name or location of a file or directory.
	rm: Removes files and directories. It can delete files and directories, so use it with caution.
	man: Displays the manual or documentation for a command. You can look up how to use a command and its options.
	ssh: Initiates a secure shell connection to a remote server. It's used for remote command-line access.
	ps: Shows information about currently running processes. You can use it to view a list of active processes.
	wget: Downloads files from the internet. It's a command-line utility for retrieving data from web servers.
	sudo: Stands for "superuser do." It allows you to execute commands with administrative privileges.


## Which of the following console command creates a remote shell session?
	ssh -i myuser@192.168.1.100
## Which of the following is true when the -la parameter is specified for the ls console command?
	It lists all the files in the directory including the hidden ones.
	L = long format
	A = all
## Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
	TLD is the rightmost part of the domain
	RD is the second level domain
	SD is the next to the root domain
## Is a web certificate is necessary to use HTTPS.
	Yes, specifically an ssl/tls certificate. You must obtain it from a Certificate authority. 
## Can a DNS A record can point to an IP address or another A record.
	It can’t point directly to another A record. It is designed to point to an IPv4 record. You can set it up by having both A records point to the same IPv4.
## Port 443, 80, 22 is reserved for which protocol?
	443: Reserved for HTTPS
	80: Reserved for HTTP
	22: Reserved for SSH
## What will the following code using Promises output when executed?
		A promise states that it will be completed eventually. Here is an example:
