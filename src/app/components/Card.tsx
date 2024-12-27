 
/* eslint-disable react/jsx-key */
import type { ComponentPropsWithoutRef } from "react";
import { Price } from "./Price"
import { Tag } from "lucide-react";

interface CardDetails {
    lable: string;
    country: string;
    tags: { svg: string; lable: string }[];
    carbonCredits: number;
    vintageYear: number;
    price: number;
}

export const Card = (props : ComponentPropsWithoutRef<'div'> & {cardDetails ?: CardDetails;}) => {

    const {cardDetails } = props
    const { lable,  country, tags , carbonCredits, vintageYear} = cardDetails || { lable: '', country: '', tags: [], carbonCredits: 0, vintageYear: 0, price: 0 }

    return <div>
        <div>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                { tags.map(({svg, lable}) => (
                        < Price svg={svg} lable={lable} />
                    ))}
                </div>
            </div>
            <div>
                <div>
                    <h3>{lable}</h3>
                    <div>
                        <address>{country}</address>
                    </div>
                </div>
                <div>
                { tags.map(({svg, lable}) => (
                        < Tag svg={svg} lable={lable} />
                    ))}
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h4><span>{carbonCredits}</span> Carbon Credit</h4>
                    </div>
                    <div>
                        <span>{vintageYear}</span>
                        <p>Vintage</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
