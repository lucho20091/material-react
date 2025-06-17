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
import { data } from "@/utils/data";
import { Github, CodeXml } from "lucide-react";
export default function Journey() {
  return (
    <div className="p-4">
      <h1 className="text-2xl md:text-4xl">
        My Journey through Web Development
      </h1>
      <div className="text-xl">
        <div className="HTML and CSS">
          <h2 className="text-xl md:text-2xl mt-2">First HTML and CSS</h2>
          Before starting this Journey(a more serious approach) I had a little
          background from studying from websites like{" "}
          <a
            className="underline text-blue-900"
            href="https://www.w3schools.com/"
          >
            W3schools
          </a>
          ,{" "}
          <a
            className="underline text-blue-900"
            href="https://developer.mozilla.org/en-US/"
          >
            MDN Web Docs
          </a>{" "}
          and{" "}
          <a
            className="underline text-blue-900"
            href="https://replit.com/learn"
          >
            Replit.
          </a>{" "}
          All really good websites but then I joined a community online to learn
          web development.
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead>Technologies</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.slice(0, 2).map((item) => (
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
        <div className="HTML, CSS and JS">
          <h2 className="text-xl md:text-2xl mt-2">HTML, CSS and JS</h2>
          Learning JS was something fun, It really teaches you to think like a
          computer and see step by steps of things, the learning curve is you
          start by grasping variables, if else statements, loops and functions
          and you feel like you can do everything, then you spend most of the
          time learning arrays, objects, DOM manipulation and ES6 comes to make
          code easier to read and write but it introduces new concepts that you
          are forced to learn to start graspling frameworks.
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead>Technologies</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .filter(
                  (item) =>
                    item.technologies.length === 3 &&
                    item.technologies.includes("HTML") &&
                    item.technologies.includes("CSS") &&
                    item.technologies.includes("JS")
                )
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
        <div className="Responsive Design">
          <h2 className="text-xl md:text-2xl mt-2">Responsive Design</h2>
          Started focusing on media queries and practicing responsive design, I
          remember hearing that first mobile design principle and it didnt click
          on me until I started using Tailwind, then I realized the importance
          of it.
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead>Technologies</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .filter(
                  (item) =>
                    item.responsive &&
                    !item.technologies.includes("Next") &&
                    !item.technologies.includes("React")
                )
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
        <div className="React">
          <h2 className="text-xl md:text-2xl mt-2">React</h2>
          When I started learning React I was confused if something was React or
          just ES6, learning more of ES6 definitely made React make more sense,
          What I like about React is how simple is to do dinamically renders, it
          shifts programming from imperative programming to declarative
          programming.
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead>Technologies</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .filter((item) => item.technologies.includes("React"))
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
        <div className="backend - Express">
          <h2 className="text-xl md:text-2xl mt-2">Backend - Express</h2>I
          followed a github repo that had a backend course and it really was
          great, something it stuck with me was the MVC principle that divides
          code into their respective role, Model View Controller, Model for
          databases schemas, View for content rendered to the user and
          Controller for the functionality of the code, and also you can have a
          folder for routes and its a really clean and organized folder
          structure, I really enjoyed that this principle makes backend simple
          and easy to understand and use.
          <br />
          To deploy the backend and use it in the front I tried using a proxy
          (proxy solved cors error) in cloudflare and a server with free credits
          of 5 dollars and that worked great, also using tunnels to run them on
          my pc and a domain that I bought and that was running fine, in the
          future I may use a computer for that sole purpose of running backend
          apps.
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead>Technologies</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .filter((item) => item.technologies.includes("Express"))
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
        <div className="Next">
          <h2 className="text-xl md:text-2xl mt-2">Next js</h2>
          The problem I encountered building fullstack apps was that I needed a
          server to run backend code, and most of the options I saw were paid
          options, Next really solves this by easily deploying them in Vercel
          for free, server side rendering is a really cool concept, it reminds
          me of php (I saw a little bit of php when I first started).
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead>Technologies</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .filter((item) => item.technologies.includes("Next"))
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
      </div>
    </div>
  );
}
