import './index.css'

const TabItem = props => {
  const {isactive, fun, tabDetails} = props
  const {tabId, displayText} = tabDetails

  const ontabclick = () => {
    fun(tabId)
  }

  const clases = isactive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        id="b"
        onClick={ontabclick}
        type="button"
        className={`tab-btn ${clases}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
