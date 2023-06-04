"use client";

import React, { useState } from "react";
import { TSelectedFilter, TSkillType } from "./types";

const skillOptions: TSkillType[] = [
  { label: "Current", description: "These are the tools I'm currently using." },
  { label: "New/Exploring", description: "Currently studying tools." },
  { label: "Heard of", description: "Tools that I've heard of but have yet to use." },
  { label: "Old", description: "These are the tools that I have previously used for work as well." },
];

const SelectFilter = ({ value, onSelectedChanged }: TSelectedFilter) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        id="dropdownHelperButton"
        data-dropdown-toggle="dropdownHelper"
        className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        type="button"
      >
        Filter Skills{" "}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdownHelper"
        className={`${open ? "block" : "hidden"
          } absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHelperButton"
        >
          {skillOptions.map((opt, index) => (
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id={`helper-checkbox-${index}`}
                    aria-describedby="helper-checkbox-text-1"
                    type="checkbox"
                    value={opt.label}
                    checked={value.includes(opt.label)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={onSelectedChanged}
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label
                    htmlFor={`helper-checkbox-${index}`}
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>{opt.label}</div>
                    <p
                      id={`helper-checkbox-text-${index}`}
                      className="text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                      {opt.description}
                    </p>
                  </label>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectFilter;
