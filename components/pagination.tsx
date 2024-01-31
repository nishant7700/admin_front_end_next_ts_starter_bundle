'use client';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export function PaginationComponent({
  pages,
  page,
}: {
  pages: number;
  page: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const createQueryString = useCallback(
    (name: string, value: string | number) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value.toString());

      return params.toString();
    },
    [searchParams]
  );
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Pagination>
      <PaginationContent>
        {/* Pagination till pages and start from 1 with active as page */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              // <pathname>?sort=asc
              if (page > 0) {
                router.push(
                  pathname + '?' + createQueryString('pageNumber', page - 1)
                );
              }
            }}
          />
        </PaginationItem>
        {Array.from({ length: pages }, (_, i) => i + 1).map((pageNum) => {
          if (
            pageNum === page ||
            pageNum === 1 ||
            pageNum === pages ||
            pageNum === page - 1 ||
            pageNum === page + 1
          ) {
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  onClick={() => {
                    // <pathname>?sort=asc

                    router.push(
                      pathname + '?' + createQueryString('pageNumber', pageNum)
                    );
                  }}
                  isActive={page === pageNum}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          } else if (pageNum === page - 2 || pageNum === page + 2) {
            return (
              <PaginationItem key={pageNum}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          } else {
            return null;
          }
        })}

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              // <pathname>?sort=asc
              if (page < pages) {
                router.push(
                  pathname + '?' + createQueryString('pageNumber', page + 1)
                );
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
