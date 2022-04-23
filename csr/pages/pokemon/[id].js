import { useRouter } from "next/router";
//TODO: make req to server to get everything about pokemon

export default () => {
  const router = useRouter();
console.log(router.query);
  return <div>{router.query.id}</div>;
};
