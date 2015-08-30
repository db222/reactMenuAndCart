// react component for displaying the menu items
var MenuItems = React.createClass({
  render:function() {
    return (
      <div className="menu-items container">
        <div className='container container-header'>Restaurant Menu</div>
        <List items={this.props.items} clickHandler={this.props.menuItemSelected}/>
      </div>
    )
  }
});
