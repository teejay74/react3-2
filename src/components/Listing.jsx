import React from 'react'
import PropTypes from 'prop-types'
import { getPrice, getClassName, getDescription } from './Functions'

function Listing(props) {
  const items = props.data.map(item => {
    if (item.state !== 'active') {
      return null
    }
    return (
      <div className="item" key={item.listing_id}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} alt={item.title} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{getDescription(item.title)}</p>
          <p className="item-price">{getPrice(item.currency_code, item.price)}</p>
          <p className={getClassName(item.quantity)}>{item.quantity} left</p>
        </div>
      </div>
    )
  })

  return <div className="item-list">{items}</div>
}

Listing.defaultProps = {
  data: [],
}

Listing.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

export default Listing