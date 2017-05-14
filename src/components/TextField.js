import React from 'react';


// Again, this is a presentational component. It doesnt' manage state, and instead,
 // is used for rendering something to the page so we change the synatx a little.
const TextField = props => {
  return (
    <label>{props.label}
      <input
        type='text'
        name='consumed'
        value={props.content}
        onChange={props.handlerFunction}
      />
    </label>
  );
}

export default TextField;
