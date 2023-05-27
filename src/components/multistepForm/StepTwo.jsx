
import {
  Waves, Cactus, Mountains, TreeEvergreen,
  Buildings, Grains
} from "@phosphor-icons/react";

export default function StepTwo({ updateFields }) {
    return (
        <div className='flex flex-col items-center'>
      
      <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>environment</div>
        <div className='grid grid-cols-3 gap-4'>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="environment" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Waves size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">beach</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="environment" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <Cactus size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">desert</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="environment" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <Mountains size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">mountains</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="environment" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <TreeEvergreen size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">forest</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="environment" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Buildings size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">city</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="environment" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Grains size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">farmland</p>
            </div>
          </div>
          </label>
      
        </div>
      </div>
      

      
      <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>group</div>
        <div className='grid grid-cols-3 gap-4'>
          
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="group" />
          <div class="flex flex-col items-center bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill='currentColor' viewBox="0 0 256 256"><circle cx="128" cy="128" r="32"/></svg>
              <p class="text-sm font-semibold uppercase ">solo</p>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="group" />
          <div class="flex flex-col items-center bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill='currentColor' viewBox="0 0 256 256"><circle cx="85" cy="128" r="32"/><circle cx="171" cy="128" r="32"/></svg>
              <p class="text-sm font-semibold uppercase ">couple</p>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="radio" class="peer sr-only" name="group" />
          <div class="flex flex-col items-center bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill='currentColor' viewBox="0 0 256 256"><circle cx="32" cy="128" r="32"/><circle cx="128" cy="128" r="32"/><circle cx="224" cy="128" r="32"/></svg>
              <p class="text-sm font-semibold uppercase ">family</p>
          </div>
          </label>
      
        </div>
      </div>
      
</div>
    )
}