"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

function Toaster(props: ToasterProps) {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "toast",
          title: "toast-title",
          description: "toast-description",
          actionButton: "toast-action",
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
