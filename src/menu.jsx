//please work
var MenuItems = React.createClass({
  getInitialState: function() {
    return {
      items: [
        "Apples",
        "Broccli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ]
    };
  },

  render:function() {
    return (
      <div className="filter-list">
        <List items={this.state.items}/>
      </div>
    )
  }
});

var List = React.createClass({
  addToCart : function(item) {
    console.log(item);
    localStorage.setItem('fluc_'+item, item);
  },

  render: function(){
    var context = this;
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item} onClick={context.addToCart.bind(this, item)}>{item}</li>
        })
       }
      </ul>
    )  
  }
});

React.render(<MenuItems/>, document.getElementById('main-content'));
