import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ChartContainer = styled.div`
  background-color: #ff0000;
  border-radius: 5px;
`

function AverageSessionsChart({ averageSessions }) {
  return (
    <ChartContainer>
      <LineChart width={280} height={280} data={averageSessions}>
        <text x={30} y={30} fill="rgba(255,255,255,0.5)">
          <tspan fontSize="15" fontWeight={500}>
            Durée moyenne des sessions
          </tspan>
        </text>
        <XAxis
          dataKey="day"
          strokeWidth={0}
          stroke="rgba(255,255,255,0.5)"
          padding={{ left: 20, right: 20 }}
        />
        <YAxis domain={['dataMin - 20', 'dataMax + 20']} hide={true} />
        <Tooltip
          cursor={false}
          contentStyle={{
            backgroundColor: '#fff',
            border: 'none',
          }}
          itemStyle={{
            color: '#000',
            textAlign: 'center',
            fontSize: '9px',
            fontWeight: '500',
          }}
          labelFormatter={() => ''}
          formatter={(value) => [`${value} min`, undefined]}
        />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#fff"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: 'rgba(255, 255, 255, 0.3)',
            fill: '#fff',
            strokeWidth: 5,
            r: 4,
          }}
        />
      </LineChart>
    </ChartContainer>
  )
}

AverageSessionsChart.propTypes = {
  averageSessions: PropTypes.array.isRequired,
}

AverageSessionsChart.defaultProps = {
  averageSessions: [],
}

export default AverageSessionsChart
