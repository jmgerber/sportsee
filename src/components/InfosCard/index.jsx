import styled from 'styled-components'
import CaloriesIcon from '../../assets/calories-icon.png'
import ProteinIcon from '../../assets/protein-icon.png'
import CarbsIcon from '../../assets/carbs-icon.png'
import FatIcon from '../../assets/fat-icon.png'
import PropTypes from 'prop-types'

const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 32px;
`

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 32px;
  & img {
    width: 60px;
    height: 60px;
    margin-right: 24px;
  }

  & p {
    color: #74798c;
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
  }

  & span {
    color: #282d30;
    font-size: 20px;
    font-weight: 700;
  }
`

function InfosCard({ keyData }) {
  return (
    <CardSection>
      <Card>
        <img src={CaloriesIcon} alt="Icône de calories" />
        <p>
          <span>{keyData.calorieCount}kCal</span>
          <br />
          Calories
        </p>
      </Card>

      <Card>
        <img src={ProteinIcon} alt="Icône de protéines" />
        <p>
          <span>{keyData.proteinCount}g</span>
          <br />
          Protéines
        </p>
      </Card>

      <Card>
        <img src={CarbsIcon} alt="Icône de glucides" />
        <p>
          <span>{keyData.carbohydrateCount}g</span>
          <br />
          Glucides
        </p>
      </Card>

      <Card>
        <img src={FatIcon} alt="Icône de lipides" />
        <p>
          <span>{keyData.lipidCount}g</span>
          <br />
          Lipides
        </p>
      </Card>
    </CardSection>
  )
}

InfosCard.propTypes = {
  keyData: PropTypes.object.isRequired,
}

InfosCard.defaultProps = {
  averageSessions: {},
}

export default InfosCard
