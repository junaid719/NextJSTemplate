"use client"

import { useState, useRef, useContext } from 'react';
import { Context } from '../../context/context'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // ADD THIS
import useCategoryCounts from '@/app/hooks/useCustomChartData';
const ChartLine = (): JSX.Element => {
  const ref = useRef();
  const categoryCounts = useCategoryCounts(useContext(Context))
  console.log('HERE is the data 2', useContext(Context))
  console.log('HERE is the data 3', categoryCounts)
  const data = {
    labels: categoryCounts.category,
    datasets: [
      {
        label: 'First dataset',
        data: categoryCounts.count,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)'
      },

    ],
  };

  // return <Line ref={ref} data={data} />
  return <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <Line ref={ref} data={data} />
    </div>
  </div>
};

export default ChartLine;