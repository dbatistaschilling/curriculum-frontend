import React, {useEffect, useState} from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import { useLocation } from 'react-router-dom';

const oldData = [
  {
    name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8',
  },
  {
    name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed',
  },
  {
    name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1',
  },
  {
    name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d',
  },
  {
    name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c',
  },
  {
    name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57',
  },
  {
    name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658',
  },
];


const style = {
    top: 40,
    left: 350,
    lineHeight: '24px',
};


const Chart = props => {
    const location = useLocation().pathname;

    const [state, setState] = useState({
        colors: ['#ffc658', '#d0ed57', '#a4de6c', '#82ca9d', '#8dd1e1', '#83a6ed', '#8884d8'],
        data: []
    });

    useEffect(() => {
        chartData();
    }, [1])


    const chartData = () => {
        const data = [{
            name: '', uv: 100, pv: 1, fill: '#100e17',
          }];
        props.concepts.forEach((concept, index) => {
            const newData = {
                name: `${concept.title} - ${concept.level}%`, uv: concept.level, pv: 1, fill: state.colors[index]
            }
            data.push(newData);
        })
        setState({
            ...state,
            data
        })
    }

    return (
        <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={20} data={state.data} style={{marginLeft: '10px'}}>
            <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#100e17' }} background clockWise dataKey="uv" />
            <Legend iconSize={15} width={250} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
    );
}

export default Chart;