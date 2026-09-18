import Image from "next/image";
import { Container, Eyebrow, SectionTitle } from "./primitives";

/**
 * A field of tiles with the tools surfacing across it, after the reference
 * capture. The six exports already carry their own dark rounded tile, so a
 * logo is placed straight onto the grid rather than into a tile drawn here.
 *
 * Each tool is drawn at three cells and lit at one of them at a time, which
 * is what keeps six on screen without ever repeating one: three instances
 * sharing a keyframe a third of a lap apart can never overlap, and no two
 * tools are given the same cell.
 */
const COLS = 11;
const ROWS = 6;

/** Must match the duration on `.l-tool` in landing.css. */
const LAP = 12;

/**
 * Where each tool surfaces, as [column, row] on the grid. Eighteen cells, each
 * used once, so two tools can never land on the same one. The three are kept
 * far apart so a tool crosses the field rather than flickering in place; the
 * first of each three is spread down the rows, because those six are what a
 * reader sees at rest and under reduced motion. The middle of rows 3 and 4 is
 * left clear for the heading.
 */
const TOOLS = [
  {
    src: "/tt/integration-1.png",
    cells: [
      [2, 1],
      [7, 2],
      [8, 5],
    ],
  },
  {
    src: "/tt/integration-2.png",
    cells: [
      [10, 2],
      [2, 4],
      [11, 1],
    ],
  },
  {
    src: "/tt/integration-3.png",
    cells: [
      [1, 3],
      [11, 5],
      [4, 6],
    ],
  },
  {
    src: "/tt/integration-4.png",
    cells: [
      [10, 4],
      [5, 1],
      [2, 5],
    ],
  },
  {
    src: "/tt/integration-5.png",
    cells: [
      [5, 5],
      [11, 3],
      [8, 1],
    ],
  },
  {
    src: "/tt/integration-6.png",
    cells: [
      [9, 6],
      [1, 2],
      [4, 2],
    ],
  },
];

export function Integrations() {
  return (
    <section
      id="integrate"
      className="relative overflow-hidden bg-white py-20 md:py-[104px]"
    >
      <Container className="relative">
        {/* The grid keeps its own width and bleeds off both edges on a narrow
            screen rather than shrinking the tiles to texture. */}
        <div className="relative left-1/2 w-[max(100%,880px)] -translate-x-1/2">
          <Grid>
            {Array.from({ length: COLS * ROWS }, (_, i) => (
              <span
                key={i}
                className="aspect-square rounded-[12px] bg-[var(--tt-blue-50)]"
              />
            ))}
          </Grid>

          {/* The tools sit in their own grid over the tiles: auto-placement
              steps around explicitly placed items, so mixing the two in one
              grid would push the empty tiles into extra rows. */}
          <div className="absolute inset-0">
            <Grid>
              {TOOLS.flatMap((tool, t) =>
                tool.cells.map(([col, row], k) => (
                  <Image
                    key={`${t}-${k}`}
                    src={tool.src}
                    alt=""
                    aria-hidden="true"
                    width={96}
                    height={96}
                    data-rest={k === 0 ? "" : undefined}
                    className="l-tool aspect-square h-auto w-full rounded-[12px]"
                    style={{
                      gridColumn: col,
                      gridRow: row,
                      // Staggered per tool as well as per cell, so the field
                      // changes continuously instead of in six-at-once beats.
                      animationDelay: `${(t * 0.6 + (k * LAP) / 3).toFixed(1)}s`,
                    }}
                  />
                )),
              )}
            </Grid>
          </div>

          {/* Clears the middle for the heading and fades the field out at every
              edge — white on white, so no mask compositing is needed. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 40% 46% at 50% 50%, #fff 0%, #fff 40%, rgba(255,255,255,0) 72%)," +
                "linear-gradient(to bottom, #fff 0%, rgba(255,255,255,0) 9%, rgba(255,255,255,0) 91%, #fff 100%)," +
                "linear-gradient(to right, #fff 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0) 95%, #fff 100%)",
            }}
          />
        </div>

        {/* Sits on the container, not on the field: the field bleeds past the
            viewport on a narrow screen and would carry the heading off with
            it. */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <div className="flex flex-col items-center text-center">
            <Eyebrow data-reveal className="text-[var(--l-eyebrow)]">
              Integration
            </Eyebrow>
            <SectionTitle
              data-reveal
              data-reveal-delay="80"
              className="mt-4 max-w-[620px]"
            >
              Where all you can integrate it
            </SectionTitle>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="grid gap-2 md:gap-3"
      style={{
        gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}
