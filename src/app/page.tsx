import Image from "next/image";
import image from "@/assets/img.svg";

const HomePage = () => {
  return (
    <main className="flex flex-col lg:flex-row h-full items-center lg:justify-center p-4">
      {/* Sección del texto */}
      <section className="flex flex-col justify-center items-center text-2xl lg:text-4xl w-full lg:w-6/12 space-y-4 lg:space-y-6">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] text-center">
          Enciclopedia DBZ
        </h1>

        <p className="font-mono text-center dark:text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed">
          Sumérgete en el vasto y emocionante universo de Dragon Ball Z. Aquí
          podrás descubrir todo sobre tus personajes favoritos, desde Goku y
          Vegeta hasta los villanos más temidos como Freezer y Majin Buu.
          Además, explora los misteriosos y fascinantes planetas donde se libran
          batallas épicas, como Namek, Vegeta, y muchos más. <br />
          Ya seas un fan de toda la vida o alguien que está comenzando a conocer
          este increíble mundo, esta enciclopedia es el lugar perfecto para
          encontrar información detallada, imágenes y curiosidades sobre los
          héroes, villanos y lugares icónicos de Dragon Ball Z.
        </p>
      </section>

      {/* Sección de la imagen */}
      <section className="w-full lg:w-auto flex justify-center mt-6 lg:mt-0">
        <Image
          src={image}
          alt="Background Image Dragon Ball Z"
          width={600}
          height={400}
          className="drop-shadow-[0_35px_35px_rgba(255,255,255,0.5)] max-w-full h-auto"
        />
      </section>
    </main>
  );
};

export default HomePage;
