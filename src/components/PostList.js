import React, { Component } from 'react';

class PostList extends Component {
  complete = id => {
    this.props.complete(id)
  }
  render() {
    const { todo } = this.props
    console.log(todo)
    const todoList = todo.map(t => <div style={{color : t.complete === true ? 'red':''}} 
    onClick={ () => this.complete(t.id)} key={t.id}>{t.text}</div> )
    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default PostList;