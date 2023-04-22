import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * @function InfosCard React component for user's keydata like calories and proteins count
 *
 * @param {string} imgSrc containing the url to the icon to display
 * @param {int} number to display on the card
 * @param {string} unit to display on the card (e.g. kCal)
 * @param {string} category to display on the card (e.g. Calories)
 *
 * @returns {JSX} Card with an icon and the count
 */
function InfosCard({ imgSrc, number, unit, category }) {
  return (
    <Card>
      <img src={imgSrc} alt={`${category} icon`} />
      <p>
        <span>
          {number}
          {unit}
        </span>
        <br />
        {category}
      </p>
    </Card>
  )
}

InfosCard.propTypes = {
  imgSrc: PropTypes.string,
  number: PropTypes.number,
  unit: PropTypes.string,
  category: PropTypes.string,
}

/////*   Style   */////

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

  @media screen and (max-width: 1320px) {
    flex-direction: column;
    align-items: center;
    padding: 8px;
    & img {
      width: max(52px, 4vw + 1em);
      height: max(52px, 4vw + 1em);
      margin: 0;
    }

    & p {
      font-size: 11px;
      text-align: center;
    }

    & span {
      font-size: 12px;
    }
  }
`

export default InfosCard
