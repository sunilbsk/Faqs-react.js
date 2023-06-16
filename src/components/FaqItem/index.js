import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  toggleButtonImage = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderActiveButton = () => {
    const {isActive} = this.state

    const imageUrl = !isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

    const altText = !isActive ? 'plus' : 'minus'

    return (
      <div>
        <button
          type="button"
          className="button"
          onClick={this.toggleButtonImage}
        >
          <img src={imageUrl} alt={altText} className="image" />
        </button>
      </div>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="faq-question">{questionText}</h1>
          {this.renderActiveButton()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
