import Layout from "../../components/Layout";
import { Card, Button } from "react-bootstrap";
import { getRandomJoke } from "../../lib/joke";
import Link from "next/link";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>Here's your random joke for today</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// Du lieu phu thuoc vao moi req nhung van tao ra HTML chuan cho FE van tot cho SEO
export const getServerSideProps = async () => {
  const joke = await getRandomJoke();
  // joke = false;

  if (!joke)
    return {
      notFound: true, //404 page
    };

  // return {
  //   redirect: {
  //     destination: "/posts",
  //     pernament: false,
  //   },
  // };

  return {
    props: {
      joke,
    },
  };
};

export default Random;
