export const sum = (value1: number, value2: number) => {
  return value1 + value2;
};

const LazyComponent: React.FC = () => {
  return (
    <>
      <h1>I am a lazy component</h1>
    </>
  );
};

export default LazyComponent;
