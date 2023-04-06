import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ChartContainer = styled.div`
  position: relative;
  & .goalPercentage {
    position: absolute;
    top: calc(50% - 35px);
    left: calc(50% - 50px);
    z-index: 10;
    width: 100px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #74798c;
    & span {
      font-size: 26px;
      font-weight: 700;
      color: #282d30;
    }
  }
`

function TodayScoreChart({ stats }) {
  const statsArray = [stats]
  return (
    <ChartContainer>
      <p className="goalPercentage">
        <span>{`${
          statsArray[0].todayScore
            ? statsArray[0].todayScore * 100
            : statsArray[0].score * 100
        }%`}</span>
        <br />
        de votre objectif
      </p>
      <RadialBarChart
        width={280}
        height={280}
        cx="50%"
        cy="50%"
        innerRadius="66%"
        barSize={10}
        data={statsArray}
        startAngle={90}
        endAngle={450}
      >
        <text x={30} y={44} fill="#20253A" textAnchor="start">
          <tspan fontSize="15" fontWeight={500}>
            Score
          </tspan>
        </text>
        <RadialBar
          dataKey="todayScore"
          clockWise={true}
          fill="#FF0000"
          cornerRadius={5}
        />
        <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
      </RadialBarChart>
    </ChartContainer>
  )
}

TodayScoreChart.propTypes = {
  stats: PropTypes.object.isRequired,
}

TodayScoreChart.defaultProps = {
  stats: {},
}

export default TodayScoreChart
