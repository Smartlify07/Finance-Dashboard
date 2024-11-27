import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import { incomeAnalysis } from '../data/income-analysis';

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={incomeAnalysis}
        className="text-[1.2rem]"
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <XAxis axisLine={false} tickLine={false} dataKey="name" />
        {/* Use CustomBar component with red lines, blue bars, and no hover effect */}
        <Bar dataKey="value" width={30} rx={20} ry={20}>
          {incomeAnalysis.map((data, index) => (
            <Cell
              key={index}
              fill={
                data.name === 'Jul'
                  ? 'var(--blue-primary)'
                  : 'url(#stripedPattern)'
              }
              radius={10}
            />
          ))}
        </Bar>
        <defs>
          <pattern
            id="stripedPattern"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="12" height="5" fill="#f3f4f8" />
          </pattern>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
