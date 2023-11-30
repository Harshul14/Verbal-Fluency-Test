import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FooterComponents = () => {
  const [activeTab, setActiveTab] = useState('tab_item_1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabStyles = {
    root: {
      background: '#6c00f9',
      fontSize: '12px',
      color: '#464646',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      listStyle: 'none',
      fontFamily: 'Open Sans, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '0 20px',
    },
    tcWrap: {
      width: '700px',
      maxWidth: '100%',
      height: '450px',
      background: '#fff',
      display: 'flex',
      borderRadius: '3px',
      overflow: 'hidden',
    },
    tabsList: {
      width: '200px',
      background: '#dfc8fd',
      height: '100%',
    },
    tabsContent: {
      width: 'calc(100% - 200px)',
      padding: '0 10px 0 20px',
      height: '100%',
    },
    tabHead: {
      color: '#6c00f9',
      padding: '25px 0',
      height: '70px',
      textAlign: 'center',
    },
    tabBody: {
      height: 'calc(100% - 140px)',
      overflow: 'auto',
    },
    tabsListUl: {
      padding: '70px 20px',
      textAlign: 'right',
    },
    tabsListItem: {
      padding: '10px 0',
      position: 'relative',
      marginBottom: '3px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.5s ease',
    },
    activeTabItem: {
      color: '#6c00f9',
    },
    tabItemContent: {
      display: activeTab === 'tab_item_1' ? 'block' : 'none',
    },
    tabFoot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: '125px',
      padding: '5px 10px',
      background: 'transparent',
      border: '1px solid',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'all 0.5s ease',
      marginRight: '15px',
    },
    declineButton: {
      borderColor: '#dfc8fd',
      color: '#dfc8fd',
    },
    agreeButton: {
      background: '#6c00f9',
      borderColor: '#6c00f9',
      color: '#fff',
    },
    buttonHover: {
      background: '#4e03b0',
      borderColor: '#4e03b0',
    },
  };

  return (
    <div style={tabStyles.root}>
      <div style={tabStyles.tcWrap}>
        <div style={tabStyles.tabsList}>
          <ul style={tabStyles.tabsListUl}>
            <li
              onClick={() => handleTabClick('tab_item_1')}
              style={{
                ...tabStyles.tabsListItem,
                ...(activeTab === 'tab_item_1' ? tabStyles.activeTabItem : {}),
              }}
              data-tc="tab_item_1"
            >
              Terms of use
            </li>
            <li
              onClick={() => handleTabClick('tab_item_2')}
              style={{
                ...tabStyles.tabsListItem,
                ...(activeTab === 'tab_item_2' ? tabStyles.activeTabItem : {}),
              }}
              data-tc="tab_item_2"
            >
              Intellectual property rights
            </li>
            <li
              onClick={() => handleTabClick('tab_item_3')}
              style={{
                ...tabStyles.tabsListItem,
                ...(activeTab === 'tab_item_3' ? tabStyles.activeTabItem : {}),
              }}
              data-tc="tab_item_3"
            >
              Prohibited activities
            </li>
            <li
              onClick={() => handleTabClick('tab_item_4')}
              style={{
                ...tabStyles.tabsListItem,
                ...(activeTab === 'tab_item_4' ? tabStyles.activeTabItem : {}),
              }}
              data-tc="tab_item_4"
            >
              Termination clause
            </li>
            <li
              onClick={() => handleTabClick('tab_item_5')}
              style={{
                ...tabStyles.tabsListItem,
                ...(activeTab === 'tab_item_5' ? tabStyles.activeTabItem : {}),
              }}
              data-tc="tab_item_5"
            >
              Governing law
            </li>
          </ul>
        </div>
        <div style={tabStyles.tabsContent}>
          <div style={tabStyles.tabHead}>
            <h2>Terms & Conditions</h2>
          </div>
          <div style={tabStyles.tabBody}>
            <div style={{ ...tabStyles.tabItemContent, ...tabStyles.tabItem }}>
              <h3>Terms of use</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium
                reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam
                iste. A quasi ut accusantium laboriosam eius sequi?
              </p>
              {/* Add the rest of your content for this tab */}
            </div>
            {/* Repeat the above structure for other tab items */}
          </div>
          <div style={tabStyles.tabFoot}>
            <button style={{ ...tabStyles.button, ...tabStyles.declineButton }}>Decline</button>
            <button style={{ ...tabStyles.button, ...tabStyles.agreeButton }}>Agree</button>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterComponents.propTypes = {};

FooterComponents.defaultProps = {};

export default FooterComponents;
