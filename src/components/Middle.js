import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

const Middle = () => {
	const [movies, setMovies] = useState([]);
	const stateMoiveCounter = useSelector((state) => state.Moive.counter);
	const stateGenresId = useSelector((state) => state.Moive.id);
	const stateQuery = useSelector((state) => state.Moive.query);
	const getMoive = useCallback(async () => {
		try {
			let response = '';

			if (stateQuery) {
				response = await fetch(
					`https://api.themoviedb.org/3/search/movie?language=zh-hk&api_key=1cf50e6248dc270629e802686245c2c8&query=${stateQuery}`
				);
			} else {
				response = await fetch(
					`https://api.themoviedb.org/3/discover/movie?language=zh-hk&api_key=4e52779f06db596b6259e03286a04184&page=${stateMoiveCounter}&with_genres=${stateGenresId}`
				);
			}

			if (!response) throw new Error('Something went wrong!');

			const data = await response.json();
			const SpecialObject = data.results.map((a) => {
				return {
					title: a.title,
					img: `https://image.tmdb.org/t/p/w500${a.poster_path}`,
					overview: a.overview,
					vote: a.vote_average,
					id: a.id
				};
			});
			setMovies(SpecialObject);
		} catch (error) {
			console.log(error);
		}
	}, [stateMoiveCounter, stateGenresId, stateQuery]);

	useEffect(() => {
		getMoive();
	}, [getMoive]);

	var content = movies.map((a) => {
		return (
			<li key={a.id}>
				<div className="overviewandimage">
					<img src={a.img} alt="" />
					<div className="overinover">
						<h3>Overview</h3>
						<p className="overview">{a.overview}</p>
					</div>
				</div>
				<div className="titleandvote">
					<p className="title">{a.title}</p>
					<p className="vote">{a.vote}</p>
				</div>
			</li>
		);
	});

	return (
		<div className="container">
			<ul>{content}</ul>
		</div>
	);
};
export default Middle;
