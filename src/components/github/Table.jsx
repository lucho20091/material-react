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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { set } from "date-fns";
import { Github, CodeXml } from "lucide-react";
import { useState } from "react";
export default function TableGithub({ data }) {
  const [tab, setTab] = useState("All");
  const uniqueTechnologies = [
    "All",
    ...new Set(data.flatMap((item) => item.technologies)),
  ];
  console.log("uniquetechnologies", uniqueTechnologies);

  return (
    <div className="p-4">
      <Select value={tab} onValueChange={setTab}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Technology" />
        </SelectTrigger>
        <SelectContent>
          {uniqueTechnologies.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
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
          {tab === "All"
            ? data.map((item) => (
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
              ))
            : data
                .filter((item) => item.technologies.includes(tab))
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.projectName}</TableCell>
                    <TableCell className="">
                      <a href={item.github} target="_blank">
                        <Github className="mx-auto md:ml-2" />
                      </a>
                    </TableCell>
                    <TableCell className="">
                      <a href={item.website} target="_blank">
                        {item.website && (
                          <CodeXml className="mx-auto md:ml-2" />
                        )}
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
