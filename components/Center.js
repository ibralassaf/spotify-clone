import { ArrowRightIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";
import Songs from "./Songs";

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
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div
          onClick={signOut}
          className="flex items-center p-1 pr-2 space-x-3 text-white bg-black rounded-full cursor-pointer opacity-90 hover:opacity-80"
        >
          <Image
            className="rounded-full"
            src={session?.user.image}
            alt=""
            width={40}
            height={40}
          ></Image>
          <h2> {session?.user.name}</h2>
          <ArrowRightIcon className="w-5 h-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <Image
          src={playlist?.images?.[0]?.url}
          alt=""
          className="shadow-4xl h-44 w-44"
          width={176}
          height={176}
        ></Image>
        <div>
          <p className="text-sm">PLAYLIST</p>
          <h1 className="text-2xl font-bold md:text-3xl xl:text-6xl">
            {playlist?.name}
          </h1>
        </div>
      </section>

      <div>
        <Songs />
      </div>
    </div>
  );
}
