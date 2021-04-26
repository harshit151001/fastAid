import React, { useState, useEffect } from 'react';
import Item from '../Components/Cards/Item';
import ItemsList from '../Components/Lists/ItemsList';
import { getItems } from '../Helper/Enpoints/Endpoints';
import { withRouter, Link } from 'react-router-dom';
import Select from 'react-select';

const Home = ({ match, history }) => {
  const [items, setItems] = useState([]);
  const { cityId, page } = match.params;
  const filterOptions = [{ _id: 'likes', name: 'Most Liked' }];
  const [selectedFilter, setSelectedFilter] = useState('');

  const onchangeSelect = filter => {
    setSelectedFilter(filter);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const getAndSetItems = async () => {
        const response = await getItems(page, cityId, selectedFilter._id);
        setItems(response);
      };
      getAndSetItems();
    }
    return () => (mounted = false);
  }, [cityId, page, selectedFilter]);

  return (
    <div style={{ background: '#fafafa' }}>
      <div className="alert alert-success mt-0 mb-1 justify-content-between align-items-center" role="alert">
        <span className="lead order-1">Know some resources? </span>
        <Link to={{ pathname: '/login', state: { seller: 0 } }}>
          <button className="btn btn-success">Add Info</button>
        </Link>
      </div>
      <div>
        Sort By: <Select value={selectedFilter} onChange={onchangeSelect} options={filterOptions} getOptionValue={option => option._id} getOptionLabel={option => option.name} />
      </div>
      <ItemsList>
        {items.length > 0 ? (
          items.map(({ name, stock, _id, contactNumber, address, companyName, city, user, category, likes, dislikes, createdAt, updatedAt }) => <Item name={name} stock={stock} key={_id} likes={likes} dislikes={dislikes} id={_id} city={city} user={user?.seller} category={category} companyName={companyName} address={address} contactNumber={contactNumber} createdAt={createdAt} updatedAt={updatedAt} />)
        ) : (
          <div className="p-4">
            <p class="display-4 text-center">Sorry, No items found.</p>
          </div>
        )}
      </ItemsList>
      <div className="d-flex align-items-center justify-content-center p-4">
        <button disabled={page === 1} onClick={() => history.push(`/home/${cityId}/${+page > 1 ? +page - 1 : +page}`)} className="btn btn-success mx-2">
          Back
        </button>
        <button onClick={() => history.push(`/home/${cityId}/${+page + 1}`)} className="btn btn-success mx-2">
          Next
        </button>
      </div>
    </div>
  );
};

export default withRouter(Home);
