import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Signature move: shutter image (hero opens from an edge)
      gsap.utils.toArray<HTMLElement>("[data-shutter]").forEach((el) => {
        const img = el.querySelector("img");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
        tl.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power3.out" }
        );
        if (img) {
          tl.fromTo(img, { scale: 1.12 }, { scale: 1, duration: 1.1, ease: "power3.out" }, 0);
        }
      });

      // Entrance for parts of every section: heading, then text, then picture
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      // One moving picture: slow drift on the hero photograph
      const heroImg = document.querySelector("#inicio [data-shutter] img");
      if (heroImg) {
        gsap.to(heroImg, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: true },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
