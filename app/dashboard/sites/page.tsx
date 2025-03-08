import { Button } from "@/components/ui/button";
import { File, FileIcon, Plus } from "lucide-react";
import Link from "next/link";

export default function SitesRoute() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild>
          <Link href="/dashboard/sites/new">
            <Plus className="mr-2 size-4" />
            Create Site
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 bg-primary/10">
        <FileIcon className="size-10 text-primary"></FileIcon>
        <h2 className="font-semibold text-xl mt-4">No sites yet</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Create a site to get started
        </p>
        <Button asChild>
          <Link href="/dashboard/sites/new">
            <Plus className="mr-2 size-4" />
            Create Site
          </Link>
        </Button>
      </div>
    </>
  );
}
