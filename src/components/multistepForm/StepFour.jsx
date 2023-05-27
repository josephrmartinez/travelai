
import {
  PersonSimpleBike, 
  PersonSimpleWalk, Boot, FlowerLotus, Palette,
  Bird, BowlFood, FlyingSaucer, Champagne,
} from "@phosphor-icons/react";

export default function StepFour({ updateFields }) {
    return (
        <div className='flex flex-col items-center'>
      
      

    <div className='flex flex-col items-center my-8'>
        <div className='text-md font-semibold uppercase text-neutral-700 my-2'>interests</div>
        <div className='grid grid-cols-3 gap-4'>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <PersonSimpleBike size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">cycling</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <PersonSimpleWalk size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">walking</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400 peer-checked:border-offset-2">
            <div className='flex flex-col items-center'>
              <Boot size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">hiking</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <FlowerLotus size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">relaxation</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Palette size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">culture</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Bird size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">nature</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <BowlFood size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">culinary</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <FlyingSaucer size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">paranormal</p>
            </div>
          </div>
          </label>
          <label class="cursor-pointer">
          <input type="checkbox" class="peer sr-only" name="interests" />
          <div class="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
            <div className='flex flex-col items-center'>
              <Champagne size={32} weight='duotone' fill="currentColor" />
              <p class="text-sm font-semibold uppercase ">nightlife</p>
            </div>
          </div>
          </label>
      
        </div>
      </div>
      

<div>submit</div>

</div>
    )
}