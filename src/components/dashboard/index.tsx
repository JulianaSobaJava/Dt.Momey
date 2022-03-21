import Summary from "../summary";
import { Container } from "./style";
import TransationsTable from "../transactionsTable";

export default function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransationsTable />
    </Container>
  );
}
