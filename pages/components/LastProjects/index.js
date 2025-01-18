import React from 'react';
import CardPortfolio from '../CardPortfolio';
import Link from 'next/link';
import Button from '../Buttons/primary';

const LastProjects = () => {
  return (
    <div
      className="mb-2 border-b-[1px] border-default border-opacity-10 pb-10"
      id="lastest"
    >
      <div className="relative flex py-8 items-center">
        <span className="flex-grow border-t border-default border-opacity-10"></span>
        <h1 className="text-gradient text-5xl font-semibold leading-normal">
          Projetos...
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <CardPortfolio
          imgname="site-eskambo"
          descricao="Eskambo | Wordpress | Elementor"
          endereco="https://eskambo.com.br"
        />
        <CardPortfolio
          imgname="site-tatimkt"
          descricao="Tati Fashion MKT | Worpdress"
          endereco="http://tatifashionmkt.com.br"
        />
        <CardPortfolio
          imgname="site-agetex"
          descricao="Agetex | Elementor | Wordpress"
          endereco="https://agetex.com.br"
        />
        <CardPortfolio
          imgname="site-agetexplus"
          descricao="Agetex | Javascript | .DotNet | Bootstrap"
          endereco="https://agetexplus.com.br"
        />
        <CardPortfolio
          imgname="site-ceigentemiuda"
          descricao="CEI Gente Miúda | Worpdress (Offline)"
          endereco="http://ceigentemiuda.com.br"
        />

        <CardPortfolio
          imgname="site-clinicaochoa"
          descricao="Clinica Ochoa | Worpdress"
          endereco="http://clinicaochoa.com.br"
        />
      </div>
      <div className="relative flex py-8 items-center justify-center ">
        <Button endereco="http://behance.net/askdot">
          <div className="flex items-center gap-4">
            Veja muito mais trabalhos aqui
            <ion-icon name="add-circle-outline"></ion-icon>
          </div>
        </Button>
      </div>
    </div>
  );
};
export default LastProjects;
