import styled from "styled-components";
import { ButtonStyled, LinkStyled } from "../../constans/GlobalStyles";
import Hamburger from "../../assets/hamburger.svg";
import Cross from "../../assets/cross.svg";
import Arrow from "../../assets/arrow-down.svg";

export const NavbarStyled = styled.nav`
  /* background-color: var(--clr-pink); */
  width: 100%;
  background: linear-gradient(to right, #a14a76, #a2557c, #f19143);
`;

export const NavbarMaxWidthWrapper = styled.div`
  margin-inline: auto;
  max-width: var(--max-vw);
  display: flex;
  align-items: center;
  position: relative;
`;

export const NavbarListWrapper = styled.div`
  background: linear-gradient(to bottom, #a14a76, #a2557c, #f19143);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100%;
  left: ${({ sidebar }) => (sidebar ? 0 : "-100%")};
  transition: all 0.3s ease-out;
  border-radius: 0 0 15px 0;
  @media only screen and (min-width: 800px) {
    & {
      background: none;
      border-radius: 0;
      position: static;
      flex-direction: row;
      justify-content: space-between;
      flex-grow: 1;
    }
  }
`;

export const NavbarLogo = styled.img`
  margin-inline: 0.5rem;
  width: 220px;
  object-fit: contain;
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  @media only screen and (min-width: 800px) {
    & {
      flex-direction: row;
    }
  }
`;

export const NavbarDropdownList = styled.ul`
  z-index: 10;
  display: ${({ dropdown }) => (dropdown ? "block" : "none")};
  padding: 0.5rem;
  list-style: none;
  position: absolute;
  top: 0;
  left: 100%;
  border-radius: 0 10px 10px 10px;
  background-color: var(--clr-red-light);
  @media only screen and (min-width: 800px) {
    & {
      border-radius: 0 0 10px 10px;
      left: 0;
      top: 100%;
    }
  }
`;

export const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  position: ${({ dropdown }) => (dropdown ? "relative" : "static")};
`;

export const NavbarItemWithDropdown = styled.div`
  font-size: clamp(0.8rem, 0.6737rem + 0.5614vw, 1.2rem);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover svg {
    transform: scale(1.25);
    fill: var(--clr-yellow-light);
  }
`;

export const NavbarSubitem = styled.li`
  transition: all 0.3 ease-in;
  &:hover {
    background-color: var(--clr-orange-light);
    border-radius: 10px;
  }
`;

export const NavbarLink = styled(LinkStyled)`
  color: white;
  padding: 1.5rem 2rem;
  transition: all 0.3s ease-in;
  &:hover {
    color: var(--clr-yellow);
  }
`;

export const NavbarSubLink = styled(NavbarLink)`
  padding: 1rem 2rem;
  &:hover {
    color: white;
  }
`;

export const NavbarButton = styled(ButtonStyled)`
  /* background-color: #6c98ff; */
`;

export const NavbarSidebarButton = styled.button`
  padding: 0.75rem;
  background: none;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  @media only screen and (min-width: 800px) {
    & {
      display: none;
    }
  }
`;

export const NavbarHamburger = styled(Hamburger)`
  width: 25px;
  fill: white;
`;
export const NavbarCross = styled(Cross)`
  width: 25px;
  fill: white;
`;

export const NavbarDropdownArrow = styled(Arrow)`
  width: 25px;
  fill: white;
  transition: all 0.2s ease-in;
`;