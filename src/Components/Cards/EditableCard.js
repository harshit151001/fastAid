import React, { useState } from 'react';
import { useImmerReducer } from 'use-immer';
import { isAuthenticated } from '../../Helper/Enpoints/Endpoints';
import Axios from 'axios';

export function ourReducer(draft, action) {
  switch (action.type) {
    case 'name':
      draft.name.value = action.value;

      if (action.value.length) {
        draft.name.hasErrors = false;
      } else {
        draft.name.hasErrors = true;
        draft.name.message = 'required';
      }
      return;

    case 'contactNumber':
      draft.contactNumber.value = action.value;
      if (action.value.length) {
        draft.contactNumber.hasErrors = false;
      } else {
        draft.contactNumber.hasErrors = true;
        draft.contactNumber.message = 'required';
      }
      return;
    case 'companyName':
      draft.companyName.value = action.value;
      if (action.value.length) {
        draft.companyName.hasErrors = false;
      } else {
        draft.companyName.hasErrors = true;
        draft.companyName.message = 'required';
      }
      return;

    case 'address':
      draft.address.value = action.value;
      if (action.value.length) {
        draft.address.hasErrors = false;
      } else {
        draft.address.hasErrors = true;
        draft.address.message = 'required';
      }
      return;
    case 'city':
      draft.city.value = action.value;
      if (action.value.length) {
        draft.city.hasErrors = false;
      } else {
        draft.city.hasErrors = true;
        draft.city.message = 'required';
      }
      return;

    case 'stock':
      draft.stock.value = action.value;
      if (action.value.length) {
        draft.stock.hasErrors = false;
      } else {
        draft.stock.hasErrors = true;
        draft.stock.message = 'required';
      }
      return;
  }
}

const Item = ({ name, id, companyName, city, contactNumber, stock, address, create }) => {
  console.log(create);
  const initialState = {
    city: {
      value: city.name || '',
      hasErrors: false,
      message: ''
    },
    companyName: {
      value: companyName,
      hasErrors: false,
      message: ''
    },
    contactNumber: {
      value: contactNumber,
      hasErrors: false,
      message: ''
    },
    name: {
      value: name,
      hasErrors: false,
      message: ''
    },

    address: {
      value: address,
      hasErrors: false,
      message: ''
    },

    stock: {
      value: stock,
      hasErrors: false,
      message: ''
    }
  };
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState(0);
  const { token, user } = isAuthenticated();
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  const updateProduct = () => {
    if (!disabled) {
      setDisabled(disabled => !disabled);
      console.log(state);
      const checkErr = [];
      for (const key in state) {
        if (state[key].hasErrors) {
          checkErr.push(1);

          dispatch({ type: key, value: '' });
        }
      }
      if (!checkErr.length) {
        const { name, companyName, city, address, contactNumber, stock } = state;
        const fd = new FormData();

        fd.append(`name`, name.value);
        fd.append(`companyName`, companyName.value);
        fd.append(`address`, address.value);
        fd.append(`contactNumber`, contactNumber.value);
        fd.append(`user`, user._id);
        fd.append(`city`, '60825bf9e03e88eae79f5b75');
        fd.append(`stock`, stock.value);
        console.log(create);

        if (create) {
          Axios.post(`${process.env.REACT_APP_BACKEND}/product/create/${user._id}`, fd, config).then(
            response => {
              console.log(response);
            },
            error => {
              console.log(error);
            }
          );
        } else {
          Axios.put(`${process.env.REACT_APP_BACKEND}/product/update/${id}/${user._id}`, fd, config).then(
            response => {
              console.log(response);
            },
            error => {
              console.log(error);
            }
          );
        }
      } else {
        console.log('Error in Validation');
      }

      // Make request
    } else setDisabled(disabled => !disabled);
  };

  return (
    <div className="col-md col-md-6">
      <div className="card shadow-sm rounded input-group p-2 px-3 my-2 card-special">
        <div className="mb-0 d-flex justify-content-between align-items-center">
          <div className="h4 my-0 text-success">
            <input type="text" onChange={e => dispatch({ type: 'name', value: e.target.value })} disabled={disabled} placeholder="name" value={state.name.value} />
          </div>
        </div>
        <div className="mb-0 d-flex justify-content-between align-items-center">
          <div className="text-muted mb-0">
            <input onChange={e => dispatch({ type: 'companyName', value: e.target.value })} type="text" disabled={disabled} placeholder="Company Name" value={state.companyName.value} />
          </div>
        </div>
        <div className="mb-0">
          <strong>
            <input onChange={e => dispatch({ type: 'city', value: e.target.value })} type="text" disabled={disabled} placeholder="City" value={state.city.value} />
          </strong>
        </div>
        <div className="mb-0">
          <input onChange={e => dispatch({ type: 'address', value: e.target.value })} type="text" disabled={disabled} placeholder="Address" value={state.address.value} />
        </div>
        <div className="mb-0">
          <input type="text" onChange={e => dispatch({ type: 'contactNumber', value: e.target.value })} disabled={disabled} placeholder="Contact No" value={state.contactNumber.value} />
        </div>
        <div className="mb-0">
          <input type="text" onChange={e => dispatch({ type: 'stock', value: e.target.value })} disabled={disabled} placeholder="Quantity" value={state.stock.value} />
        </div>
        <div className="mb-0 d-flex justify-content-start align-items-center hid-on-large">
          <button style={{ width: '90px' }} type="button" className="btn btn-danger p-1 mt-2 me-2">
            Delete
          </button>
          <div className="my-0">
            <button style={{ width: '90px' }} type="button" className="btn btn-success p-1 mt-2" onClick={updateProduct}>
              {disabled ? 'Update' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
