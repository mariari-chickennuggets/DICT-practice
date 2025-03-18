import React from "react";

const App = () => {
  const cards = [
    { id: 1, title: "meh cat", description: "meh", image: "https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg" },
    { id: 2, title: "crying cat", description: "meow meow meow meow", image: "https://i0.wp.com/thecaninebuddy.com/wp-content/uploads/2021/08/crying-cat-meme.jpg?w=2240&ssl=1" },
    { id: 3, title: "huh cat", description: "huh", image: "https://i.kym-cdn.com/editorials/icons/original/000/006/177/blackcatzoningout_meme.jpg" },
    { id: 4, title: "silly catto", description: "silly ah cat.", image: "https://i.pinimg.com/originals/b3/ee/c0/b3eec03459b57860fe1f898b7584683b.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFCF7] flex flex-col items-center py-10 px-5 font-[Poppins]">
      <h1 className="text-3xl font-bold text-[#020202] mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {cards.map((card) => (
          <div key={card.id} className="bg-[#F5E2C8] p-4 rounded-lg shadow-lg">
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold text-center text-[#020202] mt-3">{card.title}</h2>
            <p className="text-gray-700 mt-2 text-center">{card.description}</p>
            <div className="flex justify-center mt-4">
              <button className="bg-[#BD1E1E] text-white px-4 py-2 rounded-lg hover:bg-[#D88373] transition">
                 More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
