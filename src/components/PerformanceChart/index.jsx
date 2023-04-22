import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
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
        <RadarChart
          width={258}
          height={258}
          cx="50%"
          cy="50%"
          outerRadius={80}
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
      )}
    </ChartContainer>
  )
}

/////*   Style   */////

const ChartContainer = styled.div`
  background-color: #282d30;
  border-radius: 5px;
  #radar g.recharts-polar-angle-axis {
    transform: scaleY(1.08) scaleX(0.93);
    transform-origin: center;
  }
`

export default PerformanceChart
