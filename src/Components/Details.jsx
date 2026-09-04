const details = [
  {
    title: "Premium Ingredients",
    info: "Carefully selected.\nSuperior results.",
    logo: {},
  },
  {
    title: "Performance Driven",
    info: "Tested in the real world.\nMade to perform.",
    logo: {},
  },
  {
    title: "All Day Control",
    info: "Long lasting hold.\nSuperior results.",
    logo: {},
  },
  {
    title: "Free Shipping",
    info: "On orders over $75\nin the US.",
    logo: {},
  },
];

function Details() {
  return (
    <section>
      <div className="pt-25">
        <div className="flex flex-row justify-center gap-25 border-y-1 border-[#d8b56a] py-5 whitespace-pre-line">
          {details.map((detail) => (
            <div key={detail.title}>
              <h2 className="text-[14px]">{detail.title}</h2>
              <p className="text-[13px] pt-2 font-thin">{detail.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Details;
