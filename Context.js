import {createContext, useState} from 'react';

const Context = createContext({
    favorites: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

export default function ContextProvider({children}) {
    const [ids, setIds] = useState([]);

    function addId(id) {
        if (ids.include(id)) return;

        setIds((list) => [list, id]);
    }

    function removeId(id) {
        setIds((list) => list.filter((elem) => id != elem));
    }

    const context = {
        favorites: ids,
        addFavorite: addId,
        removeFavorite: removeId
    };

    return (
            <Context.Provider value={context} >{children}</Context.Provider>
    );
}
