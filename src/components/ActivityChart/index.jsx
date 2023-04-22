import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { useEffect, useState } from 'react'
import { getUserActivity } from '../../utils/api/api'
import styled from 'styled-components'

/**
 * @function ActivityChart React component for user's activity
 *
 * @returns {JSX} Statistics about calories and weight for the 7 last days in a bar chart
 */

function ActivityChart() {
  const [userActivity, setUserActivity] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function callUserData() {
      try {
        const userActivityDataResponse = await getUserActivity()
        setUserActivity(userActivityDataResponse.barChartData)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    callUserData()
  }, [])

  return (
    <ChartContainer>
      <ChartTitle>Activité quotidienne</ChartTitle>
      {isLoading ? (
        'Loading...'
      ) : (
        <BarChart
          width={835}
          height={300}
          data={userActivity}
          barGap={8}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4" vertical={false} />
          <XAxis
            dataKey="day"
            tickMargin={16}
            tickLine={false}
            stroke="#9B9EAC"
          />
          <YAxis
            orientation="right"
            yAxisId="right"
            dataKey="kilogram"
            stroke="#9B9EAC"
            domain={['dataMin - 1', 'dataMax + 1']}
            tickMargin="40"
            scale="linear"
            minTickGap={20}
            tickLine={false}
            axisLine={false}
            tickCount={3}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            dataKey="calories"
            tick={false}
            domain={['dataMin - 100', 'dataMax + 100']}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#E60000',
              border: 'none',
            }}
            wrapperStyle={{ outline: 'none' }}
            labelStyle={{ display: 'none' }}
            itemStyle={{
              color: '#fff',
              textAlign: 'center',
              fontSize: '9px',
              fontWeight: '500',
            }}
            formatter={(value, name) => [value, !name]}
          />
          <Legend
            verticalAlign="top"
            height={50}
            align="right"
            iconSize={8}
            formatter={(value) => {
              return (
                <span
                  style={{
                    color: '#74798C',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  {value}
                </span>
              )
            }}
            payload={[
              {
                value: 'Poids (kg)',
                type: 'circle',
                id: 'ID01',
                color: '#282D30',
              },
              {
                value: 'Calories brûlées (kCal)',
                type: 'circle',
                id: 'ID02',
                color: '#E60000',
              },
            ]}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            unit={'kg'}
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            yAxisId="left"
            barCategoryGap={10}
            dataKey="calories"
            fill="#E60000"
            unit={'Kcal'}
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      )}
    </ChartContainer>
  )
}

/////*   Style   */////

const ChartContainer = styled.div`
  background-color: #fbfbfb;
  border-radius: 5px;
  margin-top: 40px;
  position: relative;
`
const ChartTitle = styled.div`
  position: absolute;
  top: 6%;
  left: 8%;
  color: #20253a;
  font-size: 15px;
  font-weight: 500;
`

export default ActivityChart
