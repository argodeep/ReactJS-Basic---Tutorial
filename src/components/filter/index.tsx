import React, {useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { isSorted } from '../../services/redux/actions';

function Filter(props: any) {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  function handleInput(input: string) {
    setKeyword(input)
    if (input) {
      props.onChange(input);
    } else {
      props.onChange('')
    }
  }

  return (
    <Fragment>
      <input type="text" style={{ padding: '1px 2px', height: 'fit-content' }} value={keyword} onChange={(event) => handleInput(event.target.value.trim().toLowerCase())} placeholder={props.text} />
      <span className="clear" onClick={() => {
        props.onChange('');
        setKeyword('');
        dispatch(isSorted(false));
      }}>Clear</span>
    </Fragment>
  );
}

export default Filter;
