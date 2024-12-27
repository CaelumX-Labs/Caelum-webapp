
import React from 'react';



interface PriceProps {

    svg: string;

    lable: string;

}



export const Price: React.FC<PriceProps> = ({ svg, lable }) => {

    return (

        <div>

            <img src={svg} alt={lable} />

            <span>{lable}</span>

        </div>

    );

};
