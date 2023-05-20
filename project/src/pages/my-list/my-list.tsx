import { FilmCard } from '../../components/film-card/film-card';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

const MyList = (): JSX.Element => (
  <body>
    <div className="user-page">
      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmCard
            srcFilm='img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
            nameFilm='Fantastic Beasts: The Crimes of Grindelwald'
          />
          <FilmCard
            srcFilm='img/bohemian-rhapsody.jpg'
            nameFilm='Bohemian Rhapsody'
          />
          <FilmCard
            srcFilm='img/macbeth.jpg'
            nameFilm='Macbeth'
          />
          <FilmCard
            srcFilm='img/aviator.jpg'
            nameFilm='Aviator'
          />
          <FilmCard
            srcFilm='img/we-need-to-talk-about-kevin.jpg'
            nameFilm='We need to talk about Kevin'
          />
          <FilmCard
            srcFilm='img/what-we-do-in-the-shadows.jpg'
            nameFilm='What We Do in the Shadows'
          />
          <FilmCard
            srcFilm='img/revenant.jpg'
            nameFilm='Revenant'
          />
          <FilmCard
            srcFilm='img/johnny-english.jpg'
            nameFilm='Johnny English'
          />
          <FilmCard
            srcFilm='img/shutter-island.jpg'
            nameFilm='Shutter Island'
          />
        </div>
      </section>

      <Footer/>
    </div>
  </body>
);

export { MyList };
