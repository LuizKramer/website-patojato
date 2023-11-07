const NossaHistoria2 = () => {
    return (
        // <section id="sobre" className="sobre container">
        //     <h1>Projeto diferenciado, inovador e único!</h1>
        //     <p>A Pato a Jato é uma equipe de eficiência energética da Universidade Tecnológica
        //         Federal do Paraná, Campus Pato Branco.

        //         Buscamos sempre algo a mais: uma nova maneira de perceber o crescimento educacional,
        //         pessoal e profissional.<br></br>

        //         Nosso objetivo é tornar nossos membros profissionais capacitados. Eles não serão
        //         apenas especialistas preparados tecnicamente, mas, da mesma forma,
        //         gestores que terão excelentes habilidades
        //         de comunicação, liderança e capacidade
        //         de trabalhar em grupo.
        //     </p>

        // </section>
      <section className="fixed-text">
      <h1 className="#sobre" id="sobre">Projeto diferenciado, inovador e único!</h1>

      <div className='flex'>
        <div className="w-1/2 p-4 content">
          <p>A Pato a Jato é uma equipe de eficiência energética da Universidade Tecnológica
            Federal do Paraná, Campus Pato Branco.
            <br/><br/>
            Buscamos sempre algo a mais: uma nova maneira de perceber o crescimento educacional,
            pessoal e profissional.
            <br/><br/>
            Nosso objetivo é tornar nossos membros profissionais capacitados. Eles não serão
            apenas especialistas preparados tecnicamente, mas, da mesma forma,
            gestores que terão excelentes habilidades
            de comunicação, liderança e capacidade
            de trabalhar em grupo.
          </p>
        </div>
        <div className="w-1/2 p-4 images">
          <img src="/foto-equipe.png" alt="" loading="lazy" className="imageEquipe"/>
        
          <img src="/imagem-grupo.png" alt="" loading="lazy" />
        </div>
      </div>
    </section>
    );
};

export default NossaHistoria2;
