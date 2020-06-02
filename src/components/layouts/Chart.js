import React, {useEffect, useState} from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const style = {
    top: 300, right: 30, left: 50, bottom: 85,
    lineHeight: '24px'
};


const Chart = props => {

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
        <ResponsiveContainer width={300} aspect={1.0}>
          <RadialBarChart width="50%" height="50%" cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={20} data={state.data} >
              <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#100e17' }} background clockWise dataKey="uv" />
              <Legend iconSize={15} width={250} height={140} layout="vertical" verticalAlign="middle" align="left" wrapperStyle={style} />
          </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default Chart; 