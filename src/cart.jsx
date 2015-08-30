//react component handles rendering what the cart contains
var Cart = React.createClass({
  render: function() {
    return (
      <div id='cart' className='container'>
        <div className='container-header'> Cart </div>
        <List items={this.props.items} clickHandler={this.props.itemSelected}/>
      </div>
    )
  }
});
