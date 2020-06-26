import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isSorted } from '../../services/redux/actions';

function Sort(props: any) {
  const dispatch = useDispatch();
  const sorted: boolean = useSelector((state: any) => state.isSorted);


  function handleSort() {
    console.log("child Component Callback")
    props.onChange(!sorted);
    dispatch(isSorted(!sorted));
  }

  return (
    <Fragment>
      <span style={{ backgroundColor: sorted ? 'yellow' : '#fff', border: '1px solid #444', fontSize: 14, padding: '0px 4px', cursor: 'pointer' }} onClick={() => handleSort()}>Sort By Name</span>
    </Fragment>
  );
}

export default Sort;
