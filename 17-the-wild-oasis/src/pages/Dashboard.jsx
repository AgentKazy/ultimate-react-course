import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      {/* <p>{import.meta.env.VITE_SECRET_KEY}</p> */}
      {/* <p>{import.meta.env.SECRET_KEY}</p> */}
      <p>TEST</p>
    </Row>
  );
}

export default Dashboard;
