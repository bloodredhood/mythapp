import React from "react";
import { connect } from "react-redux";
import { createEssence, showAlert } from "../redux/actions";

class EssenceForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      pantheon: "",
      image: "",
      text: ""
    }
  }

  submitHandler = event => {
    event.preventDefault()
    const {name, pantheon, image, text} = this.state

    if (!name.trim() || !pantheon.trim() || !image.trim() || !text.trim()) {
      return this.props.showAlert('нужно заполнить все поля!')
    }

    const newEssence = {
      name, pantheon, image, text, id: Date.now().toString()
    }
    this.props.createEssence(newEssence)
    this.setState({
      name: "",
      pantheon: "",
      image: "",
      text: ""
    })
  }

  changeInputHandler = event => {
    event.persist()
    this.setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value,
      [event.target.pantheon]: event.target.value,
      [event.target.image]: event.target.value,
      [event.target.text]: event.target.value
    }}))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        
        {this.props.alert && <div>{this.props.alert}</div>}
        
        <div>
          имя
          <br/>
          <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.changeInputHandler}
          
          />
          <br/>
          пантеон
          <br/>
          <input
          type="text"
          value={this.state.pantheon}
          name="pantheon"
          onChange={this.changeInputHandler}
          
          />
          <br/>
          ссылка на изображение
          <br/>
          <input
          type="text"
          value={this.state.image}
          name="image"
          onChange={this.changeInputHandler}
          
          />
          <br/>
          описание
          <br/>
          <input
          type="text"
          value={this.state.text}
          name="text"
          onChange={this.changeInputHandler}
          
          />
        </div>
        <button type="submit">Создать</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

const mapDispatchToProps = {
  createEssence, showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(EssenceForm)