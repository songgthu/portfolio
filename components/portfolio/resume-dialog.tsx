"use client";

import { Download, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ResumeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resumePath: string;
};

export function ResumeDialog({ open, onOpenChange, resumePath }: ResumeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="resume-dialog">
        <DialogHeader>
          <DialogTitle>Resume preview</DialogTitle>
        </DialogHeader>

        <div className="resume-dialog__preview">
          <div className="resume-dialog__frame">
            <img
              alt="Preview of Trinh Hoai Song Thu's resume"
              className="resume-dialog__image"
              src="/resume-preview.png"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="secondary" asChild>
            <a href={resumePath} target="_blank" rel="noreferrer">
              <ExternalLink className="size-4" />
              Open in new tab
            </a>
          </Button>
          <Button asChild>
            <a href={resumePath} download>
              <Download className="size-4" />
              Download resume
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
