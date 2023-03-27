import MeditationLogo from '../../assets/meditation_logo.png'
import SwimmingLogo from '../../assets/swimming_logo.png'
import BikeLogo from '../../assets/bike_logo.png'
import DumbellLogo from '../../assets/dumbell_logo.png'
import styled from 'styled-components'

const VerticalNavContainer = styled.nav`
  width: 117px;
  background-color: #020203;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  & .linkContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  & a {
    display: flex;
    background-color: #fff;
    width: 64px;
    height: 64px;
    border-radius: 6px;
    & img {
      margin: auto;
    }
  }
  & p {
    position: relative;
    top: 50px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    transform: rotate(-90deg);
  }
`

function VerticalNav() {
  return (
    <VerticalNavContainer>
      <div className="linkContainer">
        <a href="/">
          <img src={MeditationLogo} alt="Meditation logo" />
        </a>
        <a href="/">
          <img src={SwimmingLogo} alt="Swimming logo" />
        </a>
        <a href="/">
          <img src={BikeLogo} alt="Bike logo" />
        </a>
        <a href="/">
          <img src={DumbellLogo} alt="Dumbell logo" />
        </a>
      </div>
      <p>Copyright, SportSee 2020</p>
    </VerticalNavContainer>
  )
}

export default VerticalNav
