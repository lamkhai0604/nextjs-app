import Layout from "../components/Layout";
import { Jumbotron, Button } from "react-bootstrap";
import Link from "next/link";


export default function Home() {
  return (
    <Layout>
      <Jumbotron>
        <h1>My Next App</h1>
        <p>This is my Next App</p>
        <p>
          <Link href="/posts">
            <Button variant="primary">Post</Button>
          </Link>
        </p>
      </Jumbotron>
    </Layout>
  );
}
