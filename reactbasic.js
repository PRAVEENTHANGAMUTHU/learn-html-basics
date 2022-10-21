/* React
What is React?
•	React is the JavaScript Library for building User Interfaces created by Facebook on 29 May 2013.
•	It’s used to create single page applications.
•	It allows us to create reusable UI components.
•	It creates Virtual DOM in Memory.
•	React’s Local server port is ‘3000’.
React Lifecycle:
             Mounting  Updating  Un-Mounting
Types of Components:
•	Class Components
•	Functional Components
React Rendering:
          React DOM renders UI components directly on Body in HTML. 
React Requirements:
•	Git
•	Node.js
These two must be installed in our PC.
How to Create React App:
Step 1:
Open terminal and pass this command,
‘npx create-react-app myapp’
‘npx’ is used to get latest update in react.
The ‘create-react-app’ will setup everything what we need to run a react Application.
‘myapp’ is the React application name. (We can give any name whatever)
Step 2:
‘npm start’ this command is used to start react application.
By clicking ‘ctrl+c’ to terminate react application . 
Props:
     It’s used to pass data from one component to another as a parameter.
Events:
     Just like HTML DOM events, React can perform actions based on user events.
     Eg. ‘onClick()’
Conditionals:
     We already know about ‘if else, switch statement, ternary operator’. Same thing in React also.
Lists:
     Arrays is called as Lists in React.
Forms:
     Forms in React also similar from HTML. Usually forms data is handled by DOM in HTML. But in React, Forms data is handled by components.

Syntax:
    ‘ function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
} ’
Routers:
      In HTML, we link pages by using ‘<a href = “page-source”>Page Link<a/>’ (‘href’ stands for Hyper Text Reference). Router is used to link one component to another component. 
Hooks:
       Hooks were added to React in version 16.8. Hooks allows functional components to use State and other React features. Because of this, class components are generally no longer needed.
Rules of Hooks:
•	It only called or used inside the functional components.
•	Hooks only called or used in top of the component.
•	It’s can’t be conditional.
useState():
•	It’s one of the Hook’s feature. If we want to ‘ useState() ’ in component, We need to import it.
‘ import { useState } from "react"; ’
•	It’s used to change initial state’s value by using events.
useEffect():    
•	It’s also one of the Hook’s feature. It allows to perform side effects in the components.
•	It accepts two arguments. Second argument is optional.
Some examples of side effects:
•	Fetching data.
•	Directly updating the DOM.
•	Timers.
Some React’s technical things Abbreviations:
1.	NPM  ‘Node Package Manager’
2.	NPX  ‘Node Package Execute’
3.	API  ‘Application Programming Interface’
4.	DOM  ‘Document Object Model’
5.	href  ‘Hyper Text Reference’
6.	UI  ‘User Interface’
7.	UX  ‘User Experience’
8.	GIT  ‘Global Information Tracker’
9.	HTML  Hyper Text Markup Language
10.	CSS  Cascading Style Sheet
11.	ECMA  European Computer Manufacturers Association

Some Important Informations:
1.	Who is the father of HTML?
        ‘Tim Berners Lee’ in 1993
2.	What is the current version of HTML?
        HTML5
3.	Who is the father of JavaScript?
        ‘Brendan Eich’ in 1995
4.	What is the current version of CSS?
        CSS3
5.	What is the current version of JavaScript?
       ES6
6.	Who invented the React?
       ‘Jordan Walke’ in 2013
7.	What is the current version of React?
       ‘React 18’
8.	Who invents CSS?
        ‘Hakon Wium Lie’ in 1996
        

 */