import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 0 22% 0 29%;
`;
const ImgDiv = styled.div`
  display: inline-block;
  width: 50%;
  img {
    width: 7.5vw;
  }
`;

const TextDiv = styled.div`
  font-size: 1.5vw;
  display: inline-block;
  width: 50%;
`;

export const Data = props => {
  return (
    <div>
      <div className="row">
        <Div className="col-md-12">
          <ImgDiv className="col-md-6">
            <img src={props.image} />
          </ImgDiv>
          <TextDiv className="col-md-6 textSrc">
            <p>{props.text}</p>
          </TextDiv>
        </Div>
      </div>
    </div>
  );
};

export const Logo = props => {
  return (
    <div>
      <div className="row">
        <Div className="col-md-12">
          <TextDiv className="col-md-6">
            <p>{props.text}</p>
          </TextDiv>
          <ImgDiv className="col-md-6 imgSrc">
            <img className="image" src={props.image} />
          </ImgDiv>
        </Div>
      </div>
    </div>
  );
};
