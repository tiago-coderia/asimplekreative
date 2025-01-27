import Head from 'next/head';
import Image from 'next/image';
import BtnLocal from '../Buttons/local';
import Card from '../Card';

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-[70px] mt-[160px]">
      <div className="flex gap-4">
        <p className="text-gradient">
          Olá, eu sou o <strong>Tiago</strong>, de Blumenau, Brazil
        </p>
        <Image src="/hs.svg" width={20} height={20} className="hshaking" />
      </div>
      <div>
        <h1 className="text-gradient text-[56px] font-outfit leading-[3.8rem] text-center font-semibold">
          Designer, 3D, Marketing, <br />
          Prompt Engineer, Vídeos,
          <br />
          Gestor de Projetos.
        </h1>
      </div>
      <BtnLocal endereco="#lastest">Trabalhos recentes +</BtnLocal>
      <h2 className="text-gradient text-[24px] text-center font-medium">
        Colaborando com empresas e agências <br />
        para criar resultados impactantes.
      </h2>
      <div className="grid lg:grid-cols-4 gap-2 md:grid-cols-4 sm:grid-cols-2">
        <Card
          icon="icon-acessibility"
          title="UX & UI"
          description="Desenvolvimento de interfaces modernas e intuitivas, focando em experiencia de usuário."
        />
        <Card
          icon="icon-webmobile"
          title="Gestão e Marketing"
          description="Planejamentos de Projetos e processos, focando em conversão e desempenho, aumentando ROI e trazendo o maior sucesso ao cliente."
        />
        <Card
          icon="icon-designcreative"
          title="Design & Creative"
          description="Amplo conhecimento de arte e web. Desde 2013 no ramo de desenvolvimento em ramo têxtil, metalúrgico e agencias de publicidade."
        />
        <Card
          icon="icon-development"
          title="Development"
          description="Desenvolvimento de interfaces Front-End utilizando linguagens e frameworks atuais, como NextJS e TailwindCSS"
        />
      </div>
    </div>
  );
};
export default Hero;
