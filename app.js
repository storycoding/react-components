//============================================//
//========== static React examples ===========//
//============================================//

var App = () => (
  	<div>
   		<h2>My Todo List</h2>
    	<TodoList todos={['Eat a whole pound of chocolate', 'Crush Recast.ly', 'Learn React']}/>
  	</div>
);

var TodoList = (props) => {

	var onListItemClick = (event) => {
    	console.log(props.todos[0]+ ': "that tickes!"');
 	};

 	var onListItemHover = (event) => {
    	console.log(props.todos[1]+ ': "leave me alone!"');
 	};

 	var onListItemMouseLeave = (event) => {
    	console.log(props.todos[2]+ ': "come back!"');
 	};

  	return (
  		<ul>
  			<li onClick={onListItemClick}>{props.todos[0]}</li>
    		<li onMouseOver={onListItemHover}>{props.todos[1]}</li>
    		<li onMouseLeave={onListItemMouseLeave}>{props.todos[2]}</li>
  		</ul>
  	);
	
};



var GroceryListApp = () => (
	<div>
   	 	<h2>My Grocery List</h2>
    	<GroceryList items={['milk chocolate', 'dark chocolate', 'fancy almond chocolate']}/>
  	</div>
);

// var	GroceryListItem = (props) => (
// 	<ul>
//     	<li>{props.items[0]}</li>
//     	<li>{props.items[1]}</li>
//     	<li>{props.items[2]}</li>
//   	</ul>
// );

//============================================//
//========= refactoring into class ===========//
//============================================//

//take in the props given by GroceryListApp
var GroceryList = (props) => (
	<ul>
   		{props.items.map(item =>
      <GroceryListItem item={item} />
    )}
   	</ul>
);

//instances created by the GroceryList chain, started at GroceryListApp

// class GroceryListItem extends React.Component {

// 	constructor(props) {
// 		super(props);
// 	}

// 	render () {
	
// 		return (
// 			<li>{this.props.item}</li>
// 		);
// 	}

// };


//============================================//
//============ setting states ================//
//============================================//


class GroceryListItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			done:false
		};
	}

	onListItemClick() {
    	this.setState({
      		done: !this.state.done
    	});
    	console.log("current state = " + this.state);
 	}


	render () {
	
		let style = {
			textDecoration: this.state.done ? 'line-through' : 'none',
			color: 'grey'
		}

		return (
			<li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
		);
	}

};

//============================================//
//================== startup =================//
//============================================//

ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<GroceryListApp />, document.getElementById("groceries"));

