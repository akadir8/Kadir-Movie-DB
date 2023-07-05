import Head from 'next/head';

export default function FilmDetay({ movies}) {
	console.log(movies)
	return (
		<div className="movie">
			<Head>
				<title>{movies.title}</title>
			</Head>
			<div className="cover"
			     style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original${movies.backdrop_path})`}}></div>
			<h3>{movies.title}</h3>
			<div className="summary">
				{movies.overview}
			</div>
			<style jsx>{`
              .movie {
                width: 1200px;
                margin: 0 auto;
                position: relative;
                padding: 20px;

                h3 {
                  font-size: 30px;
                  font-weight: bold;
                  margin-bottom: 20px;
                }

                .summary {
                  font-size: 18px;
                  color: #666;
                  line-height: 1.7;
                }

                .cover {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 600px;
                  background-size: cover;
                  opacity: .3;
                  z-index: -1;

                  &::before {
                    content: '';
                    background: linear-gradient(to bottom, transparent, #ddd);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                  }
                }
              }
			`}</style>
		</div>
	)
}

export async function getServerSideProps({ params }) {
	const request = await fetch(`https://api.themoviedb.org/3/movie/popular${params.url}?api_key=6367becc9d2b0a4bdffacddf5a705b0b`)
	const movies = await request.json()

	return {
		props: {
			movies,
		},
	}

}