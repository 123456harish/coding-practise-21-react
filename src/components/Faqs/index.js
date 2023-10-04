import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg">
      <div className="container">
        <h1 className="main-heading">FAQs</h1>
        <ul className="card">
          {faqsList.map(each => (
            <FaqItem key={each.id} faqDetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
