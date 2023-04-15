import events from "./csvjson.json";
import { Card, CardHeader, CardBody, CardFooter, Box } from "@chakra-ui/react";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";

function App() {
  return (
    <Box bgColor={"#161625"}>
      <Center>
        <Heading as="h1" size="2xl" color={"blue.500"} paddingY={"10"}>
          Events at LPU
        </Heading>
      </Center>
      <div>
        <SimpleGrid columns={3} spacing={5} minChildWidth="400px" padding={"4"}>
          {events.map((event) =>
            event.Title ? (
              <Card color={"white"} bgColor={"blackAlpha.700"}>
                <CardHeader fontWeight={"extrabold"} fontSize={"2xl"}>
                  {event.Title}
                </CardHeader>
                <CardBody color={"white"}>{event.Description}</CardBody>
                <CardBody color={"white"}>{event.Objective}</CardBody>
                <CardFooter color={"blue.700"}>{event["Organized By"]}</CardFooter>
              </Card>
            ) : null
          )}
        </SimpleGrid>
      </div>
    </Box>
  );
}

export default App;
