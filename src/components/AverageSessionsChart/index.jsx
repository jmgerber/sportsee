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
      {isLoading ? (
        'Loading...'
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={258}
            height={263}
            data={userAverageSessions.lineChartData}
          >
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
  background-color: #ff0000;
  border-radius: 5px;
`

export default AverageSessionsChart
