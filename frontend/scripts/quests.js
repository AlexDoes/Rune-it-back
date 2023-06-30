import * as fs from "fs";
import axios from "axios";
import * as cheerio from "cheerio";
import exp from "constants";

export const questArray = [
  "A Kingdom Divided",
  "A Night at the Theatre",
  "A Porcine of Interest",
  "A Soul's Bane",
  "A Tail of Two Cats",
  "A Taste of Hope",
  "Animal Magnetism",
  "Another Slice of H.A.M.",
  "Below Ice Mountain",
  "Beneath Cursed Sands",
  "Between a Rock...",
  "Big Chompy Bird Hunting",
  "Biohazard",
  "Black Knights' Fortress",
  "Bone Voyage",
  "Cabin Fever",
  "Client of Kourend",
  "Clock Tower",
  "Cold War",
  "Contact!",
  "Cook's Assistant",
  "Creature of Fenkenstrain",
  "Darkness of Hallowvale",
  "Death Plateau",
  "Death to the Dorgeshuun",
  "Demon Slayer",
  "Desert Treasure I",
  "Devious Minds",
  "Doric's Quest",
  "Dragon Slayer I",
  "Dragon Slayer II",
  "Dream Mentor",
  "Druidic Ritual",
  "Dwarf Cannon",
  "Eadgar's Ruse",
  "Eagles' Peak",
  "Elemental Workshop I",
  "Elemental Workshop II",
  "Enakhra's Lament",
  "Enlightened Journey",
  "Ernest the Chicken",
  "Fairytale I - Growing Pains",
  "Fairytale II - Cure a Queen",
  "Family Crest",
  "Fight Arena",
  "Fishing Contest",
  "Forgettable Tale...",
  "Garden of Tranquillity",
  "Gertrude's Cat",
  "Getting Ahead",
  "Ghosts Ahoy",
  "Goblin Diplomacy",
  "Grim Tales",
  "Haunted Mine",
  "Hazeel Cult",
  "Heroes' Quest",
  "Holy Grail",
  "Horror from the Deep",
  "Icthlarin's Little Helper",
  "Imp Catcher",
  "In Aid of the Myreque",
  "In Search of the Myreque",
  "Jungle Potion",
  "King's Ransom",
  "Land of the Goblins",
  "Legends' Quest",
  "Lost City",
  "Lunar Diplomacy",
  "Making Friends with My Arm",
  "Making History",
  "Merlin's Crystal",
  "Misthalin Mystery",
  "Monk's Friend",
  "Monkey Madness I",
  "Monkey Madness II",
  "Mountain Daughter",
  "Mourning's End Part I",
  "Mourning's End Part II",
  "Murder Mystery",
  "My Arm's Big Adventure",
  "Nature Spirit",
  "Observatory Quest",
  "Olaf's Quest",
  "One Small Favour",
  "Pirate's Treasure",
  "Plague City",
  "Priest in Peril",
  "Prince Ali Rescue",
  "Rag and Bone Man I",
  "Rag and Bone Man II",
  "Ratcatchers",
  "Recipe for Disaster",
  "Recipe for Disaster/Another Cook's Quest",
  "Recipe for Disaster/Defeating the Culinaromancer",
  "Recipe for Disaster/Freeing Evil Dave",
  "Recipe for Disaster/Freeing King Awowogei",
  "Recipe for Disaster/Freeing Pirate Pete",
  "Recipe for Disaster/Freeing Sir Amik Varze",
  "Recipe for Disaster/Freeing Skrach Uglogwee",
  "Recipe for Disaster/Freeing the Goblin generals",
  "Recipe for Disaster/Freeing the Lumbridge Guide",
  "Recipe for Disaster/Freeing the Mountain Dwarf",
  "Recruitment Drive",
  "Regicide",
  "Romeo & Juliet",
  "Roving Elves",
  "Royal Trouble",
  "Rum Deal",
  "Rune Mysteries",
  "Scorpion Catcher",
  "Sea Slug",
  "Secrets of the North",
  "Shades of Mort'ton",
  "Shadow of the Storm",
  "Sheep Herder",
  "Sheep Shearer",
  "Shield of Arrav",
  "Shilo Village",
  "Sins of the Father",
  "Sleeping Giants",
  "Song of the Elves",
  "Spirits of the Elid",
  "Swan Song",
  "Tai Bwo Wannai Trio",
  "Tale of the Righteous",
  "Tears of Guthix",
  "Temple of Ikov",
  "Temple of the Eye",
  "The Ascent of Arceuus",
  "The Corsair Curse",
  "The Depths of Despair",
  "The Dig Site",
  "The Eyes of Glouphrie",
  "The Feud",
  "The Forsaken Tower",
  "The Fremennik Exiles",
  "The Fremennik Isles",
  "The Fremennik Trials",
  "The Garden of Death",
  "The Giant Dwarf",
  "The Golem",
  "The Grand Tree",
  "The Great Brain Robbery",
  "The Hand in the Sand",
  "The Knight's Sword",
  "The Lost Tribe",
  "The Queen of Thieves",
  "The Restless Ghost",
  "The Slug Menace",
  "The Tourist Trap",
  "Throne of Miscellania",
  "Tower of Life",
  "Tree Gnome Village",
  "Tribal Totem",
  "Troll Romance",
  "Troll Stronghold",
  "Underground Pass",
  "Vampyre Slayer",
  "Wanted!",
  "Watchtower",
  "Waterfall Quest",
  "What Lies Below",
  "Witch's House",
  "Witch's Potion",
  "X Marks the Spot",
  "Zogre Flesh Eaters",
];

// var questUrls = {};
// questArray.forEach(function (quest) {
//   // Convert quest name to URL representation
//   var questUrl = encodeURIComponent(
//     quest.replace("'", "%27").replace(" ", "_")
//   );
//   questUrls[quest] = questUrl;
// });

// for (var quest in questUrls) {
//   if (questUrls.hasOwnProperty(quest)) {
//     // console.log(`"` + quest + `"` + ":", `"` + questUrls[quest] + `"` + ",");
//   }
// }

export const questMap = {
  "A Kingdom Divided": "A_Kingdom%20Divided",
  "A Night at the Theatre": "A_Night%20at%20the%20Theatre",
  "A Porcine of Interest": "A_Porcine%20of%20Interest",
  "A Soul's Bane": "A_Soul%2527s%20Bane",
  "A Tail of Two Cats": "A_Tail%20of%20Two%20Cats",
  "A Taste of Hope": "A_Taste%20of%20Hope",
  "Animal Magnetism": "Animal_Magnetism",
  "Another Slice of H.A.M.": "Another_Slice%20of%20H.A.M.",
  "Below Ice Mountain": "Below_Ice%20Mountain",
  "Beneath Cursed Sands": "Beneath_Cursed%20Sands",
  "Between a Rock...": "Between_a%20Rock...",
  "Big Chompy Bird Hunting": "Big_Chompy%20Bird%20Hunting",
  Biohazard: "Biohazard",
  "Black Knights' Fortress": "Black_Knights%2527%20Fortress",
  "Bone Voyage": "Bone_Voyage",
  "Cabin Fever": "Cabin_Fever",
  "Client of Kourend": "Client_of%20Kourend",
  "Clock Tower": "Clock_Tower",
  "Cold War": "Cold_War",
  "Contact!": "Contact!",
  "Cook's Assistant": "Cook%2527s_Assistant",
  "Creature of Fenkenstrain": "Creature_of%20Fenkenstrain",
  "Darkness of Hallowvale": "Darkness_of%20Hallowvale",
  "Death Plateau": "Death_Plateau",
  "Death to the Dorgeshuun": "Death_to%20the%20Dorgeshuun",
  "Demon Slayer": "Demon_Slayer",
  "Desert Treasure I": "Desert_Treasure%20I",
  "Devious Minds": "Devious_Minds",
  "Doric's Quest": "Doric%2527s_Quest",
  "Dragon Slayer I": "Dragon_Slayer%20I",
  "Dragon Slayer II": "Dragon_Slayer%20II",
  "Dream Mentor": "Dream_Mentor",
  "Druidic Ritual": "Druidic_Ritual",
  "Dwarf Cannon": "Dwarf_Cannon",
  "Eadgar's Ruse": "Eadgar%2527s_Ruse",
  "Eagles' Peak": "Eagles%2527_Peak",
  "Elemental Workshop I": "Elemental_Workshop%20I",
  "Elemental Workshop II": "Elemental_Workshop%20II",
  "Enakhra's Lament": "Enakhra%2527s_Lament",
  "Enlightened Journey": "Enlightened_Journey",
  "Ernest the Chicken": "Ernest_the%20Chicken",
  "Fairytale I - Growing Pains": "Fairytale_I%20-%20Growing%20Pains",
  "Fairytale II - Cure a Queen": "Fairytale_II%20-%20Cure%20a%20Queen",
  "Family Crest": "Family_Crest",
  "Fight Arena": "Fight_Arena",
  "Fishing Contest": "Fishing_Contest",
  "Forgettable Tale...": "Forgettable_Tale...",
  "Garden of Tranquillity": "Garden_of%20Tranquillity",
  "Gertrude's Cat": "Gertrude%2527s_Cat",
  "Getting Ahead": "Getting_Ahead",
  "Ghosts Ahoy": "Ghosts_Ahoy",
  "Goblin Diplomacy": "Goblin_Diplomacy",
  "Grim Tales": "Grim_Tales",
  "Haunted Mine": "Haunted_Mine",
  "Hazeel Cult": "Hazeel_Cult",
  "Heroes' Quest": "Heroes%2527_Quest",
  "Holy Grail": "Holy_Grail",
  "Horror from the Deep": "Horror_from%20the%20Deep",
  "Icthlarin's Little Helper": "Icthlarin%2527s_Little%20Helper",
  "Imp Catcher": "Imp_Catcher",
  "In Aid of the Myreque": "In_Aid%20of%20the%20Myreque",
  "In Search of the Myreque": "In_Search%20of%20the%20Myreque",
  "Jungle Potion": "Jungle_Potion",
  "King's Ransom": "King%2527s_Ransom",
  "Land of the Goblins": "Land_of%20the%20Goblins",
  "Legends' Quest": "Legends%2527_Quest",
  "Lost City": "Lost_City",
  "Lunar Diplomacy": "Lunar_Diplomacy",
  "Making Friends with My Arm": "Making_Friends%20with%20My%20Arm",
  "Making History": "Making_History",
  "Merlin's Crystal": "Merlin%2527s_Crystal",
  "Misthalin Mystery": "Misthalin_Mystery",
  "Monk's Friend": "Monk%2527s_Friend",
  "Monkey Madness I": "Monkey_Madness%20I",
  "Monkey Madness II": "Monkey_Madness%20II",
  "Mountain Daughter": "Mountain_Daughter",
  "Mourning's End Part I": "Mourning%2527s_End%20Part%20I",
  "Mourning's End Part II": "Mourning%2527s_End%20Part%20II",
  "Murder Mystery": "Murder_Mystery",
  "My Arm's Big Adventure": "My_Arm%2527s%20Big%20Adventure",
  "Nature Spirit": "Nature_Spirit",
  "Observatory Quest": "Observatory_Quest",
  "Olaf's Quest": "Olaf%2527s_Quest",
  "One Small Favour": "One_Small%20Favour",
  "Pirate's Treasure": "Pirate%2527s_Treasure",
  "Plague City": "Plague_City",
  "Priest in Peril": "Priest_in%20Peril",
  "Prince Ali Rescue": "Prince_Ali%20Rescue",
  "Rag and Bone Man I": "Rag_and%20Bone%20Man%20I",
  "Rag and Bone Man II": "Rag_and%20Bone%20Man%20II",
  Ratcatchers: "Ratcatchers",
  "Recipe for Disaster": "Recipe_for%20Disaster",
  "Recipe for Disaster/Another Cook's Quest":
    "Recipe_for%20Disaster%2FAnother%20Cook%2527s%20Quest",
  "Recipe for Disaster/Defeating the Culinaromancer":
    "Recipe_for%20Disaster%2FDefeating%20the%20Culinaromancer",
  "Recipe for Disaster/Freeing Evil Dave":
    "Recipe_for%20Disaster%2FFreeing%20Evil%20Dave",
  "Recipe for Disaster/Freeing King Awowogei":
    "Recipe_for%20Disaster%2FFreeing%20King%20Awowogei",
  "Recipe for Disaster/Freeing Pirate Pete":
    "Recipe_for%20Disaster%2FFreeing%20Pirate%20Pete",
  "Recipe for Disaster/Freeing Sir Amik Varze":
    "Recipe_for%20Disaster%2FFreeing%20Sir%20Amik%20Varze",
  "Recipe for Disaster/Freeing Skrach Uglogwee":
    "Recipe_for%20Disaster%2FFreeing%20Skrach%20Uglogwee",
  "Recipe for Disaster/Freeing the Goblin generals":
    "Recipe_for%20Disaster%2FFreeing%20the%20Goblin%20generals",
  "Recipe for Disaster/Freeing the Lumbridge Guide":
    "Recipe_for%20Disaster%2FFreeing%20the%20Lumbridge%20Guide",
  "Recipe for Disaster/Freeing the Mountain Dwarf":
    "Recipe_for%20Disaster%2FFreeing%20the%20Mountain%20Dwarf",
  "Recruitment Drive": "Recruitment_Drive",
  Regicide: "Regicide",
  "Romeo & Juliet": "Romeo_%26%20Juliet",
  "Roving Elves": "Roving_Elves",
  "Royal Trouble": "Royal_Trouble",
  "Rum Deal": "Rum_Deal",
  "Rune Mysteries": "Rune_Mysteries",
  "Scorpion Catcher": "Scorpion_Catcher",
  "Sea Slug": "Sea_Slug",
  "Secrets of the North": "Secrets_of%20the%20North",
  "Shades of Mort'ton": "Shades_of%20Mort%2527ton",
  "Shadow of the Storm": "Shadow_of%20the%20Storm",
  "Sheep Herder": "Sheep_Herder",
  "Sheep Shearer": "Sheep_Shearer",
  "Shield of Arrav": "Shield_of%20Arrav",
  "Shilo Village": "Shilo_Village",
  "Sins of the Father": "Sins_of%20the%20Father",
  "Sleeping Giants": "Sleeping_Giants",
  "Song of the Elves": "Song_of%20the%20Elves",
  "Spirits of the Elid": "Spirits_of%20the%20Elid",
  "Swan Song": "Swan_Song",
  "Tai Bwo Wannai Trio": "Tai_Bwo%20Wannai%20Trio",
  "Tale of the Righteous": "Tale_of%20the%20Righteous",
  "Tears of Guthix": "Tears_of%20Guthix",
  "Temple of Ikov": "Temple_of%20Ikov",
  "Temple of the Eye": "Temple_of%20the%20Eye",
  "The Ascent of Arceuus": "The_Ascent%20of%20Arceuus",
  "The Corsair Curse": "The_Corsair%20Curse",
  "The Depths of Despair": "The_Depths%20of%20Despair",
  "The Dig Site": "The_Dig%20Site",
  "The Eyes of Glouphrie": "The_Eyes%20of%20Glouphrie",
  "The Feud": "The_Feud",
  "The Forsaken Tower": "The_Forsaken%20Tower",
  "The Fremennik Exiles": "The_Fremennik%20Exiles",
  "The Fremennik Isles": "The_Fremennik%20Isles",
  "The Fremennik Trials": "The_Fremennik%20Trials",
  "The Garden of Death": "The_Garden%20of%20Death",
  "The Giant Dwarf": "The_Giant%20Dwarf",
  "The Golem": "The_Golem",
  "The Grand Tree": "The_Grand%20Tree",
  "The Great Brain Robbery": "The_Great%20Brain%20Robbery",
  "The Hand in the Sand": "The_Hand%20in%20the%20Sand",
  "The Knight's Sword": "The_Knight%2527s%20Sword",
  "The Lost Tribe": "The_Lost%20Tribe",
  "The Queen of Thieves": "The_Queen%20of%20Thieves",
  "The Restless Ghost": "The_Restless%20Ghost",
  "The Slug Menace": "The_Slug%20Menace",
  "The Tourist Trap": "The_Tourist%20Trap",
  "Throne of Miscellania": "Throne_of%20Miscellania",
  "Tower of Life": "Tower_of%20Life",
  "Tree Gnome Village": "Tree_Gnome%20Village",
  "Tribal Totem": "Tribal_Totem",
  "Troll Romance": "Troll_Romance",
  "Troll Stronghold": "Troll_Stronghold",
  "Underground Pass": "Underground_Pass",
  "Vampyre Slayer": "Vampyre_Slayer",
  "Wanted!": "Wanted!",
  Watchtower: "Watchtower",
  "Waterfall Quest": "Waterfall_Quest",
  "What Lies Below": "What_Lies%20Below",
  "Witch's House": "Witch%2527s_House",
  "Witch's Potion": "Witch%2527s_Potion",
  "X Marks the Spot": "X_Marks%20the%20Spot",
  "Zogre Flesh Eaters": "Zogre_Flesh%20Eaters",
};

const fields = [
  "attackXp",
  "defenceXp",
  "strengthXp",
  "hitpointsXp",
  "rangedXp",
  "prayerXp",
  "magicXp",
  "cookingXp",
  "woodcuttingXp",
  "fletchingXp",
  "fishingXp",
  "firemakingXp",
  "craftingXp",
  "smithingXp",
  "miningXp",
  "herbloreXp",
  "agilityXp",
  "thievingXp",
  "slayerXp",
  "farmingXp",
  "runecraftXp",
  "hunterXp",
  "constructionXp",
];

const questResults = {};
const keywords = ["qp", " xp", "experience", "quest point"];
async function scrapeUrl(quest) {
  questResults[quest] = {
    experience: {},
    questPoints: 0,
    name: quest.toLowerCase(),
    id: quest.toLowerCase().replace(" ", "_"),
  };
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Scraping ${quest}...`);
  const url =
    "https://oldschool.runescape.wiki/w/" +
    encodeURIComponent(quest.replace("'", "%27").replace(" ", "_"));
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    let rewardsAnchor = $("#Rewards");
    if (rewardsAnchor.length === 0) {
      rewardsAnchor = $("#Reward");
    }

    const parent = rewardsAnchor.parent("h2");
    let ulElement = parent.next().next();
    if (quest.toLowerCase() == "recipe for disaster") {
      ulElement = ulElement.next();
    }
    const rewards = [];

    ulElement.find("li").each((index, element) => {
      let textOfReward = $(element)
        .text()
        .toLowerCase()
        .split(" ")
        .filter((word) => word !== " " && word !== "")
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
      //   rewards.push(textOfReward);
      let flag = false;
      for (let keyword of keywords) {
        if (textOfReward.includes(keyword)) {
          if (keyword === "quest point" || keyword === "qp") {
            questResults[quest].questPoints = parseInt(
              textOfReward.split(" ")[0]
            );
            flag = true;
            break;
          } else if (keyword === " xp " || keyword === "experience") {
            const rewardedExperience = textOfReward.split(" ");
            if (textOfReward.includes("lamp")) {
              // questResults[quest].experience["flex"] = textOfReward;
              // flag = true;
              break;
            } else if (textOfReward.includes("grant")) {
              // questResults[quest].experience["flex"] = textOfReward;
              // flag = true;
              break;
            } else {
              const experience = parseInt(
                rewardedExperience[0].replace(",", "")
              );
              const skill = rewardedExperience[1] + "Xp";
              if (fields.includes(skill)) {
                questResults[quest].experience[skill] = experience;
              }
              flag = true;
              break;
            }
          }
        }
      }
      // if (!flag) {
      //   questResults[quest].items.push(textOfReward);
      // }
      // flag = false;
    });
    // questResults[quest] = rewards;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`finished scraping ${quest}`);
  } catch (error) {
    console.error(`Error scraping ${quest}:`, error.message);
  }
}

async function scrapeQuests() {
  for (const quest of questArray) {
    await scrapeUrl(quest);
  }
  //   await scrapeUrl("the grand tree");
  //   await scrapeUrl("the restless ghost");
  //   await scrapeUrl("recipe for disaster");
  const jsonContent = JSON.stringify(questResults, null, 2);
  const location = "quest_results_only_xp_and_qp.json";
  fs.writeFileSync(location, jsonContent);
  console.log("Scraping complete. Results written to " + location + ".");
}
scrapeQuests();
