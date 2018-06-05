import React, { Component } from 'react';

class PostList extends Component {
  complete = id => {
    this.props.complete(id)
  }
  completed =() => {
    this.props.completed()
  }
  active =() => {
    this.props.active()
  }
  render() {
    const { todo } = this.props
    console.log(todo)
    const todoList = todo.map(t => <div style={{textDecoration : t.complete === true ? 'line-through':''}} 
    onClick={ () => this.complete(t.id)} key={t.id}>{t.text}</div> )
    return (
      <div>
        {todoList}
        <span>{todoList.length} item left</span>
        <button>All</button>
        <button onClick={this.active}>Active</button>
        <button onClick={this.completed}>Completed</button>
      </div>
    );
  }
}

export default PostList;