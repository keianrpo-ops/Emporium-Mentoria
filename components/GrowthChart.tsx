import React from 'react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { week: 'S0', skill: 0 },
  { week: 'S1', skill: 25 },
  { week: 'S2', skill: 50 },
  { week: 'S3', skill: 80 },
  { week: 'S4', skill: 100 },
];

const GrowthChart: React.FC = () => {
  return (
    <div className="w-full h-80 p-6 bg-slate-950">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-slate-200 font-bold text-sm uppercase tracking-wider">Crecimiento Proyectado</h3>
        <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorSkill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a855f7" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
          <XAxis 
            dataKey="week" 
            stroke="#475569" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
          />
          <YAxis 
            stroke="#475569" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
            tickFormatter={(value) => `${value}%`} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
            itemStyle={{ color: '#a855f7' }}
            cursor={{ stroke: '#475569', strokeWidth: 1 }}
          />
          <Area 
            type="monotone" 
            dataKey="skill" 
            stroke="#a855f7" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorSkill)" 
            name="Nivel" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;