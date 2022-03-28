import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [Phones, SetPhones] = useState([])

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => { 
            const LoadedData = data.data.data;
            const PhonesData = LoadedData.map(phone => {
            const slugsPart = phone.slug.split('-')

             const slugSeparated = {
                    slugValue : slugsPart[0],
                    slugname :  parseInt(slugsPart[1])
                }  
                return slugSeparated;

               })
               SetPhones(PhonesData)
               console.log(PhonesData);
        })
        
    },[])
    return (
      <BarChart width={1100} height={300} style={{marginTop:'50px'}} data={Phones}>
     <Bar dataKey='slugValue' fill='#e65'></Bar>
     <XAxis dataKey='slugname'> </XAxis>
           <YAxis></YAxis>
           <Tooltip></Tooltip>
      </BarChart>
    );
};

export default SpecialChart;