import { Cell, Pie, PieChart } from 'recharts';

const ExpenseCategoryPie = () => {
  const data = [
    { name: 'Income', value: 40, color: 'var(--blue-primary)' },
    { name: 'Outcome', value: 40, color: 'var(--green)' },
    { name: 'Free Budget', value: 20, color: '' },
  ];
  const cx = 145; // Center X position
  const cy = 170; // Center Y position
  const iR = 100; // Increased inner radius
  const oR = 150;
  return (
    <PieChart width={300} height={200}>
      <defs>
        <pattern
          id="pie"
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-45)"
        >
          <rect width="12" height="5" fill="var(--secondary)" />
        </pattern>
      </defs>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#8884d8"
        stroke="none"
        cornerRadius={10}
      >
        {data.map((entry, index) => (
          <Cell
            radius={10}
            key={`cell-${index}`}
            fill={entry.name.includes('Free') ? 'url(#pie)' : entry.color}
          />
        ))}
      </Pie>
      <text
        x={154}
        y={135}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={36}
        fill="var(--black-text)"
      >
        100%
      </text>
      <text
        x={155}
        y={165}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={12}
        color="#f3f4f8"
        fill="#5E5E5E"
      >
        Data recorded
      </text>
    </PieChart>
  );
};

export default ExpenseCategoryPie;
