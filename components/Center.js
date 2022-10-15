import { ChevronDownIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-yellow-500",
  "from-red-500",
  "from-pink-500",
  "from-purple-500",
];

export default function Center() {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(shuffle(colors).pop()); // it shuffles the array and pop value of the array
  }, []);

  return (
    <div className="flex-grow ">
      <header className="absolute top-5 right-8">
        <div className="flex items-center p-1 pr-2 space-x-3 bg-black rounded-full cursor-pointer opacity-90 hover:opacity-80">
          {/* <Image width={40} height={40}></Image> */}
          <img
            className="w-10 h-10 rounded-full"
            src={session?.user.image}
            alt=""
          ></img>
          <h2> {session?.user.name}</h2>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        {/* <Image src={ } alt="" width={300} height={300} /> */}
        <h1>Hello</h1>
      </section>
    </div>
  );
}
