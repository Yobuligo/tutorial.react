import Text from "./Text";

export const ErrorText: React.FC<{ error: Error }> = (props) => {
  return (
    <Text
      text={`... Error while fetching data from backend. Error was '${props.error.message}'`}
    />
  );
};
