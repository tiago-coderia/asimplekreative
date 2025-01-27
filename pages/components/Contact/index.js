import React from 'react';
import Button from '../Buttons/primary';
import { useState } from 'react';

const Contact = () => {
  const [buttonText, setButtonText] = useState('Entrar em contato');
  const email = 'tiiago.dsg@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setButtonText('Email Copiado!'); // Atualiza o texto do botão
        setTimeout(() => setButtonText('Entrar em contato'), 2000); // Restaura o texto após 2 segundos
      })
      .catch((err) => {
        console.error('Erro ao copiar texto:', err);
      });
  };
  return (
    <div className="text-center flex flex-col items-center gap-4 border-b-[1px] pb-10 border-default  border-opacity-10">
      <h1 className="text-gradient text-5xl font-semibold leading-normal text-center">
        Vamos conversar? <br />
        Seja visto, seja lembrado!
      </h1>
      <span className="text-4xl animate-pulse">😀</span>
      <Button>
        <div className="flex items-center gap-4" onClick={copyToClipboard}>
          {buttonText}
          <ion-icon name="mail-unread-outline"></ion-icon>
        </div>
      </Button>
    </div>
  );
};
export default Contact;
