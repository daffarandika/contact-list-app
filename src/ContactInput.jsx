import React from 'react'

export default class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tag: ''
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.onNameChangedHandler = this.onNameChangedHandler.bind(this)
    this.onTagChangedHandler = this.onTagChangedHandler.bind(this)

  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  onNameChangedHandler() {
    this.setState(() => {
      return {
        name: event.target.value
      }
    })
  }

  onTagChangedHandler() {
    this.setState(() => {
      return {
        tag: event.target.value
      }
    })
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitHandler}>
        <input type="text" id="name" placeholder="Nama" 
          value={this.state.name} onChange={this.onNameChangedHandler}/>
        <input type="text" id="tag" placeholder="Tag" 
          value={this.state.tag} onChange={this.onTagChangedHandler}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
