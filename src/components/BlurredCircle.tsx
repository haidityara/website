import styled from 'styled-components';

const BlurredCircle = styled.div<{
  top?: number | string;
  left?: number | string;
}>`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: #00ff19;
  border-top: $size * 2 dotted #00ff19;
  border-right: $size dotted #00ff19;
  border-bottom: $size * 2 dotted #00ff19;
  border-left: $size * 10 dotted #00ff19;
  filter: blur(700px);
  pointer-events: none;
  position: absolute;
  top: ${({ top }) => (Number.isInteger(top) ? `${top || 0}px` : top)};
  left: ${({ left }) => (Number.isInteger(left) ? `${left || 0}px` : left)};
`;

export default BlurredCircle;
