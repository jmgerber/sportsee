import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    day: '2020-07-01',
    kilogram: 80,
    calories: 240,
  },
  {
    day: '2020-07-02',
    kilogram: 80,
    calories: 220,
  },
  {
    day: '2020-07-03',
    kilogram: 81,
    calories: 280,
  },
  {
    day: '2020-07-04',
    kilogram: 81,
    calories: 290,
  },
  {
    day: '2020-07-05',
    kilogram: 80,
    calories: 160,
  },
  {
    day: '2020-07-06',
    kilogram: 78,
    calories: 162,
  },
  {
    day: '2020-07-07',
    kilogram: 76,
    calories: 390,
  },
]

const formatXAxis = (tickItem) => {
  const tickDate = new Date(tickItem)
  return tickDate.getDate()
}

const renderColorLegendText = (value) => {
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
}

function BarChartComponent() {
  return (
    <BarChart
      width={835}
      height={320}
      data={data}
      barGap={8}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="4" vertical={false} />
      <XAxis
        dataKey="day"
        tickFormatter={formatXAxis}
        tickMargin={16}
        tickSize={0}
      />
      <YAxis
        yAxisId="left"
        dataKey="calories"
        orientation="left"
        strokeWidth={0}
        tick={false}
        domain={[0, 'dataMax + 100']}
      />
      <YAxis
        yAxisId="right"
        dataKey="kilogram"
        orientation="right"
        strokeWidth={0}
        domain={['dataMin - 1', 'dataMax']}
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
        formatter={renderColorLegendText}
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
  )
}

export default BarChartComponent
