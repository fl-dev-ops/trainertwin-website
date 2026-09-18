"use client";

import { Button } from "@/components/Button";

/**
 * Same two fields as trainertwin.com/invite. Night chrome for the footer CTA;
 * light for the in-page founding band.
 */
export function InviteSubmitForm({
  surface = "night",
}: {
  surface?: "night" | "light";
}) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={
        surface === "light"
          ? "invite-form invite-form--light"
          : "invite-form invite-form--night"
      }
    >
      <label htmlFor={`invite-contact-${surface}`} className="sr-only">
        Phone or Email
      </label>
      <input
        id={`invite-contact-${surface}`}
        name="contact"
        type="text"
        inputMode="email"
        autoComplete="email"
        required
        placeholder="Phone or Email"
      />
      <label htmlFor={`invite-profile-${surface}`} className="sr-only">
        LinkedIn or Website
      </label>
      <input
        id={`invite-profile-${surface}`}
        name="profile"
        type="text"
        inputMode="url"
        autoComplete="url"
        required
        placeholder="LinkedIn or Website"
      />
      <Button type="submit" variant="strong" size="md">
        Submit
      </Button>
    </form>
  );
}
