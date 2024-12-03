"use client";

import { useState } from "react";
import imgunchecked from "../../public/unchecked.png";
import imgtrash from "../../public/trash.png";
import calendar from "../../public/calendar.png";

export default function Home() {
  const [list, setList] = useState<Array<{ text: string; done: boolean }>>([]);
  const [val, setVal] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const push = () => {
    const element = document.getElementById("newList") as HTMLInputElement;
    if (element.value.trim() !== "") {
      setList(list.concat({ text: element.value, done: false }));
      element.value = "";
    }
  };

  const toggleDone = (key: number) => {
    const tmp = [...list];
    tmp[key].done = !tmp[key].done;
    setList(tmp);
    setCount(tmp.filter((item) => item.done).length); // Hitung ulang jumlah selesai
  };

  const remove = (key: number) => {
    const tmp = [...list];
    if (tmp[key].done) setCount(count - 1); // Kurangi jumlah selesai jika task yang dihapus sudah selesai
    tmp.splice(key, 1);
    setList(tmp);
  };

  return (
    <div className="bg-black flex items-center justify-start min-h-screen flex-col gap-5">
      <div className="border-white border-2 mt-10 p-6 rounded-xl">
        <div className=" w-full h-auto items-center justify-center font-bold flex flex-col">
          <div className="flex flex-row text-3xl mt-2 text-white">
            <img src={calendar.src} alt="" width={30} className="mr-2" />
            TODO LIST
          </div>
          <div className=" p-3 gap-5 rounded-md w-[100%] text-center flex justify-center">
            <input
              type="text"
              className="bg-white max-w-60 w-full border-2 pl-2 rounded-md"
              id="newList"
              onChange={(e) => setVal(e.currentTarget.value)}
            />
            <button
              onClick={push}
              className="bg-blue-600 text-white border-2 p-2 rounded-md font-bold"
            >
              Add
            </button>
          </div>
        </div>

        <div className="bg-white border-2 p-3 rounded-md max-w-auto w-full min-h-[200px] text-center">
          {list.map((item, key) => (
            <div
              key={key}
              className="border-b-2 border-black flex justify-between py-2"
            >
              <button onClick={() => toggleDone(key)}>
                <img
                  src={
                    item.done
                      ? "https://cdn-icons-png.flaticon.com/512/845/845646.png"
                      : imgunchecked.src
                  }
                  alt=""
                  width={27}
                  className={` ${
                    item.done ? "bg-green-300 hover:bg-white" : ""
                  } border-2 p-1 rounded-md font-bold mb-2 hover:bg-green-100`}
                />
              </button>
              <span
                className={` ${
                  item.done ? "line-through text-gray-500" : ""
                } pt-[1px] text-[17px] mx-5`}
              >
                {item.text}
              </span>
              <button
                className="border-2 p-1 rounded-md font-bold mb-2 hover:bg-red-100"
                onClick={() => remove(key)}
              >
                <img src={imgtrash.src} alt="" width={15} />
              </button>
            </div>
          ))}
        </div>

        <div className="font-bold text-white pt-2 justify-center items-center text-center">
          Task Done : {count} / {list.length}
        </div>
      </div>
    </div>
  );
}
