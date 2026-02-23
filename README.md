## Questions & Answers

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### Answer:

    difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll ,

   *  We use getElementById to select only 1 unique element in a document or HTML.
      It give 1 element.
     
   *  We use getElementsByClassName to select element that have the same class name in  document or HTML.
      It give multiple elements in ann arr like object HTMLCollection.
     
   *  We use querySelector to select only 1 element in a document or HTML.
      It returns the first match on a CSS selector id, classname , tagname.
     
   *  We use querySelectorAll to select elements that match a CSS selector same id, same class , same tag.
      It give multiple elements like array NodeList.


### 2. How do you create and insert a new element into the DOM?
### Answer:

   *  1st i create an element using  "document.createElement"
      then append or appendChild it.


### 3. What is Event Bubbling? And how does it work?
### Answer:
   
   * Event bubbling is a process where an event starts from the target element and then automatically
     propagates upside through its parent elements up to the document.

     ![Event bubbling](./img/Event-bubbling.png)

   * When an event is triggered on a child element it runs on that element first and then bubbles upside
     step by step to its parent, grandparent and up to the document.
 


### 4. What is Event Delegation in JavaScript? Why is it useful?
### Answer:
   
   * Event Delegation in JavaScript where we add a 1 event listener to a parent element
     to handle events for its all child elements.
     
   *  It is useful because it improves code and works for dynamically adds elements.


### 5. What is the difference between preventDefault() and stopPropagation() methods?
### Answer:
   
   * The difference between preventDefault() and stopPropagation() methods is
   
   *  preventDefault() stops by default action (Form submission , link navigation).
     
   *  while stopPropagation() stops the event from bubbling upside through its parent elements up to the document.
