// import React from 'react';
// import Tour from './Tour';

// const Tours = ({ tours, removeTour }) => {
//   return (
//     <section>
//       <div className='title'>
//         <h2>our tours</h2>
//         <div className='underline'></div>
//       </div>
//       <div>
//         {tours.map(tour => {
//           const { id } = tour;
//           return <Tour key={id} {...tour} removeTour={removeTour} />;
//         })}
//       </div>
//     </section>
//   );
// };

// export default Tours;

// EMIR:
import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map(tour => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
