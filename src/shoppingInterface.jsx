var mockData = [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ];

var ShoppingInterface = React.createClass({
  getInitialState : function() {
    var existingCartItems = this.loadLocalStorage();

    return {
      menuItems: mockData,
      cartItems: existingCartItems
    };
  },

  handleSelectedMenuItem : function(item) {
    localStorage.setItem('fluc_'+ item, JSON.stringify(item));
    this.state.cartItems.push(item);
    this.setState({
      cartItems : this.state.cartItems
    });
  },

  loadLocalStorage : function() {
    var itemsPreviouslyInCart = [];
    for(var element in localStorage) {
      if(element.search('fluc_') !== -1) {
        itemsPreviouslyInCart.push(JSON.parse(localStorage[element]));
      }
    }
    return itemsPreviouslyInCart;
  },

  render : function() { 
    return (
      <div class='vendor-banner'>
        <div id='menu-container'>
          <MenuItems items={this.state.menuItems} menuItemSelected={this.handleSelectedMenuItem.bind(this)}/>
        </div>
        <div id='cart-container'>
          <Cart items={this.state.cartItems} />
        </div>
      </div>
    )
  }
});

React.render(<ShoppingInterface/>, document.getElementById('main-content'));