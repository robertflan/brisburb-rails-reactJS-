var AllItems = React.createClass({
	getInitialState(){
		return { items: [] }
	},
	componentDidMount(){
		console.log('Component mounted');
		$.getJson('/api/vi/items.json', (response) => {this. setstate({ items:response })});
	},
	render(){
		return(
			<div>
				<h1>All items component</h1>
			</div>
		)
	}
})