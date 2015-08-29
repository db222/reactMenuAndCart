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
    return {
      menuItems: mockData
    };
  },

  render : function() {
    console.log(this.state.menuItems);
    return (
      <div class='vendor-banner'>
        <div id='menu-container'>
          <MenuItems items={this.state.menuItems} />
        </div>
        <div id='cart-container'>
          <Cart/>
        </div>
      </div>
    )
  }
});

React.render(<ShoppingInterface/>, document.getElementById('main-content'));