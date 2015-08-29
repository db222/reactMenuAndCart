var Product = React.createClass({
  handleClick : function(item) {
    var addItem = { name: item.name,
                    price: item.price,
                    quantity: 1 }
    this.props.itemSelected(addItem)
  },

  render : function() {
    var price = '$' + this.props.item.price.toFixed(2);
    var item = this.props.item;
    var quantityDisplay;
    if(item.quantity) {
          quantityDisplay = <span className='item-quantity'>{item.quantity}</span>
    }

    var descriptionDisplay;
    if(item.description) {
      descriptionDisplay = <span className='item-description'>{item.description}</span>
    }
    return ( 
      <span className='item-container container' onClick={this.handleClick.bind(this, this.props.item)}>
        <span className='item-title'>{item.name}</span>
        <span className='item-price'>{price}</span>
        {quantityDisplay}
        {descriptionDisplay}
      </span>
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
              <Product key={menuItem.name} item={menuItem} itemSelected={context.props.clickHandler}/>
            }
            </li>
          )
        })
       }
      </ul>
    )  
  }
});

