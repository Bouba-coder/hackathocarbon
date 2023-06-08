import CardStat from "./CardStat";

const HomeRH = () => {
  return (
    <>
      <CardStat title="Nombre de consultants" number="50" arrived="2" />
      <CardStat
        title="Nombre d'entreprises partenaires"
        number="10"
        arrived="1"
      />
      <CardStat
        title="Nombre de formations proposées"
        number="50"
        arrived="2"
      />
    </>
  );
};

export default HomeRH;
