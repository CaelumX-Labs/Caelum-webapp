/* eslint-disable @typescript-eslint/no-unused-vars */
import type { PropsWithoutRef } from "react"

export const Price = (props : PropsWithoutRef<'div'> & {svg ?: svg; lable ?:lable }) => {
    return <div>
        <div>
            {svg}
        </div>
        <label htmlFor="">{lable}</label>
    </div>
}
