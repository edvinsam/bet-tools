import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-4 flex items-center gap-2 text-sm text-slate-500">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={index} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="transition hover:text-slate-900"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900">
                {item.label}
              </span>
            )}

            {!isLast && <ChevronRight className="h-4 w-4" />}
          </span>
        );
      })}
    </nav>
  );
}