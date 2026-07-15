/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#0B0E14",
        panel: "#12161F",
        "panel-raised": "#161B26",
        line: "#232939",
        "line-bright": "#323A4E",
        ink: "#E7E9EE",
        "ink-muted": "#8A93A6",
        "ink-dim": "#5B6478",
        amber: "#E8A33D",
        "amber-dim": "#8C6425",
        cyan: "#4FD1C5",
        "cyan-dim": "#2A6E68"
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(232,163,61,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,163,61,0.06) 1px, transparent 1px)"
      },
      keyframes: {
        trace: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" }
        },
        "pulse-node": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        }
      },
      animation: {
        trace: "trace 2.4s ease-out forwards",
        "pulse-node": "pulse-node 2.6s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        blink: "blink 1.1s step-end infinite"
      }
    }
  },
  plugins: []
};
