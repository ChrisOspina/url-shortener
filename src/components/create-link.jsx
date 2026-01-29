import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { UrlState } from "@/context";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Error from "./error";
import { Input } from "./ui/input";

const CreateLink = () => {
  const { user } = UrlState();
  const navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost">Create New Link</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl">Create New</DialogTitle>
        </DialogHeader>
        <Input id="title" placeholder="Short Link's Title" />
        <Error message={"An error occurred"} />
        <Input id="longUrl" placeholder="Enter your Loooong URL" />
        <Error message={"An error occurred"} />
        <div className="flex items-center gap-2">
          <Card className="p-2">trimrr.in</Card> /
          <Input id="customUrl" placeholder="Custom Link (optional)" />
        </div>
        <Error message={"An error occurred"} />
        <DialogFooter>
          <Button variant="destructive">Create Link</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateLink;
