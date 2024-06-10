export default function About() {
  return (
    <div className="flex w-full flex-col items-center gap-10 px-10 md:px-0">
      <div className="max-w-sm">
        <h1 className="mb-3 text-3xl font-bold text-[#EA008C]">
          Sobre a Bolos da Rosa
        </h1>

        <p className="text-justify text-[#6D6875]">
          Bem-vindos à Bolos da Rosa! Aqui na Bolos da Rosa, transformamos cada
          receita em uma obra de arte, cheia de sabor e carinho. Fundada por
          Dona Rosa, nossa confeitaria nasceu da paixão por criar momentos
          especiais através dos bolos. Com anos de experiência na cozinha e um
          amor profundo pela confeitaria, Dona Rosa decidiu compartilhar suas
          delícias com o mundo, trazendo alegria para as mesas e eventos de
          muitas famílias.
        </p>
      </div>

      <div className="mt-10 flex max-w-sm flex-col">
        <h1 className="mb-3 text-2xl font-bold text-[#EA008C]">Nossa Missão</h1>

        <p className="max-w-2xl text-justify text-[#6D6875]">
          Nosso objetivo é adoçar os momentos mais importantes da sua vida. Seja
          um aniversário, casamento, batizado ou qualquer celebração, estamos
          aqui para tornar esses dias inesquecíveis. Na Bolos da Rosa,
          acreditamos que um bolo perfeito é aquele que une sabor, beleza e um
          toque de carinho em cada fatia.
        </p>
      </div>
    </div>
  )
}
