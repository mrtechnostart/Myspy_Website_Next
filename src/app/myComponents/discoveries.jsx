import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Discoveries({ header, desc, childDesc, hrefTo }) {
  return (
    <Card className="max-w-md min-h-10">
      <CardHeader className="text-center">
        <CardTitle className="text-lg lg:text-2xl">{header}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="items-center">
        <p className="leading-7 [&:not(:first-child)]:mt-6">{childDesc}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>
          {" "}
          <a href={hrefTo} target="_blank">
            Read More
          </a>{" "}
        </Button>
      </CardFooter>
    </Card>
  );
}
