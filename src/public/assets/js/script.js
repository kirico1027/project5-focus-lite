"use strict";

function initHeaderDrawer() {
  const header = document.getElementById("top-header");
  const toggle = document.getElementById("top-header-menu-toggle");
  const drawer = document.getElementById("top-header-drawer");
  if (!header || !toggle || !drawer) return null;

  const closeEls = drawer.querySelectorAll("[data-drawer-close]");
  const navLinks = drawer.querySelectorAll("a:not([data-profile-open])");

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
    if (event.key !== "Escape") return;
    if (!header.classList.contains("top-header--menu-open")) return;
    setOpen(false);
  });

  return { header, setOpen };
}

function initProfilePanel(drawerApi) {
  const panel = document.getElementById("profile-panel");
  if (!panel) return;

  const openTriggers = document.querySelectorAll("[data-profile-open]");
  const closeBtn = panel.querySelector("[data-profile-close]");
  const scrollKeys = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Spacebar"]);
  let scrollY = 0;

  const isScrollableTarget = (target) => {
    if (!(target instanceof Element)) return false;
    return Boolean(target.closest(".profile-panel__scroll"));
  };

  const onWheel = (event) => {
    const scrollEl = event.target instanceof Element ? event.target.closest(".profile-panel__scroll") : null;
    if (!scrollEl) {
      event.preventDefault();
      return;
    }

    // パネル端でホイールしたとき、背景へスクロールが伝播しないようにする
    const { scrollTop, scrollHeight, clientHeight } = scrollEl;
    const atTop = scrollTop <= 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
    if ((event.deltaY < 0 && atTop) || (event.deltaY > 0 && atBottom)) {
      event.preventDefault();
    }
  };

  const onTouchMove = (event) => {
    if (isScrollableTarget(event.target)) return;
    event.preventDefault();
  };

  const onKeyDownScroll = (event) => {
    if (!scrollKeys.has(event.key)) return;
    if (isScrollableTarget(event.target)) return;
    event.preventDefault();
  };

  // overflow: hidden は使わない（右端スクロールバーが消えて幅が変わるため）
  // 背景スクロールのみイベントで止めて、スクロールバー領域を維持する
  const lockScroll = () => {
    scrollY = window.scrollY;
    document.documentElement.classList.add("is-profile-scroll-locked");
    document.addEventListener("wheel", onWheel, { passive: false });
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("keydown", onKeyDownScroll);
  };

  const unlockScroll = () => {
    document.documentElement.classList.remove("is-profile-scroll-locked");
    document.removeEventListener("wheel", onWheel);
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("keydown", onKeyDownScroll);
    window.scrollTo(0, scrollY);
  };

  const closeDrawerIfOpen = () => {
    if (!drawerApi || !drawerApi.header.classList.contains("top-header--menu-open")) return;
    drawerApi.setOpen(false);
  };

  const dialog = panel.querySelector(".profile-panel__dialog");
  let closeTimer = 0;

  const setOpen = (open) => {
    window.clearTimeout(closeTimer);

    if (open) {
      // 先に表示して閉じ位置を確定 → 次フレームで開く（スライド発火）
      panel.removeAttribute("hidden");
      closeDrawerIfOpen();
      lockScroll();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          panel.classList.add("profile-panel--open");
        });
      });
      return;
    }

    // 先に閉じアニメ → 完了後に hidden
    panel.classList.remove("profile-panel--open");
    const finishClose = () => {
      panel.setAttribute("hidden", "");
      unlockScroll();
    };

    if (!dialog) {
      finishClose();
      return;
    }

    const onTransitionEnd = (event) => {
      if (event.target !== dialog || event.propertyName !== "transform") return;
      dialog.removeEventListener("transitionend", onTransitionEnd);
      finishClose();
    };

    dialog.addEventListener("transitionend", onTransitionEnd);
    closeTimer = window.setTimeout(() => {
      dialog.removeEventListener("transitionend", onTransitionEnd);
      finishClose();
    }, 450);
  };

  openTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      setOpen(true);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => setOpen(false));
  }

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!panel.classList.contains("profile-panel--open")) return;
    setOpen(false);
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

function initHomeFvReveal() {
  if (!document.body.classList.contains("home")) return;

  const targets = Array.from(document.querySelectorAll(".js-home-fv-reveal"));
  if (!targets.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const markRevealed = (el) => {
    el.classList.add("is-revealed");
  };

  const start = (immediate) => {
    targets.forEach((el) => {
      if (immediate) {
        el.classList.add("is-inview", "is-revealed");
        return;
      }

      el.classList.add("is-inview");
      el.addEventListener(
        "animationend",
        (event) => {
          if (event.target !== el) return;
          if (!String(event.animationName || "").startsWith("home-fv-")) return;
          markRevealed(el);
        },
        { once: true }
      );
    });
  };

  if (reduceMotion) {
    start(true);
    return;
  }

  // フォント差し替えで flex 中央が再計算されないよう、開始前に待つ（遅延上限あり）
  const startAfterFonts = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => start(false));
    });
  };

  const fontsReady =
    document.fonts && document.fonts.ready
      ? document.fonts.ready
      : Promise.resolve();
  const fontsTimeout = new Promise((resolve) => {
    window.setTimeout(resolve, 400);
  });

  Promise.race([fontsReady, fontsTimeout]).then(startAfterFonts);

  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    start(true);
  });
}

function initHomeScrollReveal() {
  if (!document.body.classList.contains("home")) return;

  const targets = Array.from(document.querySelectorAll(".js-scroll-reveal"));
  if (!targets.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const defaultStart = 90;
  const threshold = 0.12;

  const getRevealStart = (el) => {
    const raw = Number(el.getAttribute("data-reveal-start"));
    if (Number.isFinite(raw) && raw > 0 && raw <= 100) return raw;
    return defaultStart;
  };

  const getRootMargin = (start) => {
    const inset = Math.max(0, 100 - start);
    return `0px 0px -${inset}% 0px`;
  };

  const markRevealed = (el) => {
    el.classList.add("is-revealed");
  };

  const play = (el) => {
    if (el.classList.contains("is-inview")) return;
    el.classList.add("is-inview");
    el.addEventListener(
      "animationend",
      (event) => {
        if (event.target !== el) return;
        if (!String(event.animationName || "").startsWith("home-scroll-reveal")) return;
        markRevealed(el);
      },
      { once: true }
    );
  };

  const prime = () => {
    targets.forEach((el) => {
      el.classList.add("is-inview", "is-revealed");
    });
  };

  if (reduceMotion) {
    document.documentElement.classList.add("scroll-reveal-active");
    prime();
    return;
  }

  document.documentElement.classList.add("scroll-reveal-active");

  const isInitiallyVisible = (el) => {
    const rect = el.getBoundingClientRect();
    const viewBottom = window.innerHeight * (getRevealStart(el) / 100);
    return rect.top < viewBottom && rect.bottom > 0;
  };

  // start 値が異なる要素は別 Observer（独立した発火位置）
  const observers = new Map();

  const observe = (el) => {
    const start = getRevealStart(el);
    const rootMargin = getRootMargin(start);
    let observer = observers.get(rootMargin);

    if (!observer) {
      observer = new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            play(entry.target);
            currentObserver.unobserve(entry.target);
          });
        },
        { root: null, rootMargin, threshold }
      );
      observers.set(rootMargin, observer);
    }

    observer.observe(el);
  };

  targets.forEach((el) => {
    if (isInitiallyVisible(el)) {
      play(el);
      return;
    }
    observe(el);
  });

  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    prime();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const drawerApi = initHeaderDrawer();
  initProfilePanel(drawerApi);
  initPageTop();
  initHomeFvReveal();
  initHomeScrollReveal();
});
