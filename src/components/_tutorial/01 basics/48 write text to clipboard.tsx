/**
 * To write text to the clipboard, the following function can be called
 */

const WriteTextToClipboard: React.FC = () => {
  const onCopy = () => navigator.clipboard.writeText("Copied text");
  return <button onClick={onCopy} />;
};
