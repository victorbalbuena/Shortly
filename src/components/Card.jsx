export default function Card({ title, paragraph, image }) {
  return (
    <div className="basis-1/4 flex-1 bg-white font-poppins rounded-md px-10 pt-16 pb-10 relative mt-10 md:mt-0">
      <img
        src={image}
        alt="icon"
        className="absolute -top-12 left-0 right-0 md:left-8  md:right-44 mx-auto mb-8 p-5 rounded-full bg-purple-950"
      />
      <h2 className="text-lg md:text-2xl font-bold mb-5">{title}</h2>
      <p className="text-gray-600">{paragraph}</p>
    </div>
  );
}
