//please work
var MenuItems = React.createClass({
  render:function() {
    return (
      <div className="menu-items">
        <List items={this.props.items}/>
      </div>
    )
  }
});
