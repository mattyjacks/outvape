"use client";

import { useEffect, useRef } from "react";

const THEMES = [
  { id: "default",   label: "Vape Black",  colors: ["#000000", "#00ff6a", "#ffffff"] },
  { id: "crimson",   label: "Crimson",     colors: ["#ffffff", "#e3000f", "#000000"] },
  { id: "cotton",    label: "Cotton Candy", colors: ["#ffb3de", "#a020f0", "#000000"] },
  { id: "matrix",    label: "Matrix",      colors: ["#00cc44", "#ffffff", "#000000"] },
  { id: "brutalist", label: "Brutalist",   colors: ["#ffffff", "#000000", "#e3000f"] },
];

export function ThemePicker() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const saved = sessionStorage.getItem("ov-theme") || "default";
    document.documentElement.setAttribute("data-theme", saved);

    function renderButtons(activeId: string) {
      const el = bar!;
      el.innerHTML = "";

      const label = document.createElement("span");
      label.textContent = "THEME";
      label.style.cssText = "font-size:0.6rem;font-weight:800;letter-spacing:0.18em;color:rgba(255,255,255,0.78);user-select:none;margin-right:14px;";
      el.appendChild(label);

      THEMES.forEach((t) => {
        const btn = document.createElement("button");
        const isActive = t.id === activeId;
        btn.title = t.label;
        btn.style.cssText = `
          width:48px;height:48px;border-radius:50%;cursor:pointer;margin:0 6px;padding:0;
          border:${isActive ? "3px solid rgba(255,255,255,0.7)" : "2px solid #000"};
          background:linear-gradient(to right, ${t.colors[0]} 0%, ${t.colors[0]} 33%, ${t.colors[1]} 33%, ${t.colors[1]} 66%, ${t.colors[2]} 66%, ${t.colors[2]} 100%);
          box-shadow:${isActive ? "0 0 0 2px rgba(255,255,255,0.4), 0 2px 8px rgba(0,0,0,0.4)" : "0 2px 4px rgba(0,0,0,0.4)"};
          transform:${isActive ? "scale(1.18)" : "scale(1)"};
          transition:transform 0.2s ease, box-shadow 0.2s ease;
          position:relative;overflow:hidden;outline:none;flex-shrink:0;
        `;

        const shine = document.createElement("span");
        shine.style.cssText = "position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 38% 38%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 45%, rgba(0,0,0,0.3) 100%);pointer-events:none;";
        btn.appendChild(shine);

        btn.addEventListener("click", () => {
          document.documentElement.setAttribute("data-theme", t.id);
          sessionStorage.setItem("ov-theme", t.id);
          renderButtons(t.id);
        });

        el.appendChild(btn);
      });
    }

    renderButtons(saved);
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 16px",
        minHeight: "72px",
        background: "rgba(10,10,10,0.92)",
        borderTop: "1px solid rgba(0,255,106,0.12)",
        borderBottom: "1px solid rgba(0,255,106,0.08)",
        backdropFilter: "blur(12px)",
        zIndex: 40,
        position: "relative",
      }}
    />
  );
}
