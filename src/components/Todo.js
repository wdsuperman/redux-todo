import React, { Component } from 'react';
import styled from 'styled-components'


class Todo extends Component {
  state={
    text:''
  }
  TodoChange=e=>{
    this.setState({
      text:e.target.value
    })
  }
  addTodo = () => {
    this.props.addTodo(this.state.text)
    this.setState({
      text:''
    })
  }
  render() {
    return (
      <div>
        <Wrapper>
          <h1>
            TODOS
          </h1>
          <div>
            <input onChange={this.TodoChange} value={this.state.text} type="text" placeholder="What needs to be done?"/>
            {/* <input keypress={this.addTodo} onChange={this.TodoChange} value={this.state.text} type="text" placeholder="What needs to be done?"/> */}
            <button onClick={this.addTodo}>ADD</button>
          </div>
        </Wrapper>
      </div>
    );
  }
}
const Wrapper = styled.div`
  margin: 30px auto;
  h1{
    text-align: center;
  }
  div>input{
    margin: 0 auto;
    height:60px;
    font-size:30px ;
    text-indent: 20px;
  }
`

export default Todo;