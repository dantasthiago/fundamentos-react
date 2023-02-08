import { cloneElement } from 'react';

const Familia = (props) => {
  console.log(props);
	return (
		<div>
      {props.children.map((child, i) => {
        return cloneElement(child, {...props, key: i})
      })}

		</div>
	);
};

export default Familia;
