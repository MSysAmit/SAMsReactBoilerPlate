import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
&& {
    text-decoration: none;
    color: #333;
    font-size: 1.1vw;
  }
  &&:hover {
    color: #66bb6a;
  }
`;