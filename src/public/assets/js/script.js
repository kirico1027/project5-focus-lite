"use strict";

function initHeaderDrawer() {
  const header = document.getElementById("top-header");
  const toggle = document.getElementById("top-header-menu-toggle");
  const drawer = document.getElementById("top-header-drawer");
  if (!header || !toggle || !drawer) return;

  const closeEls = drawer.querySelectorAll("[data-drawer-close]");
  const navLinks = drawer.querySelectorAll("a");

  const setOpen = (open) => {
    header.classList.toggle("top-header--menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    if (open) {
      drawer.removeAttribute("hidden");
      document.documentElement.style.overflow = "hidden";
    } else {
      drawer.setAttribute("hidden", "");
      document.documentElement.style.overflow = "";
    }
  };

  toggle.addEventListener("click", () => {
    const open = !header.classList.contains("top-header--menu-open");
    setOpen(open);
  });

  closeEls.forEach((el) => {
    el.addEventListener("click", () => setOpen(false));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

function initPageTop() {
  document.querySelectorAll("[data-pagetop]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href.charAt(0) !== "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderDrawer();
  initPageTop();
});
