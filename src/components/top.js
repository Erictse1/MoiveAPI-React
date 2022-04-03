import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { moiveSliceAction } from '../store/reducerSlice';

const Top = (props) => {
	const dispatch = useDispatch();
	const [sumbitValue, valueChange] = useState('');
	if (props.data.genres) {
		var GERN = props.data.genres.map((a) => {
			return (
				<option key={a.id} value={a.id}>
					{a.name}
				</option>
			);
		});
	}
	const handle1 = (e) => {
		dispatch(moiveSliceAction.Genres(e.target.value));
	};
	const valueSumbit = (e) => {
		valueChange(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(moiveSliceAction.Search(sumbitValue));
	};
	return (
		<header>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="Search"
					id="search"
					className="search"
					onChange={valueSumbit}
				/>
			</form>

			<select onChange={handle1}>{GERN}</select>
		</header>
	);
};
export default Top;
// if (props.data.genres) {
// 	var networks = props.data.genres.map(function (a) {
// 		return (
// 			<option key={a.id} value={a.id}>
// 				{a.name}
// 			</option>
// 		);
// 	});
// }

//onChange={}the other side mostly is method?
//onSubmit onSumbit, cannot get value, get it by useState
