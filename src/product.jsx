//displays individual menu items
var Product = React.createClass({
  // when the an product is clicked the given call back will allow parent component to react
  // to the event
  handleClick : function(item) {
    var addItem = { name: item.name,
                    price: item.price,
                    quantity: 1 }
    this.props.itemSelected(addItem)
  },

  render : function() {
    var price = '$' + this.props.item.price.toFixed(2);
    var item = this.props.item;
    var quantityDisplay; // if undefined in the return statement it will be ignored
    if(item.quantity) { //if there is a quantity create the span to render that quantity
          quantityDisplay = <span className='item-quantity'>{item.quantity}</span>
    }

    var descriptionDisplay; // if undefined in the return state it will be ignored
    if(item.description) { //if there is a description create the span to render that description
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

//react component displays list of products(menu items)
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

