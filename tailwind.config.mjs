/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,md,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.25rem",
      },
    },
    screens: {
      tablet: "768px",
      desktop: "1280px",
    },
    fontFamily: {
      sans: ["'IBM Plex Sans'", "sans-serif"],
      serif: ["'IBM Plex Serif'", "serif"],
    },
    colors: {
      "rp-base": "hsl(var(--rp-base) / <alpha-value>)",
      "rp-surface": "hsl(var(--rp-surface) / <alpha-value>)",
      "rp-overlay": "hsl(var(--rp-overlay) / <alpha-value>)",
      "rp-muted": "hsl(var(--rp-muted) / <alpha-value>)",
      "rp-subtle": "hsl(var(--rp-subtle) / <alpha-value>)",
      "rp-text": "hsl(var(--rp-text) / <alpha-value>)",
      "rp-love": "hsl(var(--rp-love) / <alpha-value>)",
      "rp-gold": "hsl(var(--rp-gold) / <alpha-value>)",
      "rp-rose": "hsl(var(--rp-rose) / <alpha-value>)",
      "rp-pine": "hsl(var(--rp-pine) / <alpha-value>)",
      "rp-foam": "hsl(var(--rp-foam) / <alpha-value>)",
      "rp-iris": "hsl(var(--rp-iris) / <alpha-value>)",
      "rp-highlight-low": "hsl(var(--rp-highlight-low) / <alpha-value>)",
      "rp-highlight-med": "hsl(var(--rp-highlight-med) / <alpha-value>)",
      "rp-highlight-high": "hsl(var(--rp-highlight-high) / <alpha-value>)",
    },
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
      },
      animation: {
        "fade-in-bottom": "fade-in-bottom 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [
    function baseStyles({ addBase }) {
      // Outline
      addBase({
        "*": {
          "@apply focus:transition focus:outline-none focus-visible:ring-2 focus-visible:ring-rp-highlight-high focus-visible:ring-offset-2 focus-visible:ring-offset-rp-base": {},
        },
      })

      // Scrollbar
      addBase({
        "*": {
          "scrollbarWidth": "thin",
          "scrollbarGutter": "stable",

          "::-webkit-scrollbar": {
            "@apply h-2 w-2": {},
          },

          "::-webkit-scrollbar-track": {
            "@apply bg-rp-highlight-med": {},
          },

          "::-webkit-scrollbar-thumb": {
            "@apply bg-rp-muted": {},
          },
        },
      })
    },
    function articleStyles({ addComponents }) {
      addComponents({
        article: {
          "&": {
            "@apply mx-auto max-w-xl px-4 py-20 text-rp-text": {},

            "@screen tablet": {
              "@apply max-w-2xl": {},
            },

            "@screen desktop": {
              "@apply max-w-3xl": {},
            },
          },

          "h1, h2, h3, h4": {
            "@apply font-serif": {},
          },

          "h1": {
            "@apply text-3xl text-center": {},

            "@screen tablet": {
              "@apply text-5xl leading-tight": {},
            },

            "@screen desktop": {
              "@apply text-6xl leading-tight": {},
            },

            "~ p:first-of-type": {
              "@apply mt-16": {},

              "@screen tablet": {
                "@apply mt-24": {},
              },

              "@screen desktop": {
                "@apply mt-28": {},
              },
            },
          },

          "h2": {
            "@apply mt-12 mb-4 text-2xl": {},

            "@screen tablet": {
              "@apply mb-4 mt-14 text-3xl": {},
            },

            "@screen desktop": {
              "@apply mt-16 mb-5 text-4xl": {},
            },
          },

          "h3": {
            "@apply mt-9 mb-3 text-lg": {},

            "&:has(+ p)": {
              "@apply mb-1": {},
            },

            "@screen tablet": {
              "@apply mt-10 mb-3 text-xl": {},

              "&:has(+ p)": {
                "@apply mb-2": {},
              },
            },

            "@screen desktop": {
              "@apply mt-12 mb-4 text-2xl": {},

              "&:has(+ p)": {
                "@apply mb-3": {},
              },
            },
          },

          "p, li, h4": {
            "@apply m-0 mb-6 leading-7 tracking-wide": {},

            "@screen tablet": {
              "@apply text-lg leading-8": {},
            },

            "@screen desktop": {
              "@apply text-xl leading-9": {},
            },
          },

          "p:not(blockquote p):not(section.footnotes p):first-of-type:first-letter": {
            "@apply float-left leading-[1em] text-[3.5rem] font-bold mr-[.1em] -mt-px": {},

            "@screen tablet": {
              "@apply text-[4rem]": {},
            },

            "@screen desktop": {
              "@apply text-[4.5rem]": {},
            },
          },

          "a": {
            "@apply underline decoration-rp-rose decoration-2 underline-offset-2": {},
            "@apply text-rp-text transition": {},
            "@apply hover:decoration-rp-pine focus:decoration-rp-pine": {},
            "@apply data-[footnote-ref]:no-underline data-[footnote-ref]:text-rp-rose data-[footnote-ref]:hover:text-rp-pine": {},
          },

          "ol, ul": {
            "@apply mb-6 marker:text-rp-muted": {},
          },

          "ol": {
            "@apply list-decimal pl-6": {},

            "+ ul": {
              "@apply pl-10": {},
            },

            "@screen tablet": {
              "@apply pl-7": {},

              "+ ul": {
                "@apply pl-12": {},
              },
            },

            "@screen desktop": {
              "@apply pl-8": {},

              "+ ul": {
                "@apply pl-13": {},
              },
            },
          },

          "ul": {
            "@apply list-disc pl-5": {},

            "+ ol:not([start])": {
              "@apply pl-11": {},

              "+ ul": {
                "@apply pl-15": {},
              },
            },

            "@screen tablet": {
              "+ ol:not([start])": {
                "@apply pl-12": {},

                "+ ul": {
                  "@apply pl-17": {},
                },
              },
            },
          },

          "li": {
            "@apply mb-1": {},

            ":is(ul, ol)": {
              "@apply mb-4 mt-2": {},
            },

            ":is(ol)": {
              "@apply pl-6": {},
            },

            ":is(ul)": {
              "@apply list-[circle]": {},
            },

            "@screen tablet": {
              ":is(ol)": {
                "@apply pl-7": {},
              },
            },
          },

          "strong": {
            "@apply font-bold": {},
          },

          "hr": {
            "@apply my-4 h-20 border-none before:flex before:h-full before:items-center before:justify-center before:text-2xl before:tracking-widest before:text-rp-muted before:content-['***']": {},
          },

          "figure": {
            "@apply relative -mx-4 my-8 flex flex-col items-center": {},

            "> div": {
              "@apply w-fit border-y border-x-0 border-rp-highlight-med bg-rp-surface min-[577px]:border-x": {},

              "img": {
                "@apply mx-auto p-2 tablet:p-4": {},
              },
            },

            "figcaption": {
              "@apply mt-2 px-4 text-sm italic tracking-wide text-rp-subtle desktop:text-base": {},
            },
          },

          "blockquote": {
            "@apply bg-rp-surface text-rp-text border-rp-highlight-med": {},
            "@apply relative italic -mx-4 mb-10 p-4 border-y min-[577px]:border-x": {},
            "@apply before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[5px] before:bg-rp-rose": {},
            "@apply before:-translate-x-[3px] max-[576px]:before:-translate-x-px": {},

            "> *": {
              "@apply text-rp-text": {},
            },

            "> *:last-child": {
              "@apply mb-0": {},
            },
          },

          "aside": {
            "@apply pl-2 mb-6 tracking-wide text-sm leading-6": {},

            "@screen tablet": {
              "@apply pl-4 text-base leading-7": {},
            },

            "@screen desktop": {
              "@apply pl-6 text-lg leading-8": {},
            },
          },
        },
      })
    },
  ],
}
