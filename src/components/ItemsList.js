import React from 'react'
// We'll need a Link and the useRouteMatch hook from 'react-router-dom'
import { Link, useRouteMatch } from 'react-router-dom'

export default function ItemsList(props) {
  const { items } = props

  // url tells us where we are at (the current path in the URL bar in Chrome)
  // path tells us the "path template" that is currently matching the path in Chrome
  // We'll grab the current URL using the hook
  const { url, path } = useRouteMatch()

  console.log('url from the hook', url)
  console.log('path from the hook', path)

  return (
    <div className='items-list-wrapper'>
      {items.map(item => (
        <div
          className='item-card'
          key={item.id}
        >
          {/* 👉 STEP 6 - Link starts, navigates us from <current url> to <current url>/<id of the item> */}
          <Link to={`${url}/${item.id}`}>
            <img
              className='items-list-image'
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          </Link>
          {/* Link ends */}

          <p>${item.price}</p>
        </div>
      ))}
    </div>
  )
}
