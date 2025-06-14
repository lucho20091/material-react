import { Button } from "@/components/ui/button"
import AccordionDemo from "@/components/Accordion"

function App() {
  return (
    <>
      <Button onClick={() => console.log('button clicked :D')}>Click me</Button>
      <AccordionDemo />
    </>
  )
}

export default App