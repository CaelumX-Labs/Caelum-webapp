import type { ComponentPropsWithoutRef } from "react";
import { Price } from "./Price"

export const Card = (props : ComponentPropsWithoutRef<'div'> & {cardDetails ?: object;}) => {

    const {cardDetails, ...rest } = props
    const { lable, task, country, tags , carbonCredits, vintageYear, price} = cardDetails

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
                        <p>{task}</p>
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
