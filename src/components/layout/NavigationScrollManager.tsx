"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return false;

  const target = document.getElementById(id);

  if (!target) return false;

  target.scrollIntoView({ block: "start", behavior: "smooth" });
  return true;
}

function scheduleHashScroll(hash: string) {
  const timeouts: ReturnType<typeof setTimeout>[] = [];
  const delays = [0, 50, 150, 350, 700, 1200];
  let didScroll = false;

  delays.forEach((delay) => {
    const timeout = setTimeout(() => {
      if (didScroll) return;

      requestAnimationFrame(() => {
        didScroll = scrollToHash(hash);
      });
    }, delay);

    timeouts.push(timeout);
  });

  return () => {
    timeouts.forEach((timeout) => clearTimeout(timeout));
  };
}

export function NavigationScrollManager() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (window.location.hash) return;

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    if (!window.location.hash) return;

    return scheduleHashScroll(window.location.hash);
  }, [pathname]);

  useEffect(() => {
    function handleHashChange() {
      scheduleHashScroll(window.location.hash);
    }

    function handleAnchorClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>("a[href*='#']");
      if (!link) return;

      const url = new URL(link.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;

      const didScroll = scrollToHash(url.hash);
      if (!didScroll && window.location.pathname !== "/") {
        event.preventDefault();
        router.push(`/${url.hash}`);
        return;
      }

      if (!didScroll) return;

      event.preventDefault();
      window.history.pushState(null, "", url.hash);
    }

    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [router]);

  return null;
}
