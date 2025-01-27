import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [buttonText, setButtonText] = useState('Vamos conversar?');
  const email = 'tiiago.dsg@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setButtonText('Email Copiado!'); // Atualiza o texto do botão
        setTimeout(() => setButtonText('Vamos conversar?'), 2000); // Restaura o texto após 2 segundos
      })
      .catch((err) => {
        console.error('Erro ao copiar texto:', err);
      });
  };

  return (
    <div className="min-h-[100px] flex items-center justify-between border-b-[1px] border-default border-opacity-10 flex-col sm:flex-row py-4 sm:py-0">
      <div>
        <button
          onClick={copyToClipboard}
          className="link-primary flex items-center gap-4"
          target="_blank"
        >
          <div className="iconHeader">
            <ion-icon name="mail-outline" />
          </div>
          <p>{buttonText}</p>
        </button>
      </div>
      <div className="flex gap-10">
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
          href="https://dribbble.com//askdot"
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

export default Header;
