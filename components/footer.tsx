import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-slate-600">
      <small className="mb-2  block text-xs">&copy; {currentYear} Seiya . All rights Reserved.</small>
      <p className="text-xs">
        Built with React & Next.js, Typescript, Tailwind CSS, Framer Motion,
        React Email & Resend, Vercel Hosting.
      </p>
    </footer>
  );
}
