export default function Strategy() {
  const items = [
    "GameFi 🎮",
    "SoFi 🏠",
    "Hedge Funds 🐻",
    "VC Funds 💰",
    "Blockchains 🔗",
    "Public Goods 🌎",
    "dApps 📱",
  ];
  const items2 = [
    'Infrastructure Services 🏗️',
    'Wallets 🏦	',
    'NFTs 🖼️',
    'DeFi 💸',
    "VC Funds 💰",
    "GameFi 🎮",
    "Hedge Funds 🐻",
  ]
  return (
    <div className="padding py-16 lg:py-28 font-bold bg-white  text-center" id="strategy">
      <p className="text-xl ">
        Delivering marketing strategy across crypto companies
      </p>
      <div className="flex cursor-grab text-[22px] lg:text-2xl overflow-hidden whitespace-nowrap mt-10 lg:mt-14">
        <div className="flex animate items-center">
          {items.map((data, key) => (
            <div className="mx-10">{data}</div>
          ))}
        </div>
        <div className="flex animate items-center">
          {items.map((data, key) => (
            <div className="mx-10">{data}</div>
          ))}
        </div>
      </div>
      <div className="flex cursor-grab text-[22px] lg:text-2xl overflow-hidden whitespace-nowrap mt-9 lg:mt-14">
        <div className="flex animate2 items-center">
          {items2.map((data, key) => (
            <div className="mx-10">{data}</div>
          ))}
        </div>
        <div className="flex animate2 items-center">
          {items2.map((data, key) => (
            <div className="mx-10">{data}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
