function maybe(e) {
  alert('storage event! woo woo!')
}

var Cart = React.createClass({
  getInitialState: function() {
    console.log('initial state!')
    return {
      items: []
    };
  },

  componentDidMount: function() {
    console.log('did mount');
    window.addEventListener('storage', maybe, false);
  },

  handleStorageChange: function(e) {
    console.log("did this happen?");
    if(!e) {
      e = window.event;
    }

    if(e.key && e.key.search('fluc_')) {
      if(e.newValue) {
        this.addItem(e.newValue);
      } else {
        this.removeItem(e.oldValue);
      }
    }
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
        <p onClick={this.flucYeah}>Finished</p>
      </div>
    )
  }
});

React.render(<Cart/>, document.getElementById('cart-container'));
