import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import { getUserPerformance } from '../../utils/api/api'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

/**
 * @function PerformanceChart React component for user's performance
 *
 * @returns {JSX} Type of activity carried out in the form of a radar chart.
 */
function PerformanceChart() {
  const [userPerformance, setUserPerformance] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function callUserData() {
      try {
        const userPerformanceResponse = await getUserPerformance()
        setUserPerformance(userPerformanceResponse)
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
        <ResponsiveContainer>
          <RadarChart
            width={258}
            height={258}
            cx="50%"
            cy="50%"
            outerRadius={70}
            data={userPerformance.radarChartData}
          >
            <PolarGrid radialLines={false} stroke="#fff" />
            <PolarAngleAxis
              dataKey="activity"
              fontSize={11}
              fontWeight={500}
              stroke="#fff"
              tickLine={false}
              dy={4}
              dx={-3}
            />
            <PolarRadiusAxis
              domain={[0, 'dataMax + 20']}
              tick={false}
              axisLine={false}
              scale="auto"
              tickCount={5}
            />
            <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </ChartContainer>
  )
}

/////*   Style   */////

const ChartContainer = styled.div`
  width: 258px;
  height: 258px;
  background-color: #282d30;
  border-radius: 5px;
  @media screen and (max-width: 1320px) {
    width: max(210px, 18vw + 1em);
    height: max(210px, 18vw + 1em);
    .recharts-polar-angle-axis-tick-value {
      font-size: 8px;
    }
  }
`

export default PerformanceChart
