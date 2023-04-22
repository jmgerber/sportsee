import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useState, useEffect } from 'react'
import { getUserAverageSessions } from '../../utils/api/api'
import styled from 'styled-components'

/**
 * @function AverageSessionsChart React component for user's average sessions
 *
 * @returns {JSX} Statistics about sessions duration for the 7 last days in a line chart
 */
function AverageSessionsChart() {
  const [userAverageSessions, setUserAverageSessions] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function callUserData() {
      try {
        const userAverageSessionsDataResponse = await getUserAverageSessions()
        setUserAverageSessions(userAverageSessionsDataResponse)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    callUserData()
  }, [])

  return (
    <ChartContainer>
      <ChartTitle>Durée moyenne des sessions</ChartTitle>
      {isLoading ? (
        'Loading...'
      ) : (
        <ResponsiveContainer>
          <LineChart
            width={258}
            height={258}
            data={userAverageSessions.lineChartData}
          >
            <XAxis
              dataKey="day"
              strokeWidth={0}
              stroke="rgba(255,255,255,0.5)"
              padding={{ left: 20, right: 20 }}
            />
            <YAxis domain={['dataMin - 20', 'dataMax + 20']} hide={true} />
            <Tooltip
              cursor={false}
              wrapperStyle={{ outline: 'none' }}
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
              dataKey="length"
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
        </ResponsiveContainer>
      )}
    </ChartContainer>
  )
}

/////*   Style   */////

const ChartContainer = styled.div`
  position: relative;
  background-color: #ff0000;
  border-radius: 5px;
  width: 258px;
  height: 258px;
  @media screen and (max-width: 1320px) {
    width: max(210px, 18vw + 1em);
    height: max(210px, 18vw + 1em);
  }
`

const ChartTitle = styled.div`
  width: 60%;
  word-wrap: break-word;
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  top: 6%;
  left: 12%;
  @media screen and (max-width: 1320px) {
    font-size: 12px;
  }
`

export default AverageSessionsChart
