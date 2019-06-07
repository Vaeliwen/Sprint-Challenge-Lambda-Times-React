import React from 'react';
import Tab from './Tab';
import PropType from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            props.tabs.map((tab, index) => {return <Tab tab = {tab} key = {index} selectedTab = {props.selectedTab} selectTabHandler = {props.selectTabHandler} />})}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propType = PropType.shape({
  tab: PropType.string,
  key: PropType.number,
  selectedTab: PropType.string,
  selectTabHandler: PropType.func
})

export default Tabs;
