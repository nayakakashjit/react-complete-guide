import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props){
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
    this.lastPersonRef = React.createRef();
  }

  UNSAFE_componentWillMount(){
    console.log("[Persons.js] Inside componentWillMount()");
  }

  componentDidMount(){
    console.log("[Persons.js] Inside componentDidMount()");
    this.lastPersonRef.current.focus();
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    console.log("[UPDATE Persons.js] Inside componentWillReceiveProps()", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[UPDATE Persons.js] Inside shouldComponentUpdate()", nextProps, nextState);
    return nextProps.persons !== this.props.persons ||
          nextProps.changed !== this.props.changed ||
          nextProps.clicked !== this.props.clicked ||
          nextProps.isAuthenticated !== this.props.isAuthenticated;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState){
    console.log("[UPDATE Persons.js] Inside componentWillUpdate()", nextProps, nextState);
  }

  componentDidUpdate(){
    console.log("[UPDATE Persons.js] Inside componentDidUpdate()");
  }

  render(){
    console.log("[Persons.js] Inside render()");

    return this.props.persons.map((person, index) => {
        return <Person
          click={() => this.props.clicked(index)}
          ref={this.lastPersonRef} 
          name={person.name}
          position={index} 
          age={person.age}
          key={person.id}
          authenticated={this.props.isAuthenticated}
          changed={(event) => this.props.changed(event, person.id)} />
      });
    }
}
export default Persons;      


