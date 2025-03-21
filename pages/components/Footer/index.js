import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex justify-between min-h-[50px] flex-col sm:flex-row pb-4 sm:pb-0 text-center sm:text-start">
      <p className="text-gradient">
        © 2024 | Todos os direitos reservados | ASK.
      </p>
      <div className="flex gap-10 justify-center sm:justify-start">
        <Link
          href="https://www.linkedin.com/in/jonathantiiago/"
          className="link-primary"
          target="_blank"
        >
          Linkedin
        </Link>
        <Link
          href="https://www.behance.net/askdot"
          className="link-primary"
          target="_blank"
        >
          Behance
        </Link>
        <Link
          href="https://www.dribbble.com/askdot"
          className="link-primary"
          target="_blank"
        >
          Dribbble
        </Link>
        <Link href="/curriculo.docx" className="link-primary" target="_blank">
          Curriculum
        </Link>
      </div>
    </div>
  );
};
export default Footer;
