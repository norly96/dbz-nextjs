import Image from "next/image";
import image from "@/assets/img.svg";

const HomePage = () => {
  return (
    <main className="flex flex-col flex-grow min-h-full mt-8 lg:flex-row items-strech lg:justify-center p-4">
      {/* Sección del texto */}
      <section className="flex flex-col flex-1 lg:justify-center 2xl:justify-start text-2xl lg:text-4xl lg:w-6/12 space-y-4 lg:space-y-6">
        <article className="flex flex-col">
          <h1 className="text-6xl lg:text-7xl 2xl:text-8xl text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] text-center">
            Enciclopedia DBZ
          </h1>

          <p className="font-mono text-center dark:text-white text-xg 2xl:text-3xl lg:text-2xl font-semibold leading-relaxed">
            Sumérgete en el vasto y emocionante universo de Dragon Ball Z. Aquí
            podrás descubrir todo sobre tus personajes favoritos, desde Goku y
            Vegeta hasta los villanos más temidos como Freezer y Majin Buu.
            Además, explora los misteriosos y fascinantes planetas donde se
            libran batallas épicas, como Namek, Vegeta, y muchos más. Ya seas un
            fan de toda la vida o alguien que está comenzando a conocer este
            increíble mundo, esta enciclopedia es el lugar perfecto para
            encontrar información detallada, imágenes y curiosidades sobre los
            héroes, villanos y lugares icónicos de Dragon Ball Z.
          </p>
        </article>
      </section>

      {/* Sección de la imagen */}
      <section className="w-full lg:w-auto flex flex-1 justify-center mt-6 lg:mt-0">
        <Image
          src={image}
          alt="Background Image Dragon Ball Z"
          width={800}
          height={400}
          className="drop-shadow-[0_35px_35px_rgba(255,255,255,0.5)] max-w-full h-auto"
        />
      </section>
    </main>
  );
};

export default HomePage;
