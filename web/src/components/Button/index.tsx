import React, { useState } from 'react';

import { Container } from './styles';

export interface Props {
  active?: boolean;

}

const Button: React.FC<Props> = () => {

  const [active, setActive ] = useState(false);

  function handleClick() {
    if (active === false) {
      setActive (true);
    } else {
      setActive (false);
    }
  }

  return <Container active={active} onClick={handleClick}/>;
}

export default Button;