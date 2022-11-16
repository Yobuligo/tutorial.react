// By using function fetch it is also possible to send POST requests.

const RESTSendingPostRequestComponent: React.FC = () => {
  const person = { firstname: "Stacey", lastname: "Starfish" };
  const onSendPOSTRequestHandler = async () => {
    try {
      await fetch("<myURL>", {
        method: "POST",
        body: JSON.stringify(person),
        headers: { "content-type": "application/JSON" },
      });
    } catch (error: any) {
      // error sending POST request
    }
  };

  return (
    <>
      <button onClick={onSendPOSTRequestHandler}>Send POST request</button>
    </>
  );
};

export default RESTSendingPostRequestComponent;
