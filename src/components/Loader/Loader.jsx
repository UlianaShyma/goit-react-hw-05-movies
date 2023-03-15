import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <InfinitySpin width={350} color="#553c9a" />
    </div>
  );
};
