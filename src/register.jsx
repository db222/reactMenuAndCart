//the component handles calculating the totals cost of purchase, and displaying thoses totals
var Register = React.createClass({
            flucYeah: function() {
    window.alert("Fluc Yeah!");
  },

  render : function() {
      //use reduce to calculate subtotal
      var subtotal = this.props.items.reduce(function(previousCost, currentItem) {
          return previousCost + currentItem.price * currentItem.quantity;
        }, 0);
      //create total
      var total = this.props.tax * subtotal + subtotal;
    return (
      <div id='register-container'>
        <span className='subtotal'><p>{'$' + subtotal.toFixed(2)}</p></span>
        <span className='tax'><p>{(this.props.tax * 100).toFixed(2) + '%'}</p></span>
        <span className='subtotal'><p>{'$' + total.toFixed(2)}</p></span>
        <button className='submit-button' type="button" onClick={this.flucYeah}>Finished</button>
      </div>
    )
  }
});
