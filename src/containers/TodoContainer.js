import React from 'react'
import Todo from '../components/Todo';
import { connect } from 'react-redux'
import { addTodo } from '../action/index'
const TodoContainer = props => <Todo {...props}/>

const mapStateToProps = state => ({
  todo: state
})
export default connect(mapStateToProps,{addTodo})(TodoContainer)