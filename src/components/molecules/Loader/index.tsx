import { Spin } from 'antd';

const Loader = ({ screen = false }: { screen?: boolean }) => {
  return (
    <div className={`${screen ? 'w-screen h-screen' : 'w-full h-full'} flex justify-center items-center`}>
      <Spin />
    </div>
  );
};

export default Loader;
