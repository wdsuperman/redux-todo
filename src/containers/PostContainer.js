import React from 'react'
import PostList from '../components/PostList';
import { connect } from 'react-redux'
import { complete,completed,active } from '../action'
const PostContainer = props => <PostList {...props} />
const mapStateToProps = state => ({
  todo: state
})
export default connect(mapStateToProps,{complete,completed,active})(PostContainer)