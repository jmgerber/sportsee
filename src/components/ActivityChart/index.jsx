import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import PropTypes from 'prop-types'

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

function ActivityChart({ sessions }) {
  return (
    <BarChart
      width={835}
      height={320}
      data={sessions}
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

ActivityChart.propTypes = {
  sessions: PropTypes.array.isRequired,
}

ActivityChart.defaultProps = {
  sessions: [],
}

export default ActivityChart
