import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function StepOne({ updateFields }) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

    return (
        <div className='flex flex-col items-center'>
      
      <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>travel dates</div>
        <div className='w-60 border-b-2 my-4 text-sky-600 font-semibold text-sm'>
          <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
            withPortal
            fixedHeight
          />
        </div>
      </div>
      

      <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>region preference</div>
        <input type='text' className='border-b-2 text-center w-60 my-4 text-sm font-semibold uppercase text-sky-600'></input>
      </div>

</div>
    )
}