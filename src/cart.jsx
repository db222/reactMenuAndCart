var Cart = React.createClass({
  flucYeah: function() {
    window.alert("Fluc Yeah!");
  },

  render: function() {
    return (
      <div id='cart'>
        <h1>Cart!</h1>
        <List items={this.props.items}/>
        <p onClick={this.flucYeah}>Finished</p>
      </div>
    )
  }
});
