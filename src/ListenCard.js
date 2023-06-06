import React, { useState, useEffect } from "react";
import CardTabs from "./Tabs";
import CardItem from "./Items";
import SearchBar from "./SearchBar";
import FilterDropdown from "./Dropdown";
import "./ListenCard.css";

const CardListing = () => {
  const [selectedTab, setSelectedTab] = useState("Your");
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [ownerId, setOwnerId] = useState(1);
  const tabs = ["Your", "All", "Blocked"];
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    const mockApiResponse = {
      data: [
        {
          name: "Mixmax",
          budget_name: "Software subscription",
          owner_id: 1,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "9 November",
          limit: 100,
          status: "active",
        },
        {
          name: "Quickbooks",
          budget_name: "Software subscription",
          owner_id: 2,
          spent: {
            value: 50,
            currency: "SGD",
          },
          available_to_spend: {
            value: 250,
            currency: "SGD",
          },
          card_type: "subscription",
          limit: 10,
          status: "active",
        },
        {
          name: "Minmax",
          budget_name: "Software subscription",
          owner_id: 1,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "30 April",
          limit: 100,
          status: "active",
        },
        {
          name: "Volopay",
          budget_name: "Software subscription",
          owner_id: 3,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "9 Feb",
          limit: 100,
          status: "active",
        },

        {
          name: "Netflix",
          budget_name: "Software subscription",
          owner_id: 4,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "24 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Amazon",
          budget_name: "Software subscription",
          owner_id: 5,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "9 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Hotstar",
          budget_name: "Software subscription",
          owner_id: 6,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "23 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Jio",
          budget_name: "Software subscription",
          owner_id: 7,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "9 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Spotify",
          budget_name: "Software subscription",
          owner_id: 8,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "9 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Youtube",
          budget_name: "Software subscription",
          owner_id: 9,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "9 November",
          limit: 100,
          status: "active",
        },
        {
          name: "Gana",
          budget_name: "Software subscription",
          owner_id: 10,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "9 April",
          limit: 100,
          status: "active",
        },
        {
          name: "Crunchyroll",
          budget_name: "Software subscription",
          owner_id: 11,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "18 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Wynk",
          budget_name: "Software subscription",
          owner_id: 12,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "subscription",
          expiry: "22 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Sony",
          budget_name: "Software subscription",
          owner_id: 13,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "subscription",
          expiry: "9 May",
          limit: 100,
          status: "active",
        },
        {
          name: "Canva",
          budget_name: "Software subscription",
          owner_id: 14,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "subscription",
          expiry: "9 December",
          limit: 100,
          status: "active",
        },
        {
          name: "Adobe",
          budget_name: "Software subscription",
          owner_id: 15,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "2 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Mycrosoft",
          budget_name: "Software subscription",
          owner_id: 16,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "subscription",
          expiry: "12 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "JioCinema",
          budget_name: "Software subscription",
          owner_id: 17,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "subscription",
          expiry: "9 March",
          limit: 100,
          status: "active",
        },
        {
          name: "Mixmax",
          budget_name: "Software subscription",
          owner_id: 18,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "9 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Mixmax",
          budget_name: "Software subscription",
          owner_id: 19,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "subscription",
          expiry: "9 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Mixmax",
          budget_name: "Software subscription",
          owner_id: 20,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "subscription",
          expiry: "9 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Mixmax",
          budget_name: "Software subscription",
          owner_id: 21,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "subscription",
          expiry: "9 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Mixmax",
          budget_name: "Software subscription",
          owner_id: 22,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "burner",
          expiry: "9 Feb",
          limit: 100,
          status: "active",
        },
        {
          name: "Mixmax",
          budget_name: "Software subscription",
          owner_id: 23,
          spent: {
            value: 100,
            currency: "SGD",
          },
          available_to_spend: {
            value: 1000,
            currency: "SGD",
          },
          card_type: "subscription",
          expiry: "9 Feb",
          limit: 100,
          status: "active",
        },
      ],
    };

    setCards(mockApiResponse.data);
  }, []);

  const filteredCards = cards.filter((card) => {
    // Apply filters based on searchQuery and filterType
    const cardNameMatch = card.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const cardTypeMatch = filterType === "All" || card.card_type === filterType;
    return cardNameMatch && cardTypeMatch;
  });

  return (
    <div>
      <div className="card-listing">
        <CardTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterDropdown filterType={filterType} setFilterType={setFilterType} />
        <div className="card-items">
          {filteredCards.map((card, index) => (
            <CardItem key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardListing;

// import React, { useState, useEffect } from "react";
// import CardTabs from "./Tabs";
// import CardItem from "./Items";
// import SearchBar from "./SearchBar";
// import FilterDropdown from "./Dropdown";

// const CardListing = () => {
//   const [cards, setCards] = useState([]);
//   const [selectedTab, setSelectedTab] = useState("Your");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterType, setFilterType] = useState("All");
//   const [page, setPage] = useState(1);
//   const [perPage, setPerPage] = useState(10);
//   const [total, setTotal] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   // Fetch cards data from the API or use the provided JSON structure
//   const fetchCards = async () => {
//     setIsLoading(true);
//     try {
//       // Replace the URL with your actual API endpoint
//       const response = await fetch(
//         `https://api.example.com/cards?page=${page}&per_page=${perPage}`
//       );
//       const data = await response.json();
//       setCards((prevCards) => [...prevCards, ...data.data]);
//       setTotal(data.total);
//     } catch (error) {
//       console.error("Error fetching cards:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCards();
//   }, [page, perPage]);

//   // Filter cards based on the selected tab, search query, and filter type
//   const filteredCards = cards.filter((card) => {
//     const isTabMatch = selectedTab === "Your" ? card.owner_id === 1 : true;
//     const isSearchMatch = card.name
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     const isFilterMatch = filterType === "All" || card.card_type === filterType;

//     return isTabMatch && isSearchMatch && isFilterMatch;
//   });

//   // Load more cards when the user scrolls to the bottom
//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop ===
//       document.documentElement.offsetHeight
//     ) {
//       if (cards.length < total) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <CardTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
//       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       <FilterDropdown filterType={filterType} setFilterType={setFilterType} />

//       <div className="card-list">
//         {filteredCards.map((card, index) => (
//           <CardItem key={index} card={card} />
//         ))}
//       </div>

//       {isLoading && <p>Loading...</p>}
//     </div>
//   );
// };

// export default CardListing;
