import { AsciiCharacter } from "@/components/AsciiCharacter";

/**
 * A harness for looking at `AsciiCharacter` on its own: off-white ground, the
 * character centred and large, nothing else on the page. Delete this route
 * once the component has a home — it holds no logic of its own.
 */
export default function AsciiCharacterPage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        background: "#fbfbfa",
        display: "grid",
        placeItems: "center",
        padding: "4vmin",
      }}
    >
      <div style={{ width: "min(88vmin, 820px)", aspectRatio: "1 / 1" }}>
        <AsciiCharacter
          autoRotate
          particleCount={4000}
          rotationDuration={9000}
        />
      </div>
    </main>
  );
}
