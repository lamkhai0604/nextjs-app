import Layout from "../../components/Layout";
import { Card, Button } from "react-bootstrap";
import { getBooks } from "../../lib/book";
import Link from "next/link";

const Books = ({ books }) => {
  return (
    <Layout>
      {books.map((books, key) => {
        return (
          <Card className="my-3 shadow" key={key}>
            <Card.Body>
              <Card.Title>{books.bookName}</Card.Title>
              <Card.Text>{books.bookContent}</Card.Text>
              <Link href="/">
                <Button variant="dark">Back</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </Layout>
  );
};

// Du lieu phu thuoc vao moi req nhung van tao ra HTML chuan cho FE van tot cho SEO
export const getStaticProps = async () => {
  const books = await getBooks();
  return {
    props: {
      books,
    },
  };
};

export default Books;
