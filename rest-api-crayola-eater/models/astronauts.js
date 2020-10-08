const { deployAstronauts } = require("../libs/data");

module.exports = {
  getAstronauts: async () => {
    let astronauts = deployAstronauts();
    return astronauts;
  },

  createAstronaut: async (astronaut) => {
    let astronauts = deployAstronauts();
    astronauts = [...astronauts, astronaut];
    return astronauts[astronauts.length - 1];
  },

  getAstronautById: async (requestId) => {
    let astronauts = deployAstronauts();
    const astronaut = astronauts.find(({ id }) => id === requestId);

    if (astronaut) {
      return astronaut;
    }

    throw new Error(`No astronaut with ${requestId} found.`);
  },

  replaceAstronautById: async (requestId, astronautReplacement) => {
    let astronauts = deployAstronauts();
    const index = astronauts.findIndex(({ id }) => id === requestId);
    astronauts = [
      ...astronauts.slice(0, index),
      astronautReplacement,
      ...astronauts.slice(index + 1),
    ];
    return astronauts[index];
  },

  deleteAstronautById: async (requestId) => {
    let astronauts = deployAstronauts();
    const index = astronauts.findIndex(({ id }) => id === requestId);
    astronauts = [
      ...astronauts.slice(0, index),
      ...astronauts.slice(index + 1),
    ];

    return astronauts;
  },

  updateAstronautById: async (requestId, updates) => {
    let astronauts = deployAstronauts();
    const index = astronauts.findIndex(({ id }) => id === requestId);

    if (index) {
      let updatedAstronaut = astronauts[index];

      Object.keys(updatedAstronaut).map((key) => {
        if (Object.keys(updates).includes(key)) {
          updatedAstronaut[key] = updates[key];
        }
      });

      astronauts = [
        ...astronauts.slice(0, index),
        updatedAstronaut,
        ...astronauts.slice(index + 1),
      ];

      return astronauts[index];
    }
  },

  getAstronautsByName: async (search) => {
    let astronauts = deployAstronauts();
    const firstNameSearchResults = astronauts.filter(({ firstName }) =>
      firstName.toLowerCase().includes(search.toLowerCase())
    );

    const lastNameSearchResults = astronauts.filter(({ lastName }) =>
      lastName.toLowerCase().includes(search.toLowerCase())
    );

    const searchResults = firstNameSearchResults.concat(lastNameSearchResults);

    //FIXME: This is a shoddy search. Can contain duplicate entries, and isn't ordered. Could fix but might not be the best use of time.

    return searchResults;
  },
};
