var Product = React.createClass({
  handleClick : function(item) {
    this.props.itemSelected(item)
  },

  render : function() {
    return (
      <span key={this.props.item} onClick={this.handleClick.bind(this, this.props.item)}>{this.props.item}</span>
    )
  }
});

var List = React.createClass({
  render: function(){
    var context = this;
    return (
      <ul>
      {
        this.props.items.map(function(menuItem) {
          return ( 
            <li>
            {
              <Product item={menuItem} itemSelected={context.props.clickHandler}/>
            }
            </li>
          )
        })
       }
      </ul>
    )  
  }
});

