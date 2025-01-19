import React from 'react';
import CardPortfolio from '../CardPortfolio';
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

        <CardPortfolio
          imgname="portfolio/art-port1"
          descricao="Social Media"
          endereco="https://www.behance.net/gallery/195252113/Social-Media"
        />
        <CardPortfolio
          imgname="portfolio/art-port2"
          descricao="Produtos 3D | Blender"
          endereco="https://www.behance.net/gallery/144664365/CGI-Only-for-Study-Blender"
        />
        <CardPortfolio
          imgname="portfolio/art-port3"
          descricao="Produtos 3D | ROCO | Blender"
          endereco="https://www.behance.net/gallery/142743033/CGI-Produtos-para-Site"
        />
        <CardPortfolio
          imgname="portfolio/art-port4"
          descricao="Catálogo e CGI | inDesign | Blender"
          endereco="https://www.behance.net/gallery/142744375/Catalogo-Roco"
        />
        <CardPortfolio
          imgname="portfolio/art-port5"
          descricao="Produto & CGI | FLANGE | ROCO"
          endereco="https://www.behance.net/gallery/142740533/CGI-Flange-de-Ar-Condicionado-ROCO"
        />
        <CardPortfolio
          imgname="portfolio/art-port6"
          descricao="Social Media"
          endereco="https://www.behance.net/gallery/142737147/Social-Media-CGI-Photoshop"
        />
      </div>
      <div className="my-20 text-center">
        <h1 className="text-gradient text-5xl font-semibold leading-normal text-center">
          Veja alguns vídeos que fiz? <br />
          Modelado em 3D e Renderizado em Premiere.
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <iframe
          width="100%"
          height="625"
          src="https://www.youtube.com/embed/o7hBgRj9tq4?si=ultG3yZtq1BZ1usG&rel=0&vq=hd1080"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          autoplay
        ></iframe>
        <iframe
          width="100%"
          height="625"
          src="https://www.youtube.com/embed/T6NvisegglQ?si=3RxZu_fAd2Dzw6uw&rel=0&vq=hd1080"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          autoplay
        ></iframe>
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
