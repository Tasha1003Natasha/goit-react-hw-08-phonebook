import React from 'react';
import Ratio from 'react-bootstrap/Ratio';

const HomeView = () => {
  return (
    <div
      style={{
        width: '800px',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
      }}
    >
      <Ratio aspectRatio="16x9">
        <embed
          type="image/svg+xml"
          src="http://inspiredlearning21stcclc.weebly.com/uploads/4/3/3/9/43399847/welcome2_orig.jpg"
        />
      </Ratio>
    </div>
  );
};

export default HomeView;
