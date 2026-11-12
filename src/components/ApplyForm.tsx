"use client";

import { useState } from "react";

const positions = ["Cleaner", "Supervisor", "Transporter", "Admin / Sales"];
const field = "mt-1.5 w-full rounded-sm border border-line bg-white px-4 py-3 text-base placeholder:text-muted/60 focus:border-brand";

/**
 * The old Wix form posted to Wix's backend. This version needs no server:
 * it turns the answers into a WhatsApp message to the office number.
 */
export function ApplyForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = [
      "Hello, I would like to apply to join Shine White Cleaning.",
      `Name: ${d.get("first")} ${d.get("last")}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone")}`,
      `Position: ${d.get("position")}`,
      `Available from: ${d.get("start")}`,
    ].join("\n");
    window.open(`https://api.whatsapp.com/send?phone=601121283866&text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="card grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
      <label className="text-sm font-semibold">
        First Name
        <input name="first" required autoComplete="given-name" className={field} />
      </label>
      <label className="text-sm font-semibold">
        Last Name
        <input name="last" required autoComplete="family-name" className={field} />
      </label>
      <label className="text-sm font-semibold">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="text-sm font-semibold">
        Phone
        <input name="phone" type="tel" required autoComplete="tel" className={field} />
      </label>
      <label className="text-sm font-semibold">
        Position you apply for
        <select name="position" required defaultValue="" className={field}>
          <option value="" disabled>Select Position</option>
          {positions.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-semibold">
        Available start date
        <input name="start" type="date" required className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="btn btn-primary">Apply Now</button>
        <p role="status" className="text-sm text-muted">
          {sent
            ? "Thanks for submitting! Send the WhatsApp message that just opened and we will call you as soon as possible."
            : "Your application opens in WhatsApp so you can send it straight to our admin."}
        </p>
      </div>
    </form>
  );
}
