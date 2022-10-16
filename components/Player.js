import { HeartIcon,VolumeUpIcon as VolumeDownIcon } from "@heroicons/react/outline";
import {
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  ReplyIcon,
  RewindIcon,
  SwitchHorizontalIcon,
  VolumeUpIcon,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSongInfo from "../hooks/useSongInfo";
import useSpotify from "../hooks/useSpotify";
import {debounce} from 'lodash'

export default function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);

  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        console.log("Now playing: ", data.body?.item);
        setCurrentTrackId(data.body?.item?.id);

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing);
        });
      });
    }
  };

  const handlePlayPause = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body?.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    });
  };
    
    const debouncedAdjustVolume = useCallback(
        debounce((volume) => {
            
            spotifyApi.setVolume(volume).catch((err) => { });
        }, 500), []);

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [spotifyApi, currentTrackIdState, session]);
    
    useEffect(() => {
        if (volume > 0 && volume < 100) {
            debouncedAdjustVolume(volume);
        }
    },[volume])
    

  return (
    <div className="grid h-24 grid-cols-3 px-2 text-xs text-gray-400 md:text-base md:px-8 bg-gradient-to-b from-black to-gray-900">
      {/* left */}
      <div className="flex items-center space-x-4">
        <Image
          className="hidden md:inline"
          src={songInfo?.album.images?.[0]?.url}
          alt=""
          width={40}
          height={40}
        />

        <div>
          <h3 className="text-white">{songInfo?.name}</h3>
          <p>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>
      {/* center */}
      <div className="flex items-center justify-evenly">
        <SwitchHorizontalIcon className="button hover:text-white" />
        <RewindIcon className="button hover:text-white" />
        {isPlaying ? (
          <PauseIcon
            onClick={handlePlayPause}
            className="w-10 h-10 text-white button"
          />
        ) : (
          <PlayIcon
            onClick={handlePlayPause}
            className="w-10 h-10 hover:text-white button"
          />
        )}

        <FastForwardIcon className="button hover:text-white" />
        <ReplyIcon className="button hover:text-white" />
      </div>
      {/* right */}
      <div className="flex items-center space-x-3 pr-5 md:space-x-4 justify-end">
              <VolumeDownIcon onClick={() => volume > 0 && setVolume(volume - 10)} className="button" />
              <input onChange={e => setVolume(Number(e.target.value))} className="w-14 md:w-28" type="range" value={volume} min={0} max={100} />
        <VolumeUpIcon onClick={() => volume< 100 && setVolume(volume + 10)} className="button" />
      </div>
    </div>
  );
}
