import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
width: 9.3%;
text-align: center;
text-decoration: none;
margin: 2vw;
color: #9fa8af;;
a {
    color: #909aa3;
}
a:focus {
    color: #606f7b;
    border-bottom: 2px solid #606f7b;
    background-color: transparent !important;
}
a:hover {
    background-color: transparent !important;
}
`;