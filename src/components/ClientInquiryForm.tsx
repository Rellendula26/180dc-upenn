"use client";

import { FormEvent, useId, useState } from "react";
import { inquiryForm, site } from "@/data/site";
import { organizationTypes, referralSources, supportOptions } from "@/data/inquiry";

type Status = "idle" | "unconfigured";

export function ClientInquiryForm() {
  const formId = useId();
  const statusId = `${formId}-status`;
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    if (!inquiryForm.endpoint) {
      event.preventDefault();
      setStatus("unconfigured");
    }
  }

  return (
    <form
      className="grid gap-8"
      action={inquiryForm.endpoint ?? undefined}
      method={inquiryForm.method}
      onSubmit={onSubmit}
    >
      <fieldset className="grid gap-5">
        <legend className="font-serif text-2xl text-ink">About you</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id={`${formId}-name`} label="Name" name="name" autoComplete="name" required />
          <Field id={`${formId}-email`} label="Email" name="email" type="email" autoComplete="email" required />
          <Field id={`${formId}-role`} label="Role" name="role" autoComplete="organization-title" required />
          <Field
            id={`${formId}-website`}
            label="Organization website"
            name="website"
            type="url"
            autoComplete="url"
            required={false}
          />
        </div>
      </fieldset>

      <fieldset className="grid gap-5">
        <legend className="font-serif text-2xl text-ink">Your organization</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id={`${formId}-organization`} label="Organization" name="organization" autoComplete="organization" required />
          <SelectField
            id={`${formId}-type`}
            label="Organization type"
            name="organizationType"
            options={organizationTypes}
            required
          />
          <Field id={`${formId}-location`} label="Location" name="location" autoComplete="address-level2" required />
          <SelectField
            id={`${formId}-support`}
            label="Desired support"
            name="desiredSupport"
            options={supportOptions}
            required
          />
        </div>
        <SelectField
          id={`${formId}-referral`}
          label="How did you hear about us?"
          name="referral"
          options={referralSources}
          required
        />
      </fieldset>

      <fieldset className="grid gap-5">
        <legend className="font-serif text-2xl text-ink">The challenge</legend>
        <Field
          id={`${formId}-primary`}
          label="Primary challenge"
          name="primaryChallenge"
          required
        />
        <div>
          <label htmlFor={`${formId}-story`} className="text-sm font-semibold text-ink">
            Tell us about the challenge your organization is facing.
          </label>
          <textarea
            id={`${formId}-story`}
            name="challenge"
            required
            rows={7}
            className="field mt-2"
          />
        </div>
      </fieldset>

      <div className="flex flex-col items-start gap-4">
        <button
          type="submit"
          className="inline-flex h-12 items-center bg-navy px-6 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-navy-soft"
        >
          Submit inquiry
        </button>
        <p id={statusId} role="status" className="max-w-xl text-sm leading-relaxed text-muted">
          {status === "unconfigured"
            ? site.email
              ? `This form is not receiving submissions yet. Email ${site.email} and we will follow up.`
              : "This form is not receiving submissions yet. A contact email will be posted here once the chapter confirms it."
            : "Share the problem in plain language. A member of the chapter will follow up if the form is a fit."}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="field mt-2"
      />
    </div>
  );
}

function SelectField({
  id,
  label,
  name,
  options,
  required,
}: {
  id: string;
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      <select id={id} name={name} required={required} className="field mt-2" defaultValue="">
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
