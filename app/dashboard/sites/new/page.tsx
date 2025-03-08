import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function NewSiteRoute() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <Card className="max-w-[450px]">
        <CardHeader>
          <CardTitle>Create a new site</CardTitle>
          <CardDescription>Create a new site to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="grid gap-2">
              <Label>Site name</Label>
              <Input placeholder="Site Name" />
            </div>
            <div className="grid gap-2">
              <Label>Sub Directory</Label>
              <Input placeholder="Sub Directory" />
            </div>
            <div className="grid gap-2">
              <Label>Description</Label>
              <Textarea placeholder="Description" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
