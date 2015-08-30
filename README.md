# react Basic Menu and Cart

**A implementation of a basic restaurant checkout system.

<ol> 
<li> Add and remove items to the cart </li>
<li> Push finish and message box pops open </li>

## To Run it

<ol>
  <li>enter the command "bower install" at the command line </li>
  <li>enter the command "npm install -g babel" at the command line</li>
  <li>enter the command "babel src/ --out-dir build/" at the command line</li>
  <li>the last command will convert the jsx files to js and put them in the build/ directory</li>
  <li>from here open the index.html in a browser and you're good to go</li>
  <li>click items in the menu area to add to the cart and click item from the cart to remove them</li>

# Explanation of code structure

Using reactJS I created 6 components. The ShoppingInterface is the parent of the entire hierarchy, it directly owns the menu, cart, and register components. The menu and cart each own their individual List component which is comprised of product components. 

 The Product component renders an individual item depending on the context of information it will display what is necessary. The product component also registers a method of its own to the event of the item being clicked upon. When this happens a it will invoke the callback given to it.

 The List component simply renders each item in its items list, by creating a list and rendering Product components within it. The List component passes along to the construction of each Product component a callback, which it received from its parent component.

 The Cart component displays the items it contains via the List component and constructs the List component with a callback used to remove an item from the cart.

 The Menu component displays the items it contains via the list component and constructs  the list component with a callback to add an item to the cart

 The Register component calculates the cost of the purchase and displays it

 The ShoppingInterface component renders the Cart, Menu, and Register components. It Constructs the Cart with a callback in order to remove item from the cart. It constructs the Menu with a callback in order to add items to the cart. When the ShoppingInterface first is constructed it will load any restaurant items from localstorage and put them in the cart. Whenever it handles removal from or adding to the cart it alters the cache for the cart according to the action and then updates the local storage.
