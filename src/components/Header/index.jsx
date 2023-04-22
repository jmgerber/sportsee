import logo from '../../assets/logo.png'
import styled from 'styled-components'

/**
 * @function Header React component for the header
 *
 * @returns {JSX} Header with navigation buttons
 */
function Header() {
  return (
    <StyledHeader>
      <nav>
        <a href="/">
          <img className="mainLogo" src={logo} alt="Logo SportSee" />
        </a>
        <a href="/">Accueil</a>
        <a href="/">Profil</a>
        <a href="/">Réglages</a>
        <a href="/">Communauté</a>
      </nav>
    </StyledHeader>
  )
}

/////*   Style   */////

const StyledHeader = styled.header`
  background-color: #020203;
  height: 91px;
  color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  & nav {
    height: 100%;
    padding-inline: 28px 91px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    & .mainLogo {
      height: 60px;
    }
  }
`

export default Header
