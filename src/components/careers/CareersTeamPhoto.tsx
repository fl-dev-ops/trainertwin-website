/**
 * Team photo on the careers hero. Shown as the JPEG — no dither treatment.
 */
export function CareersTeamPhoto() {
  return (
    <div className="careers-team">
      <img
        className="careers-team-img"
        src="/assets/team.jpg"
        alt="TrainerTwin team"
        width={1504}
        height={479}
      />
    </div>
  );
}
