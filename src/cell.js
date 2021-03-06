// ✓ is a correctly defined and exported React component which renders a <div> with a className of 'cell'
// ✓ has a state key of 'color'
// ✓ state.color is initially set to the 'value' prop passed from Matrix
// ✓ has an event listener for clicks on the <div> (don't forget: 'onClick' in React!)
// ✓ has an event listener that, when clicked, calls this.setState() once (make sure you aren't setting state directly, but instead using the component's 'setState' method)
// ✓ has an event listener that, when clicked, sets state's 'color' key to a value of '#333'
// ✓ sets the <div>'s inline style attribute to 'style={{backgroundColor: this.state.color}}'
//
//
// '

import React, {Component} from 'react';

 class Cell extends Component{
   constructor(props) {
      super(props)
      this.state = {
        color: this.props.value
      }
    }
     changeColor = () => {
      this.setState({
        color: '#333'
      })
    }
     render() {
      return (
        <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}}>
        </div>
      )
    }
   }
   export default Cell;
