import React from 'react';

// keep in mind, if we have multiple React fragments (bits of JSX), that we
// need to make sure that each one has a unique idea so that React can track it
const ItemsList = props => {
  let items = props.items.map(item => {
    return(
      <li key={Math.random()}>
        {item.name}
      </li>
    )
  });

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}

export default ItemsList;
