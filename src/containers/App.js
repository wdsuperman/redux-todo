import React, { Component } from 'react';
import styled from 'styled-components'
import TodoContainer from './TodoContainer';
import PostContainer from './PostContainer';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <TodoContainer />
        <PostContainer />
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  width:60%;
  margin:0 auto;
`
export default App;