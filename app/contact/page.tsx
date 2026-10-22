
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const contactItems = [
  {
    number: "01",
    title: "PHONE",
    description: "For project inquiries and direct communication.",
    label: "Call Arman",
    href: "tel:+989105106627",
  },
  {
    number: "02",
    title: "EMAIL",
    description: "Share your ideas and tell us about your project.",
    label: "Send an email",
    href: "https://mail.google.com/mail/?view=cm&to=samiyantannaz1%40gmail.com",
  },
  {
    number: "03",
    title: "WHATSAPP",
    description: "Let's discuss your project directly.",
    label: "Chat on WhatsApp",
    href: "https://wa.me/989105106627",
  },
];

const projectTypes = [
  "Interior Design",
  "Architecture",
  "Commercial Project",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  projectType: "",
  location: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setStatus("");

    const name = form.name.trim();
    const email = form.email.trim();
    const location = form.location.trim();
    const message = form.message.trim();

    if (
      !name ||
      !email ||
      !form.projectType ||
      !location ||
      !message
    ) {
      setError("Please complete all fields before continuing.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setError(
        "The contact form is not configured yet. Please try again later."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `Project Inquiry — ${form.projectType}`,
            from_name: "Arman Vaziri Website",
            name,
            email,
            project_type: form.projectType,
            project_location: location,
            message,
            botcheck: "",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your inquiry."
        );
      }

      setStatus(
        "Thank you! Your inquiry has been sent successfully. I'll be in touch soon."
      );

      setForm(initialForm);
    } catch (err) {
      console.error("Contact form submission failed:", err);

      setError(
        err instanceof Error &&
          err.message !== "Failed to fetch"
          ? err.message
          : "Something went wrong. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm font-light text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#c9a46a]";

  const labelClass =
    "mb-1 block text-[10px] tracking-[0.2em] text-white/50";

  return (
    <main className="min-h-screen overflow-hidden bg-[#1a1a1a] px-5 pt-36 pb-24 text-white md:px-12 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-20 text-center md:mb-24"
        >
          <span className="mb-6 block text-[10px] tracking-[0.4em] text-white/40 md:text-xs">
            GET IN TOUCH
          </span>

          <h1 className="text-3xl font-light tracking-[0.06em] md:text-5xl">
            LET&apos;S{" "}
            <span className="font-serif italic text-white/70">
              TALK
            </span>
          </h1>

          <div className="mx-auto mt-7 mb-7 h-2 w-2 rotate-45 bg-[#c9a46a]" />

          <p className="mx-auto max-w-2xl text-sm font-light leading-8 tracking-wide text-white/50 md:text-base">
            Every great space begins with an idea. Tell me about
            your vision, and let&apos;s explore how we can bring it
            to life.
          </p>
        </motion.header>

        {/* Contact methods */}
        <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-8">
          {contactItems.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-start"
            >
              <span className="mb-7 text-xs tracking-[0.25em] text-[#c9a46a]/80">
                {item.number} / {item.title}
              </span>

              <h2 className="mb-3 text-xl font-light">
                {item.title === "PHONE"
                  ? "Call directly"
                  : item.title === "EMAIL"
                    ? "Write an email"
                    : "Chat on WhatsApp"}
              </h2>

              <p className="mb-7 max-w-xs text-sm leading-7 text-white/45">
                {item.description}
              </p>

              <a
                href={item.href}
                target={
                  item.title === "EMAIL" ||
                  item.title === "WHATSAPP"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.title === "EMAIL" ||
                  item.title === "WHATSAPP"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="mt-auto border-b border-[#c9a46a]/50 pb-2 text-xs tracking-[0.12em] text-white/80 transition-colors duration-300 hover:border-[#c9a46a] hover:text-[#c9a46a]"
              >
                {item.label} ↗
              </a>
            </motion.article>
          ))}
        </div>

        {/* Project inquiry form */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-24 border-t border-white/10 pt-12 md:mt-32 md:pt-16"
        >
          <div className="mb-12 max-w-xl">
            <span className="text-[10px] tracking-[0.3em] text-[#c9a46a]">
              PROJECT INQUIRY
            </span>

            <h2 className="mt-4 text-2xl font-light md:text-3xl">
              Tell me about your project.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/45">
              Share a few details about your project, and let&apos;s
              start a conversation.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-x-12 gap-y-9 md:grid-cols-2"
          >
            <div>
              <label htmlFor="name" className={labelClass}>
                FULL NAME *
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                className={inputClass}
                placeholder="Your name"
                maxLength={100}
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                EMAIL ADDRESS *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
                className={inputClass}
                placeholder="you@example.com"
                maxLength={254}
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="projectType" className={labelClass}>
                PROJECT TYPE *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={form.projectType}
                onChange={(event) =>
                  setForm({
                    ...form,
                    projectType: event.target.value,
                  })
                }
                className={`${inputClass} [color-scheme:dark]`}
                required
                disabled={isSubmitting}
              >
                <option value="" disabled>
                  Select project type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="location" className={labelClass}>
                PROJECT LOCATION *
              </label>
              <input
                id="location"
                name="location"
                value={form.location}
                onChange={(event) =>
                  setForm({ ...form, location: event.target.value })
                }
                className={inputClass}
                placeholder="City, Country"
                maxLength={150}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className={labelClass}>
                TELL ME ABOUT YOUR PROJECT *
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
                className={`${inputClass} min-h-32 resize-y`}
                placeholder="Your ideas, requirements, or project details..."
                maxLength={5000}
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Honeypot spam protection */}
            <div
              aria-hidden="true"
              className="hidden"
            >
              <label htmlFor="botcheck">Leave this field empty</label>
              <input
                id="botcheck"
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="text-sm leading-6 text-red-400 md:col-span-2"
              >
                {error}
              </p>
            )}

            {status && (
              <p
                role="status"
                className="text-sm leading-6 text-[#c9a46a] md:col-span-2"
              >
                {status}
              </p>
            )}

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-5 border border-[#c9a46a]/60 px-7 py-4 text-xs tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#c9a46a] hover:text-[#1a1a1a] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "SENDING..." : "SEND INQUIRY"}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {isSubmitting ? "…" : "↗"}
                </span>
              </button>
            </div>
          </form>
        </motion.section>

        <div className="mt-24 border-t border-white/10 pt-10 text-center md:mt-32 md:pt-14">
          <p className="text-xs tracking-[0.2em] text-white/40">
            HAVE A PROJECT IN MIND?
          </p>
          <p className="mt-4 text-xl font-light md:text-2xl">
            Let&apos;s make it happen.
          </p>
        </div>
      </div>
    </main>
  );
}
