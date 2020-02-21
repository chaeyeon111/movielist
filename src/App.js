import React, {Component} from 'react';
import Movies from './components/movies';
import './App.css';

class App extends Component {
  //rendering은 data를 html로 변환서 renderer에게 전달는 일관 작업
  render() {
    return (
      <main className="container">
        <Movies></Movies>
      </main>
        );
  }
}
export default App;
