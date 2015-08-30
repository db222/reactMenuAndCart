var mockData = [
        {name : "Apples",      price : 2.25,  quantity : 0, description: 'Delicious apples....'},
        {name : "Mushrooms",   price : 2.50,  quantity : 0, description: 'Delicious mushrooms....'},
        {name : "Chicken",     price : 4.00,  quantity : 0, description: 'A delicious chicken....'},
        {name : "Duck",        price : 8.00,  quantity : 0, description: 'A delicious oven roasted duck....'},
        {name : "Eggs",        price : 3.00,  quantity : 0, description: 'Delicious eggs any style....'},
        {name : "Salmon",      price : 11.00, quantity : 0, description: 'Delicious salmon....'},
        {name : "Bread",       price : 1.25,  quantity : 0, description: 'Some delicious bread....'},
        {name : "Hash Browns", price : 3.20,  quantity : 0, description: 'Delicious hash browns....'},
        {name : "Egg Roll",    price : 1.15,  quantity : 0, description: 'A delicious egg roll....'},
        {name : "Venison",     price : 12.00, quantity : 0, description: 'Delicious venison....'},
        {name : "Gator",       price : 13.14, quantity : 0, description: 'Delicious gator....'},
        {name : "Bear",        price : 15.14, quantity : 0, description: 'Delicious bear....'},
      ];

//parent React component over the menu, cart, and register
var ShoppingInterface = React.createClass({
  getInitialState : function() {
    //pull any items that might have been in a previous visit to the site
    var existingCartItems = this.loadLocalStorage();
    //sets the initial stat with a menu and a cart filled with localStorage menu item
    return {
      menuItems: mockData,
      cartItems: existingCartItems
    };
  },

  //handles updating the cart cache 
  addToCart : function(item) {
    if(this.state.cartItems.hasOwnProperty(item.name)) {
      this.state.cartItems[item.name].quantity += item.quantity;
    } 
    else {
      this.state.cartItems[item.name] = item;
    }

    this.setState({
      cartItems : this.state.cartItems
    });
  },

  //handles removing an item from the cart cache
  removeFromCart : function(item) {
    this.state.cartItems[item.name].quantity -= 1;
    var remain = this.state.cartItems[item.name].quantity;
    if(remain <= 0) {
      delete this.state.cartItems[item.name]
    }

    this.setState({
      cartItems : this.state.cartItems
    });

    return remain;
  },

  //updates the cart cache and local storage to reflect added item from menu
  handleSelectedMenuItem : function(item) {
    this.addToCart(item);
    localStorage.setItem('fluc_'+ item.name, JSON.stringify(this.state.cartItems[item.name]));
  },

  //updates the cart cache and local storage to reflect removed item from cart
  handleSelectedCartItem : function(item) {
    console.log(item);
    if(this.removeFromCart(item) <= 0) {
      localStorage.removeItem('fluc_' + item.name);
    }
  },

  //helper for creating the cache based off the local storage when page loads
  loadLocalStorage : function() {
    var itemsPreviouslyInCart = {};
    for(var element in localStorage) {
      if(element.search('fluc_') !== -1) { // check to see if its an item of ours
        var item = JSON.parse(localStorage[element]);
        itemsPreviouslyInCart[item.name] = item;
      }
    }
    return itemsPreviouslyInCart;
  },

  //renders the shopping interface and the children of it (menu,cart,register)
  render : function() {
    var cartItems = [];
    for(var i in this.state.cartItems) {
      cartItems.push(this.state.cartItems[i]);
    }
    return (
      <div className='shopInterface-container'>
        <div id='menu-container'>
          <MenuItems items={this.state.menuItems} menuItemSelected={this.handleSelectedMenuItem.bind(this)}/>
        </div>
        <div id='cart-container'>
          <Cart items={cartItems} itemSelected={this.handleSelectedCartItem.bind(this)}/>
          <Register items={cartItems} tax={.0982} />
        </div>
      </div>
    )
  }
});

//create the shop interface and render it to the dom element with the id of 'main-content'
React.render(<ShoppingInterface/>, document.getElementById('main-content'));