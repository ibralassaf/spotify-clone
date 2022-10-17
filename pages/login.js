import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function login({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black">
      <Head>
        <title>Spotify Clone - Login</title>
      </Head>
      <Image
        className="mb-5 w-52"
        src="https://links.papareact.com/9xl"
        height={150}
        width={150}
        alt=""
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="w-full mt-5 text-white bg-[#1ed760] hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
