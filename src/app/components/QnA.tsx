import { useState } from 'react';
import Add from '../assets/Add.svg';



interface QnAProps {

  question: string;

  answer: string;

  key: number;

}



export const QnA: React.FC<QnAProps> = ({ question, answer }) => {

  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b-[1px] border-b-zinc-600/30 inline-flex pb-2 flex-col gap-2 cursor-pointer"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex flex-row gap-4 items-center">
        {/* Smooth icon rotation */}
        <div
          className={`transition-transform duration-300 ease-in-out ${
            open ? 'rotate-45' : 'rotate-0'
          }`}
        >
          <img src={Add.src} alt="Add Icon" />
        </div>
        <h1 className="text-white text-2xl">{question}</h1>
      </div>

      {/* Smooth text reveal */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-zinc-400 text-sm pl-10 pb-2">{answer}</p>
      </div>
    </div>
  );
};
