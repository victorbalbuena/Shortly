import Card from "./Card";
import imageBrand from "./../assets/icon-brand-recognition.svg";
import imageRecors from "./../assets/icon-detailed-records.svg";
import imageCustomizable from "./../assets/icon-fully-customizable.svg";

export default function Statics() {
  const cardsContent = [
    {
      id: 1,
      title: "Brand Recognition",
      paragraph:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      image: imageBrand,
    },
    {
      id: 2,
      title: "Detailed Recors",
      paragraph:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      image: imageRecors,
    },
    {
      id: 3,
      title: "Fully Customizable",
      paragraph:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      image: imageCustomizable,
    },
  ];

  return (
    <section className="max-w-6xl p-10 mx-auto mb-24">
      <div className="font-poppins text-center mb-10 md:mb-28">
        <h2 className="font-bold text-xl md:text-5xl mb-8">Advanced Statics</h2>
        <p className="text-gray-500 md:text-xl max-w-[600px] mx-auto">
          Track how your links are performing across the web with our advanced
          statics dashboard.
        </p>
      </div>
      <div className="flex flex-col gap-14 md:flex-row md:flex-wrap">
        {cardsContent.map((element) => (
          <Card
            title={element.title}
            paragraph={element.paragraph}
            image={element.image}
            key={element.id}
          ></Card>
        ))}
      </div>
    </section>
  );
}
