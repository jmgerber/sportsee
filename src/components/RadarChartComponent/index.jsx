import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'
import styled from 'styled-components'

const ChartContainer = styled.div`
  background-color: #282d30;
  display: inline-flex;
  border-radius: 5px;
`
const data = {
  userId: 12,
  kind: {
    1: 'cardio',
    2: 'energy',
    3: 'endurance',
    4: 'strength',
    5: 'speed',
    6: 'intensity',
  },
  data: [
    {
      value: 80,
      kind: 1,
    },
    {
      value: 120,
      kind: 2,
    },
    {
      value: 140,
      kind: 3,
    },
    {
      value: 50,
      kind: 4,
    },
    {
      value: 200,
      kind: 5,
    },
    {
      value: 90,
      kind: 6,
    },
  ],
}

const getKind = (kindData) => {
  return data.kind[kindData.kind]
}

function RadarChartComponent() {
  return (
    <ChartContainer>
      <RadarChart
        width={280}
        height={280}
        cx="50%"
        cy="50%"
        outerRadius={80}
        data={data.data}
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

export default RadarChartComponent
