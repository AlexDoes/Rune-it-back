import React, { Component } from "react";
import ReactSearchBox from "react-search-box";

// export const questArray = [
//   "A Kingdom Divided",
//   "A Night at the Theatre",
//   "A Porcine of Interest",
//   "A Soul's Bane",
//   "A Tail of Two Cats",
//   "A Taste of Hope",
//   "Animal Magnetism",
//   "Another Slice of H.A.M.",
//   "Below Ice Mountain",
//   "Beneath Cursed Sands",
//   "Between a Rock...",
//   "Big Chompy Bird Hunting",
//   "Biohazard",
//   "Black Knights' Fortress",
//   "Bone Voyage",
//   "Cabin Fever",
//   "Client of Kourend",
//   "Clock Tower",
//   "Cold War",
//   "Contact!",
//   "Cook's Assistant",
//   "Creature of Fenkenstrain",
//   "Darkness of Hallowvale",
//   "Death Plateau",
//   "Death to the Dorgeshuun",
//   "Demon Slayer",
//   "Desert Treasure I",
//   "Devious Minds",
//   "Doric's Quest",
//   "Dragon Slayer I",
//   "Dragon Slayer II",
//   "Dream Mentor",
//   "Druidic Ritual",
//   "Dwarf Cannon",
//   "Eadgar's Ruse",
//   "Eagles' Peak",
//   "Elemental Workshop I",
//   "Elemental Workshop II",
//   "Enakhra's Lament",
//   "Enlightened Journey",
//   "Ernest the Chicken",
//   "Fairytale I - Growing Pains",
//   "Fairytale II - Cure a Queen",
//   "Family Crest",
//   "Fight Arena",
//   "Fishing Contest",
//   "Forgettable Tale...",
//   "Garden of Tranquillity",
//   "Gertrude's Cat",
//   "Getting Ahead",
//   "Ghosts Ahoy",
//   "Goblin Diplomacy",
//   "Grim Tales",
//   "Haunted Mine",
//   "Hazeel Cult",
//   "Heroes' Quest",
//   "Holy Grail",
//   "Horror from the Deep",
//   "Icthlarin's Little Helper",
//   "Imp Catcher",
//   "In Aid of the Myreque",
//   "In Search of the Myreque",
//   "Jungle Potion",
//   "King's Ransom",
//   "Land of the Goblins",
//   "Legends' Quest",
//   "Lost City",
//   "Lunar Diplomacy",
//   "Making Friends with My Arm",
//   "Making History",
//   "Merlin's Crystal",
//   "Misthalin Mystery",
//   "Monk's Friend",
//   "Monkey Madness I",
//   "Monkey Madness II",
//   "Mountain Daughter",
//   "Mourning's End Part I",
//   "Mourning's End Part II",
//   "Murder Mystery",
//   "My Arm's Big Adventure",
//   "Nature Spirit",
//   "Observatory Quest",
//   "Olaf's Quest",
//   "One Small Favour",
//   "Pirate's Treasure",
//   "Plague City",
//   "Priest in Peril",
//   "Prince Ali Rescue",
//   "Rag and Bone Man I",
//   "Rag and Bone Man II",
//   "Ratcatchers",
//   "Recipe for Disaster",
//   "Recipe for Disaster/Another Cook's Quest",
//   "Recipe for Disaster/Defeating the Culinaromancer",
//   "Recipe for Disaster/Freeing Evil Dave",
//   "Recipe for Disaster/Freeing King Awowogei",
//   "Recipe for Disaster/Freeing Pirate Pete",
//   "Recipe for Disaster/Freeing Sir Amik Varze",
//   "Recipe for Disaster/Freeing Skrach Uglogwee",
//   "Recipe for Disaster/Freeing the Goblin generals",
//   "Recipe for Disaster/Freeing the Lumbridge Guide",
//   "Recipe for Disaster/Freeing the Mountain Dwarf",
//   "Recruitment Drive",
//   "Regicide",
//   "Romeo & Juliet",
//   "Roving Elves",
//   "Royal Trouble",
//   "Rum Deal",
//   "Rune Mysteries",
//   "Scorpion Catcher",
//   "Sea Slug",
//   "Secrets of the North",
//   "Shades of Mort'ton",
//   "Shadow of the Storm",
//   "Sheep Herder",
//   "Sheep Shearer",
//   "Shield of Arrav",
//   "Shilo Village",
//   "Sins of the Father",
//   "Sleeping Giants",
//   "Song of the Elves",
//   "Spirits of the Elid",
//   "Swan Song",
//   "Tai Bwo Wannai Trio",
//   "Tale of the Righteous",
//   "Tears of Guthix",
//   "Temple of Ikov",
//   "Temple of the Eye",
//   "The Ascent of Arceuus",
//   "The Corsair Curse",
//   "The Depths of Despair",
//   "The Dig Site",
//   "The Eyes of Glouphrie",
//   "The Feud",
//   "The Forsaken Tower",
//   "The Fremennik Exiles",
//   "The Fremennik Isles",
//   "The Fremennik Trials",
//   "The Garden of Death",
//   "The Giant Dwarf",
//   "The Golem",
//   "The Grand Tree",
//   "The Great Brain Robbery",
//   "The Hand in the Sand",
//   "The Knight's Sword",
//   "The Lost Tribe",
//   "The Queen of Thieves",
//   "The Restless Ghost",
//   "The Slug Menace",
//   "The Tourist Trap",
//   "Throne of Miscellania",
//   "Tower of Life",
//   "Tree Gnome Village",
//   "Tribal Totem",
//   "Troll Romance",
//   "Troll Stronghold",
//   "Underground Pass",
//   "Vampyre Slayer",
//   "Wanted!",
//   "Watchtower",
//   "Waterfall Quest",
//   "What Lies Below",
//   "Witch's House",
//   "Witch's Potion",
//   "X Marks the Spot",
//   "Zogre Flesh Eaters",
// ];

const questData = [
  {
    key: "Animal Magnetism",
    value: "Animal Magnetism",
  },
  {
    key: "Another Slice of H.A.M.",
    value: "Another Slice of H.A.M.",
  },
  {
    key: "Below Ice Mountain",
    value: "Below Ice Mountain",
  },
  {
    key: "Beneath Cursed Sands",
    value: "Beneath Cursed Sands",
  },
  {
    key: "Between a Rock...",
    value: "Between a Rock...",
  },
  {
    key: "Big Chompy Bird Hunting",
    value: "Big Chompy Bird Hunting",
  },
  {
    key: "Biohazard",
    value: "Biohazard",
  },
  {
    key: "Black Knights' Fortress",
    value: "Black Knights' Fortress",
  },
  {
    key: "Bone Voyage",
    value: "Bone Voyage",
  },
  {
    key: "Cabin Fever",
    value: "Cabin Fever",
  },
  {
    key: "Client of Kourend",
    value: "Client of Kourend",
  },
  {
    key: "Clock Tower",
    value: "Clock Tower",
  },
  {
    key: "Cold War",
    value: "Cold War",
  },
  {
    key: "Contact!",
    value: "Contact!",
  },
  {
    key: "Cook's Assistant",
    value: "Cook's Assistant",
  },
  {
    key: "Creature of Fenkenstrain",
    value: "Creature of Fenkenstrain",
  },
  {
    key: "Darkness of Hallowvale",
    value: "Darkness of Hallowvale",
  },
  {
    key: "Death Plateau",
    value: "Death Plateau",
  },
  {
    key: "Death to the Dorgeshuun",
    value: "Death to the Dorgeshuun",
  },
  {
    key: "Demon Slayer",
    value: "Demon Slayer",
  },
  {
    key: "Desert Treasure I",
    value: "Desert Treasure I",
  },
  {
    key: "Devious Minds",
    value: "Devious Minds",
  },
  {
    key: "Dragon Slayer",
    value: "Dragon Slayer",
  },
  {
    key: "Dream Mentor",
    value: "Dream Mentor",
  },
  {
    key: "Druidic Ritual",
    value: "Druidic Ritual",
  },
  {
    key: "Dwarf Cannon",
    value: "Dwarf Cannon",
  },
  {
    key: "Eadgar's Ruse",
    value: "Eadgar's Ruse",
  },
  {
    key: "Eagles' Peak",
    value: "Eagles' Peak",
  },
  {
    key: "Elemental Workshop I",
    value: "Elemental Workshop I",
  },
  {
    key: "Elemental Workshop II",
    value: "Elemental Workshop II",
  },
  {
    key: "Enakhra's Lament",
    value: "Enakhra's Lament",
  },
  {
    key: "Enlightened Journey",
    value: "Enlightened Journey",
  },
  {
    key: "Ernest the Chicken",
    value: "Ernest the Chicken",
  },
  {
    key: "Fairytale I - Growing Pains",
    value: "Fairytale I - Growing Pains",
  },
  {
    key: "Fairytale II - Cure a Queen",
    value: "Fairytale II - Cure a Queen",
  },
  {
    key: "Family Crest",
    value: "Family Crest",
  },
  {
    key: "Fight Arena",
    value: "Fight Arena",
  },
  {
    key: "Fishing Contest",
    value: "Fishing Contest",
  },
  {
    key: "Forgettable Tale...",
    value: "Forgettable Tale...",
  },
  {
    key: "The Forsaken Tower",
    value: "The Forsaken Tower",
  },
  {
    key: "Garden of Tranquillity",
    value: "Garden of Tranquillity",
  },
  {
    key: "Gertrude's Cat",
    value: "Gertrude's Cat",
  },
  {
    key: "Ghosts Ahoy",
    value: "Ghosts Ahoy",
  },
  {
    key: "The Giant Dwarf",
    value: "The Giant Dwarf",
  },
  {
    key: "The Golem",
    value: "The Golem",
  },
  {
    key: "The Grand Tree",
    value: "The Grand Tree",
  },
  {
    key: "Grim Tales",
    value: "Grim Tales",
  },
  {
    key: "The Hand in the Sand",
    value: "The Hand in the Sand",
  },
  {
    key: "Haunted Mine",
    value: "Haunted Mine",
  },
  {
    key: "Hazeel Cult",
    value: "Hazeel Cult",
  },
  {
    key: "Heroes' Quest",
    value: "Heroes' Quest",
  },
  {
    key: "Holy Grail",
    value: "Holy Grail",
  },
  {
    key: "Horror from the Deep",
    value: "Horror from the Deep",
  },
  {
    key: "Icthlarin's Little Helper",
    value: "Icthlarin's Little Helper",
  },
  {
    key: "In Aid of the Myreque",
    value: "In Aid of the Myreque",
  },
  {
    key: "In Search of the Myreque",
    value: "In Search of the Myreque",
  },
  {
    key: "In Search of the Unknown",
    value: "In Search of the Unknown",
  },
  {
    key: "Jungle Potion",
    value: "Jungle Potion",
  },
  {
    key: "Karamja Diary",
    value: "Karamja Diary",
  },
  {
    key: "King's Ransom",
    value: "King's Ransom",
  },
  {
    key: "Knight's Sword",
    value: "Knight's Sword",
  },
  {
    key: "Legends' Quest",
    value: "Legends' Quest",
  },
  {
    key: "Lost City",
    value: "Lost City",
  },
  {
    key: "The Lost Tribe",
    value: "The Lost Tribe",
  },
  {
    key: "Lunar Diplomacy",
    value: "Lunar Diplomacy",
  },
  {
    key: "Making History",
    value: "Making History",
  },
  {
    key: "Merlin's Crystal",
    value: "Merlin's Crystal",
  },
  {
    key: "Monkey Madness I",
    value: "Monkey Madness I",
  },
  {
    key: "Monkey Madness II",
    value: "Monkey Madness II",
  },
  {
    key: "Monk's Friend",
    value: "Monk's Friend",
  },
  {
    key: "Mountain Daughter",
    value: "Mountain Daughter",
  },
  {
    key: "Mourning's Ends Part I",
    value: "Mourning's Ends Part I",
  },
  {
    key: "Mourning's Ends Part II",
    value: "Mourning's Ends Part II",
  },
  {
    key: "Murder Mystery",
    value: "Murder Mystery",
  },
  {
    key: "My Arm's Big Adventure",
    value: "My Arm's Big Adventure",
  },
  {
    key: "Nature Spirit",
    value: "Nature Spirit",
  },
  {
    key: "Observatory Quest",
    value: "Observatory Quest",
  },
  {
    key: "Olaf's Quest",
    value: "Olaf's Quest",
  },
  {
    key: "One Small Favour",
    value: "One Small Favour",
  },
  {
    key: "Plague City",
    value: "Plague City",
  },
  {
    key: "Priest in Peril",
    value: "Priest in Peril",
  },
  {
    key: "Prince Ali Rescue",
    value: "Prince Ali Rescue",
  },
  {
    key: "The Queen of Thieves",
    value: "The Queen of Thieves",
  },
  {
    key: "Rag and Bone Man I",
    value: "Rag and Bone Man I",
  },
  {
    key: "Rag and Bone Man II",
    value: "Rag and Bone Man II",
  },
  {
    key: "Ratcatchers",
    value: "Ratcatchers",
  },
  {
    key: "Recipe for Disaster",
    value: "Recipe for Disaster",
  },
  {
    key: "Recruitment Drive",
    value: "Recruitment Drive",
  },
  {
    key: "Regicide",
    value: "Regicide",
  },
  {
    key: "Roving Elves",
    value: "Roving Elves",
  },
  {
    key: "Royal Trouble",
    value: "Royal Trouble",
  },
  {
    key: "Rum Deal",
    value: "Rum Deal",
  },
  {
    key: "Scorpion Catcher",
    value: "Scorpion Catcher",
  },
  {
    key: "Sea Slug",
    value: "Sea Slug",
  },
  {
    key: "Shades of Mort'ton",
    value: "Shades of Mort'ton",
  },
  {
    key: "Shadow of the Storm",
    value: "Shadow of the Storm",
  },
  {
    key: "Sheep Herder",
    value: "Sheep Herder",
  },
  {
    key: "Shilo Village",
    value: "Shilo Village",
  },
  {
    key: "A Tail of Two Cats",
    value: "A Tail of Two Cats",
  },
  {
    key: "Slug Menace",
    value: "Slug Menace",
  },
  {
    key: "A Soul's Bane",
    value: "A Soul's Bane",
  },
  {
    key: "Spirits of the Elid",
    value: "Spirits of the Elid",
  },
  {
    key: "Swan Song",
    value: "Swan Song",
  },
  {
    key: "Tai Bwo Wannai Trio",
    value: "Tai Bwo Wannai Trio",
  },
  {
    key: "A Taste of Hope",
    value: "A Taste of Hope",
  },
  {
    key: "Tears of Guthix",
    value: "Tears of Guthix",
  },
  {
    key: "Temple of Ikov",
    value: "Temple of Ikov",
  },

  {
    key: "Throne of Miscellania",
    value: "Throne of Miscellania",
  },
  {
    key: "Tower of Life",
    value: "Tower of Life",
  },
  {
    key: "Tree Gnome Village",
    value: "Tree Gnome Village",
  },
  {
    key: "Tribal Totem",
    value: "Tribal Totem",
  },
  {
    key: "Troll Romance",
    value: "Troll Romance",
  },
  {
    key: "Troll Stronghold",
    value: "Troll Stronghold",
  },
  {
    key: "Underground Pass",
    value: "Underground Pass",
  },
  {
    key: "Wanted!",
    value: "Wanted!",
  },
  {
    key: "Watchtower",
    value: "Watchtower",
  },
  {
    key: "Waterfall Quest",
    value: "Waterfall Quest",
  },
  {
    key: "What Lies Below",
    value: "What Lies Below",
  },
  {
    key: "Witch's House",
    value: "Witch's House",
  },
  {
    key: "Zogre Flesh Eaters",
    value: "Zogre Flesh Eaters",
  },
];

export default function SearchBar(props) {
  console.log(props);
  function SearchThis(value) {
    props.onSearch(value);
  }
  return (
    <div className="w-full bg-[#646363] text-[#f5b316]">
      <ReactSearchBox
        placeholder="Scrape a quest for rewards..."
        data={questData}
        leftIcon={
          <img className="h-[20px] w-[20px]" src="/questicon.png"></img>
        }
        inputFontColor="#f5b316"
        inputBackgroundColor="#646363"
        dropdownBorderColor="#646363"
        dropdownHoverColor="#e7e5e5"
        inputBorderColor="#646363"
        inputFontSize="24px"
        inputBorderRadius="10px"
        inputPadding="10px"
        inputHeight="50px"
        // onChange={(value) => SearchThis(value)}
        onSelect={(value) => SearchThis(value.item.value)}
      />
    </div>
  );
}
