import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledLink = styled(Link)`
  ${tw`block text-white text-sm`} text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
