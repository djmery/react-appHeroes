import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

    const valPublisher = ['DC Comics', 'Marvel Comics'];
    if (!valPublisher.includes(publisher)) {
        throw new Error(`${publisher} is not valid`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);

}