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
  right: 50px;
  top: .9rem;


  @media screen and (min-width: 745px) {
    right: 155px;
  }

  @media screen and (min-width: 1200px) {
    right: 250px;
  }

  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }
`;

export const DotLoader = styled.small`
font-weight: bolder;
&:after {
  content: ' ...';
  animation: dots 1s steps(5, end) infinite;
}

@keyframes dots {
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;}}
`