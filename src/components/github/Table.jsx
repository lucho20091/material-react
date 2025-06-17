import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Github, CodeXml } from "lucide-react";
export default function TableGithub({ data }) {
  console.log(data);

  return (
    <div className="p-4">
      <Table>
        <TableCaption>A List of your github projects</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Github</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Technologies</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.projectName}</TableCell>
              <TableCell className="">
                <a href={item.github} target="_blank">
                  <Github className="mx-auto md:ml-2" />
                </a>
              </TableCell>
              <TableCell className="">
                <a href={item.website} target="_blank">
                  {item.website && <CodeXml className="mx-auto md:ml-2" />}
                </a>
              </TableCell>
              <TableCell className="flex items-center space-x-4">
                {item.technologies.map((tech) => (
                  <div>
                    <span>{tech}</span>
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
