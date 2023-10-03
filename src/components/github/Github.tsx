import { useLoaderData } from 'react-router-dom';

interface IData {
  avatar_url: string;
  name: string;
  location: string;
}

function Github() {
  const data = useLoaderData() as IData;
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <br />
      Hi, my name is {data.name}, I hail from {data.location} and I made this
      React-based App!
      <img src={data.avatar_url} alt='Git picture' width={300} />
    </div>
  );
}

export default Github;
