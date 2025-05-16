import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      data-slot="card"
      className={cn("rounded-[10px] bg-white", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-400 pt-400", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-footer" className={cn(className)} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="card-title"
      className={cn("typo-1 text-gray-900", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("typo-2-medium text-gray-500", className)}
      {...props}
    />
  );
}
export { Card, CardContent, CardFooter, CardTitle, CardDescription };
