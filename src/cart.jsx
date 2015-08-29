var Cart = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },

  loadLocalStorage: function() {
    var toAddToCart = [];
    for(var element in localStorage) {
      if(element.search('fluc_') !== -1) {
        var item = JSON.parse(localStorage[element]);
        toAddToCart.push(item);
      }
    }
    this.setState({
      items: toAddToCart
    });
  },

  componentWillMount: function() {
    this.loadLocalStorage();
  },

  addItem : function(item) {
    console.log(item + " in cart");
  },

  removeItem : function(item) {
  },

  flucYeah: function() {
    window.alert("Fluc Yeah!");
  },

  render: function() {
    return (
      <div id='cart'>
        <h1>Cart!</h1>
        <List items={this.state.items}/>
        <p onClick={this.flucYeah}>Finished</p>
      </div>
    )
  }
});
