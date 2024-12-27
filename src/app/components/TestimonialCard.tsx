import type { ComponentPropsWithoutRef } from 'react';

export const TestimonialCard = (props: ComponentPropsWithoutRef<'div'> &{
    keyPhrase?: string;
    testimonial?: string;
    name?: string;
    position?: string;
    companyImage?: string;
    personImage?: string;
    hover ?: boolean;
}) => {

    const { keyPhrase, testimonial, name, position, companyImage, personImage, hover } = props;
    return <div  className={`text-zinc-300 w-[400px] p-2 outline outline-1 bg-[#141414] flex-shrink-0 rounded-lg   my-12 ${hover ? 'outline-teal-500 shadow-lg shadow-teal-500' : 'outline-zinc-500/40' } `}>
            <div className='inline-flex flex-col items-start gap-4 mx-6 my-5 '>
                <h3 className='text-[28px] tracking-wide'>
                <span className='text-teal-100'>"</span>{keyPhrase}<span className='text-teal-300'>"</span>
                </h3>
                <p  className='text-zinc-500 text-[12px]'>{testimonial}</p>
                <div className='flex flex-row items-start gap-4'>
                    <div className='inline-flex flex-row items-center justify-center'>
                    </div>
                    <div className='inline-flex flex-col gap-1 mt-1'>
                        <h3 className='text-sm'>{name}</h3>
                        <h5 className='text-[10px] text-teal-500 '>{position}</h5>
                    </div>
                </div>
            </div>
    </div>
}
