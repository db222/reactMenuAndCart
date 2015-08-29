var Product = React.createClass({
  render : function() {
    return (
      <span key={this.props.item}>{this.props.item}</span>
    )
  }
});

var List = React.createClass({
  addToCart : function(item) {
    localStorage.setItem('fluc_'+item, JSON.stringify(item));
  },

  render: function(){
    var context = this;
    return (
      <ul>
      {
        this.props.items.map(function(menuItem) {
          return ( 
            <li>
            {
              <Product item={menuItem}/>
            }
            </li>
          )
        })
       }
      </ul>
    )  
  }
});

