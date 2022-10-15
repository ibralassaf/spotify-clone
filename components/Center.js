import { ChevronDownIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-yellow-500",
  "from-red-500",
  "from-pink-500",
  "from-purple-500",
  "from-gray-500",
];

export default function Center() {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState); // read only state
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
        setColor(shuffle(colors).pop()); // it shuffles the array and pop value of the array
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }, [spotifyApi, playlistId, setPlaylist]);

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
        {/* <img
          src={playlist?.images?.[0]?.url}
          alt=""
          className="shadow-2xl h-44 w-44"
        /> */}
        <Image
          src={playlist?.images?.[0]?.url}
          alt=""
          className="shadow-2xl h-44 w-44"
          width={176}
          height={176}
        ></Image>
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl">{playlist?.name}</h1>
        </div>
      </section>
    </div>
  );
}
