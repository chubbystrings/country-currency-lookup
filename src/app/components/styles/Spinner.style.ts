import styled from 'styled-components'

interface SPINNERPROPS {
    width?: string;
    height?: string;
    color?: string;
}

export const SpinLoader = styled.div`
  border-radius: 50%;
  width: ${ (props: SPINNERPROPS) => props.width ? props.width + 'px' : '40px'};
  height: ${ (props) => props.height ? props.height + 'px' : '40px'};
  display: block;
  border: 3px solid transparent;
  border-top-color:  ${ (props) => props.color ? props.color  : '#5ae4ca'};
  animation: spin 1s ease infinite;
  position: absolute;
  right: calc(40% - 60px );
  top: 1.2rem;

  @media screen and (min-width: 930px) {
    right: calc(20% - 30px );
  }

  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }
`;