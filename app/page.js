import Image from 'next/image';

export default function Home() {
  const dogs = [
    {
      name: 'Puli',
      transform: 'scale-110 -rotate-6',
    },
    {
      name: 'Sydney',
      transform: 'scale-75 rotate-12',
    },
    {
      name: 'Dora',
      transform: 'scale-110 rotate-6',
    },
    {
      name: 'Olly',
      transform: 'scale-130 rotate-6',
    },
    {
      name: 'Rex',
      transform: 'scale-75 -rotate-6 skew-y-6 translate-x-2 translate-y-15',
    },
    {
      name: 'Doge',
      transform: 'scale-75 -rotate-45',
    },
  ];

  return (
    <main className="py-20 px-10 p-16 m-auto max-w-6xl">
      <h1 className="">Hi Doggos🐶!</h1>
      <h2 className="my-12">The best doggos in town</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 my-20 lg:my-32">
        {dogs.map((dog, index) => (
          <div
            key={index}
            className={`border-2 border-indigo-400 rounded-xl px-5 pt-2 pb-5 m-auto border-opacity-50 shadow-xl backdrop-blur-sm bg-white/30 ${dog.transform} hover:bg-purple-200 hover:scale-105 hover:transition hover:ease-in-out hover:duration-300 `}
          >
            <div className="my-3">
              <h2>{dog.name}</h2>
            </div>
            <Image
              height={160}
              width={260}
              alt={dog.name}
              src={`/images/${index + 1}.png`}
              className="h-40 w-40 object-cover rounded-lg  "
            />
          </div>
        ))}
      </div>
    </main>
  );
}
