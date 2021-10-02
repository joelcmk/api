import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      type: ''
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
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
            {items.map(item => (
              <li key={item.id}>
                name: {item.name} | email: {item.email}
              </li>
            ))};
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
