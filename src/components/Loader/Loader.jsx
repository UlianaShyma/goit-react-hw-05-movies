import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <InfinitySpin width={350} color="#553c9a" />
    </div>
  );
};
