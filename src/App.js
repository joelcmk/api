import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      type: 'users'
    }
  }

  componentDidMount() {

    fetch(`https://jsonplaceholder.typicode.com/${this.state.type}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render() {
    var { isLoaded, items, type } = this.state;

    const handleType = (e, res) => {
      this.setState({
        type: res
      })
    }

    console.log(type)

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className="App">
          <ul>
            {type === 'users' && items.map(item => (
              <li key={item.id}>
                name: {item.name} | email: {item.email}
              </li>
            ))};
            {type === 'posts' && items.map(item => (
              <li>
                title: {item.title}
              </li>
            ))}
            {type === 'comments' && <h1>Comments</h1>}
          </ul>
          <div>
            <button onClick={(e) => handleType(e, 'users')}>Users</button>
            <button onClick={(e) => handleType(e, 'posts')}>Posts</button>
            <button onClick={(e) => handleType(e, 'comments')}>Comments</button>
          </div>
        </div>
      )
    }
  }

}

export default App;
