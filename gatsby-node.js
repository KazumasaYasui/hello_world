// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
//   const pokemons = [
//     { name: "Pikachu", type: "electric" },
//     { name: "Squirtle", type: "water" },
//   ]
//   pokemons.forEach(pokemon => {
//     const node = {
//       name: pokemon.name,
//       type: pokemon.type,
//       id: createNodeId(`Pokemon-${pokemon.name}`),
//       internal: {
//         type: "Pokemon",
//         contentDigest: createContentDigest(pokemon),
//       },
//     }
//     actions.createNode(node)
//   })
// }

const fetch = require("node-fetch")

const fetchItems = () =>
  fetch("https://qiita.com/api/v2/items").then(res => res.json())

exports.sourceNodes = async ({
                               actions,
                               createNodeId,
                               createContentDigest,
                             }) => {
  const items = await fetchItems()
  items.forEach(item => {
    const node = {
      id: item.id,
      title: item.title,
      user: {
        name: item.user.name,
      },
      internal: {
        type: "Item",
        contentDigest: createContentDigest(item),
      },
    }
    actions.createNode(node)
  })
}
