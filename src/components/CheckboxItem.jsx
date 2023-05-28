import React from 'react';

export default function CheckboxItem({ name, label, value, checked, onChange, icon }){
  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        className="peer sr-only"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className="bg-white p-3 w-24 rounded-sm text-gray-500 border-b-2 border-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:border-blue-400">
        <div className="flex flex-col items-center">
          {icon}
          <p className="text-sm font-semibold uppercase">{label}</p>
        </div>
      </div>
    </label>
  );
};

