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
        <div className="flex flex-row justify-center gap-10 border-y-1 border-[#d8b56a] py-5 whitespace-pre-line">
          {information.map((information) => (
            <div
              key={information.title}
              className="pr-15 pt-2 border-r-1 border-[#d8b56a] last:border-r-0 flex flex-row gap-5"
            >
              <img className="size-10" src={information.logo} />
              <div className="flex-col">
                <h2 className="text-[14px] leading-2">{information.title}</h2>
                <p className="text-[13px] pt-2 font-thin">{information.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Details;
