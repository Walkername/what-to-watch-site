import { FilmCard } from '../../components/film-card/film-card';
import { Footer } from '../../components/footer/footer';
import { PromoFilm } from '../../components/promo-film/promo-film';

const Main = (): JSX.Element => (
  <body>
    <PromoFilm
      name="The Grand Budapest Hotel"
      srcPoster="img/the-grand-budapest-hotel-poster.jpg"
      srcBg="img/bg-the-grand-budapest-hotel.jpg"
      genre="Drama"
      date="2014"
    />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">All genres</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Comedies</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Crime</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Documentary</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Dramas</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Horror</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Kids & Family</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Romance</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Sci-Fi</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Thrillers</a>
          </li>
        </ul>

        <div className="catalog__films-list">
          <FilmCard
            srcFilm="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" nameFilm="Fantastic Beasts: The Crimes of Grindelwald"
          />
          <FilmCard
            srcFilm="img/bohemian-rhapsody.jpg"
            nameFilm="Bohemian Rhapsody"
          />
          <FilmCard
            srcFilm="img/macbeth.jpg"
            nameFilm="Macbeth"
          />
          <FilmCard
            srcFilm="img/aviator.jpg"
            nameFilm="Aviator"
          />
          <FilmCard
            srcFilm="img/we-need-to-talk-about-kevin.jpg"
            nameFilm="We need to talk about Kevin"
          />
          <FilmCard
            srcFilm="img/what-we-do-in-the-shadows.jpg"
            nameFilm="What We Do in the Shadows"
          />
          <FilmCard
            srcFilm="img/revenant.jpg"
            nameFilm="Revenant"
          />
          <FilmCard
            srcFilm="img/johnny-english.jpg"
            nameFilm="Johnny English"
          />
          <FilmCard
            srcFilm="img/shutter-island.jpg"
            nameFilm="Shutter Island"
          />
          <FilmCard
            srcFilm="img/pulp-fiction.jpg"
            nameFilm="Pulp Fiction"
          />
          <FilmCard
            srcFilm="img/no-country-for-old-men.jpg"
            nameFilm="No Country for Old Men"
          />
          <FilmCard
            srcFilm="img/snatch.jpg"
            nameFilm="Snatch"
          />
          <FilmCard
            srcFilm="img/moonrise-kingdom.jpg"
            nameFilm="Moonrise Kingdom"
          />
          <FilmCard
            srcFilm="img/seven-years-in-tibet.jpg"
            nameFilm="Seven Years in Tibet"
          />
          <FilmCard
            srcFilm="img/midnight-special.jpg"
            nameFilm="Midnight Special"
          />
          <FilmCard
            srcFilm="img/war-of-the-worlds.jpg"
            nameFilm="War of the Worlds"
          />
          <FilmCard
            srcFilm="img/dardjeeling-limited.jpg"
            nameFilm="Dardjeeling Limited"
          />
          <FilmCard
            srcFilm="img/orlando.jpg"
            nameFilm="Orlando"
          />
          <FilmCard
            srcFilm="img/mindhunter.jpg"
            nameFilm="Mindhunter"
          />
          <FilmCard
            srcFilm="img\midnight-special.jpg"
            nameFilm="Midnight Special"
          />
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <Footer/>
    </div>
  </body>
);

export {Main};
