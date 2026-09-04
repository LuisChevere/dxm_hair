import Leaf from "../assets/Logos/Leaf.png";
import Shield from "../assets/Logos/Shield.png";
import Clock from "../assets/Logos/Clock.png";
import Box from "../assets/Logos/Box.png";

const information = [
  {
    title: "Premium Ingredients",
    info: "Carefully selected.\nSuperior results.",
    logo: Leaf,
  },
  {
    title: "Performance Driven",
    info: "Tested in the real world.\nMade to perform.",
    logo: Shield,
  },
  {
    title: "All Day Control",
    info: "Long lasting hold.\nSuperior results.",
    logo: Clock,
  },
  {
    title: "Free Shipping",
    info: "On orders over $75\nin the US.",
    logo: Box,
  },
];

function Details() {
  return (
    <section>
      <div className="pt-25">
        <div className="flex flex-row justify-center gap-20 border-y-1 border-[#d8b56a] py-5 whitespace-pre-line">
          {information.map((information) => (
            <div
              key={information.title}
              className="pr-15 border-r-1 border-[#d8b56a]"
            >
              <img classname="w-[2px]" src={information.logo} />
              <h2 className="text-[14px]">{information.title}</h2>
              <p className="text-[13px] pt-2 font-thin">{information.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Details;
