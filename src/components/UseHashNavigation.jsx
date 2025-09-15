import { useEffect, useState } from "react";

export function useHashNavigation(defaultPage = "home") {
  const [page, setPage] = useState(() => window.location.hash.slice(1) || defaultPage);

  useEffect(() => {
    const onHashChange = () => {
      setPage(window.location.hash.slice(1) || defaultPage);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, [defaultPage]);

  const navigate = (to) => {
    window.location.hash = to;
  };

  return [page, navigate];
}
