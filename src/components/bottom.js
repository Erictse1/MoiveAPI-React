import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { moiveSliceAction } from '../store/reducerSlice';
import { useSelector } from 'react-redux';

const Bottom = () => {
	const useSelect = useSelector((state) => state.Moive.counter);

	const dispatch = useDispatch();
	const handl1 = () => {
		if (useSelect > 1) dispatch(moiveSliceAction.PagePrevious());
		window.scrollTo(0, 0);
	};
	const handl2 = () => {
		dispatch(moiveSliceAction.PageNext());

		window.scrollTo(0, 0);
	};
	return (
		<div className="container2">
			<FontAwesomeIcon icon={faCaretLeft} onClick={handl1} />
			<p>{useSelect}</p>
			<FontAwesomeIcon icon={faCaretRight} onClick={handl2} />
		</div>
	);
};

export default Bottom;

/* <div class="container">
<font-awesome-icon @click="clickleft" icon="fa-solid fa-caret-left" />
<p>{{ this.count }}</p>
<font-awesome-icon @click="clickright" icon="fa-solid fa-caret-right" />
</div> */
