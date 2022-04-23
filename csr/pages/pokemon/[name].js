import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import Head from "next/head";
import { Container, FormControl, Col, Row, Card } from "react-bootstrap";

const queryClient = new QueryClient();
const getPokemon = async (name) => {
  const { data } = await axios.get(`/api/pokemon?name=${name}`);
  return data;
};

const Filtered = () => {
  const router = useRouter();
  const { data } = useQuery([router.query.name], () =>
    getPokemon(router.query.name)
  );

  return (
    <div>
      <Head>
        <title>
          {(data && (data.name.english || data.name.japanese)) || "Pokemon"}
        </title>
      </Head>
      <Container>
        {data && (
          <>
            {console.log(Object.entries(data.base))}
            <h1>{data.name.english}</h1>
            <Row>
              <Col md={6}>
                <img
                  style={{ width: "100%" }}
                  src={`/pokemon/${data.name.english
                    .toLowerCase()
                    .replace(" ", "-")}.jpg`}
                />
              </Col>
              <Col md={6}>
                  {/* taking an object with keys and values and turning into array of arrays */}
                {Object.entries(data.base).map(([key, value]) => (
                  <Row key={key}>
                    <Col>{key}</Col>
                    <Col>{value}</Col>
                  </Row>
                ))}
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default function WrappedFiltered() {
  return (
    <QueryClientProvider client={queryClient}>
      <Filtered />
    </QueryClientProvider>
  );
}
