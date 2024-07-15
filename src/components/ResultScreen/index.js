import CustomImg from "../custom-Img";

const ResultScreen = ({ data = [] }) => {
  return (
    <>
      {data.map((item) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            
          }}
        >
          <span style={{marginRight: 10}}>{item.question}</span>
          <CustomImg src={item.img} height={"20px"} width={"20px"} />
        </div>
      ))}
      <div>Thank you</div>
    </>
  );
};

export default ResultScreen;
