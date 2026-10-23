"use client";

import { useEffect, useRef, useState } from "react";

const heroImages = [
  "/images/hero-01.png",
  "/images/hero-02.png",
  "/images/hero-03.png",
  "/images/hero-04.png",
  "/images/hero-05.png",
  "/images/hero-06.png",
  "/images/hero-07.png",
];

const DISPLAY_TIME = 5000;
const TRANSITION_DURATION = 1000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [isChanging, setIsChanging] = useState(false);
  const [show, setShow] = useState(false);

  const heroRef = useRef<HTMLElement | null>(null);

  const timerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const transitionRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /*
   * =========================================================
   * HERO REVEAL
   * =========================================================
   */

  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setShow(true);
    }, 2500);

    return () => {
      clearTimeout(revealTimer);
    };
  }, []);

  /*
   * =========================================================
   * SLIDER
   * =========================================================
   */

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const nextIndex =
        (current + 1) % heroImages.length;

      setNext(nextIndex);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsChanging(true);
        });
      });

      transitionRef.current = setTimeout(() => {
        setCurrent(nextIndex);
        setNext(null);
        setIsChanging(false);
      }, TRANSITION_DURATION);
    }, DISPLAY_TIME);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      if (transitionRef.current) {
        clearTimeout(transitionRef.current);
      }
    };
  }, [current]);

  /*
   * =========================================================
   * SCROLL
   * =========================================================
   */

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    let frame = 0;

    const handleScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;

        /*
         * -----------------------------------------------------
         * HERO CONTENT PROGRESS
         * -----------------------------------------------------
         *
         * متن Hero خیلی زودتر از تصویر خارج می‌شود.
         */

        const contentProgress = Math.min(
          Math.max(scrollY / (viewportHeight * 0.8), 0),
          1
        );

        const content =
          hero.querySelector(
            ".hero-content-layer"
          ) as HTMLElement | null;

        if (content) {
          content.style.transform =
            `translateY(${-viewportHeight * 0.75 * contentProgress}px)`;

          content.style.opacity =
            `${1 - contentProgress}`;
        }

        /*
         * -----------------------------------------------------
         * SMALL TITLE
         * -----------------------------------------------------
         */

        const firstTitle =
          hero.querySelector(
            ".hero-title-small"
          ) as HTMLElement | null;

        if (firstTitle) {
          firstTitle.style.transform =
            `translateX(${window.innerWidth * 0.12 * contentProgress}px)`;
        }

        /*
         * -----------------------------------------------------
         * HERO IMAGE SCALE
         * -----------------------------------------------------
         *
         * تصویر باقی می‌ماند اما آرام Zoom می‌شود.
         */

        const slider =
          hero.querySelector(
            ".hero-desktop"
          ) as HTMLElement | null;

        const mobileSlider =
          hero.querySelector(
            ".hero-mobile"
          ) as HTMLElement | null;

        const imageProgress = Math.min(
          Math.max(scrollY / (viewportHeight * 2.2), 0),
          1
        );

        const scale =
          1 + imageProgress * 0.14;

        if (slider) {
          slider.style.transform =
            `scale(${scale})`;
        }

        if (mobileSlider) {
          mobileSlider.style.transform =
            `scale(${scale})`;
        }

        /*
         * -----------------------------------------------------
         * DARKNESS
         * -----------------------------------------------------
         *
         * Hero هنوز وجود دارد.
         * فقط آرام‌آرام تاریک می‌شود.
         */

        const heroOverlay =
          hero.querySelector(
            ".hero-overlay"
          ) as HTMLElement | null;

        if (heroOverlay) {
          const darkness =
            Math.min(
              Math.max(
                (scrollY - viewportHeight * 0.35) /
                  (viewportHeight * 1.8),
                0
              ),
              1
            );

          heroOverlay.style.opacity =
            `${darkness * 0.82}`;
        }

        /*
         * -----------------------------------------------------
         * WARM LIGHT
         * -----------------------------------------------------
         */

        const warmLight =
          hero.querySelector(
            ".hero-warm-light"
          ) as HTMLElement | null;

        if (warmLight) {
          const lightProgress =
            Math.min(
              Math.max(
                (scrollY - viewportHeight * 0.9) /
                  (viewportHeight * 1.8),
                0
              ),
              1
            );

          warmLight.style.opacity =
            `${lightProgress * 0.85}`;

          warmLight.style.transform =
            `translate(-50%, 0) scale(${
              0.75 + lightProgress * 0.6
            })`;
        }

        /*
         * -----------------------------------------------------
         * HERO BACKGROUND
         * -----------------------------------------------------
         */

        const blackLayer =
          hero.querySelector(
            ".hero-black-layer"
          ) as HTMLElement | null;

        if (blackLayer) {
          const blackProgress =
            Math.min(
              Math.max(
                (scrollY - viewportHeight * 1.2) /
                  (viewportHeight * 1.8),
                0
              ),
              1
            );

          blackLayer.style.opacity =
            `${blackProgress * 0.72}`;
        }

        /*
         * -----------------------------------------------------
         * POINTER EVENTS
         * -----------------------------------------------------
         */

        if (contentProgress >= 1) {
          hero.style.pointerEvents = "none";
        } else {
          hero.style.pointerEvents = "auto";
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`hero ${
        show ? "hero-show" : ""
      }`}
    >

      {/* =====================================================
          DESKTOP HERO
          ===================================================== */}

      <div className="hero-desktop">

        <div className="hero-current">

          <div className="hero-half hero-top">
            <div className="hero-image-wrapper">
              <img
                src={heroImages[current]}
                alt=""
              />
            </div>
          </div>

          <div className="hero-half hero-bottom">
            <div className="hero-image-wrapper">
              <img
                src={heroImages[current]}
                alt=""
              />
            </div>
          </div>

        </div>

        {next !== null && (
          <div className="hero-next">

            <div
              className={`hero-half hero-top ${
                isChanging
                  ? "hero-enter-top"
                  : ""
              }`}
            >
              <div className="hero-image-wrapper">
                <img
                  src={heroImages[next]}
                  alt=""
                />
              </div>
            </div>

            <div
              className={`hero-half hero-bottom ${
                isChanging
                  ? "hero-enter-bottom"
                  : ""
              }`}
            >
              <div className="hero-image-wrapper">
                <img
                  src={heroImages[next]}
                  alt=""
                />
              </div>
            </div>

          </div>
        )}

      </div>

      {/* =====================================================
          MOBILE HERO
          ===================================================== */}

      <div className="hero-mobile">

        <img
          className="hero-mobile-image"
          src={heroImages[current]}
          alt=""
        />

        {next !== null && (
          <img
            className={`hero-mobile-image hero-mobile-next ${
              isChanging
                ? "hero-mobile-next-changing"
                : ""
            }`}
            src={heroImages[next]}
            alt=""
          />
        )}

      </div>

      {/* =====================================================
          DARK OVERLAY
          ===================================================== */}

      <div className="hero-overlay" />

      {/* =====================================================
          BLACK ATMOSPHERE
          ===================================================== */}

      <div className="hero-black-layer" />

      {/* =====================================================
          WARM LIGHT
          ===================================================== */}

      <div className="hero-warm-light" />

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="hero-content-layer">

        <div className="hero-divider" />

      <a
     href="/arman-vaziri/contact#home-form"
  className="hero-cta"
>
          <span>
            Send
            <br />
            request
          </span>
<svg
  viewBox="0 0 20 10"
  aria-hidden="true"
  className="hero-cta-arrow"
  fill="none"
  stroke="#e5cca8"
  strokeWidth="0.8"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M1 5h17m-4-4 4 4-4 4" />
</svg>
          <div className="hero-cta-circle">
            <div className="hero-cta-circle-inner" />
          </div>
        </a>

        <div className="hero-title">

          <div className="hero-title-item hero-title-first">
            <span className="hero-title-small">
              full cycle studio
            </span>
          </div>

          <div className="hero-title-item hero-title-second">
            <span>
              of <em>design</em> and architecture
            </span>
          </div>

        </div>

        <div className="hero-scroller">
          <span />
        </div>

      </div>

    </section>
  );
}