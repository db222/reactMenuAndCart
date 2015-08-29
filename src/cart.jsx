var Cart = React.createClass({
  flucYeah: function() {
    window.alert("Fluc Yeah!");
  },

  render: function() {
    return (
      <div id='cart' className='container'>
        <div className='container-header'> Cart </div>
        <List items={this.props.items}/>
        <button className='submit-button' type="button" onClick={this.flucYeah}>Finished</button>
      </div>
    )
  }
});
