import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ChartContainer = styled.div`
  background-color: #282d30;
  border-radius: 5px;
`

function PerformanceChart({ userPerformance }) {
  const getKind = (kindData) => {
    return userPerformance.kind[kindData.kind]
  }

  return (
    <ChartContainer>
      <RadarChart
        width={280}
        height={280}
        cx="50%"
        cy="50%"
        outerRadius={80}
        data={userPerformance.data}
      >
        <PolarGrid radialLines={false} strokeWidth={1} stroke="#fff" />
        <PolarAngleAxis
          dataKey={getKind}
          fontSize={12}
          fontWeight={500}
          stroke="#fff"
          tickLine={false}
        />
        <PolarRadiusAxis
          domain={[0, 'dataMax + 20']}
          tick={false}
          strokeWidth={0}
        />
        <Radar name="Karl" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ChartContainer>
  )
}

PerformanceChart.propTypes = {
  userPerformance: PropTypes.object.isRequired,
}

PerformanceChart.defaultProps = {
  userPerformance: {},
}

export default PerformanceChart
