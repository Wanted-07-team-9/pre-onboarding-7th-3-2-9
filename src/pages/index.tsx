import Head from 'next/head';
import tw, { styled } from 'twin.macro';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <br />
        <TailwindButton>In Tailwind Style</TailwindButton>
        <br />
        <ConditionalButton isRed={false}>Conditional Tailwind</ConditionalButton>
        <ConditionalButton isRed={true}> Tailwind</ConditionalButton>
        <div className="text-3xl text-red-900">hello</div>
        <div className="w-10 h-10 bg-red-200 rounded-full"></div>
      </main>
    </div>
  );
}

const TailwindButton = tw.button`
  bg-gray-500
  hover:bg-red-700
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
`;

const ConditionalButton = styled.button(({ isRed }: { isRed: boolean }) => [
  isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-500`,
  tw`
    text-white
    font-bold
    py-2
    px-4
    border
    border-black
    rounded-full
  `,
]);
