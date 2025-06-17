import { data } from "@/utils/data";
import TableGithub from "@/components/github/Table";
export default function Github() {
  console.log(data);
  return (
    <>
      <TableGithub data={data} />
    </>
  );
}
