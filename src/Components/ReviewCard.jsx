import React from 'react'

function ReviewCard({review , reviewsCount}) {
    const {author , content ,  created_at : date  } = review

    // only show comments if their content length is more than 50 words 

    let words = content.split(' ');
    const showReview =  reviewsCount === 10 ? (words.length > 50   ? true : false ) : true ;

    // Input date in YYYY-MM-DD format
    let inputDate = date.slice(0,10);

    // Split the input date into year, month, and day
    let parts = inputDate.split("-");
    let year = parts[0];
    let month = parts[1];
    let day = parts[2];

    // Format the date to DD-MM-YYYY format
    let outputDate = day + "-" + month + "-" + year;

   
  return (
    ( showReview === true ? 
    <div className='review-card p-4 m-8 rounded-lg bg-[#6365f12e] h-fit shadow-lg min-w-[90vw] sm:min-w-[30rem]'>
        <img src="../src/assets/quote.svg" className='w-[2rem]' alt="" />
        <p className='min-h-fit  max-h-[10rem] overflow-y-scroll my-2 text-[1.05rem] pr-1'>{content}</p>
        <p className='text-base font-semibold text-[#6366F1]'>{author}</p>
        <p className='text-gray-700 font-semibold'>{outputDate}</p>
    </div> : null
    )
  )
}

export default ReviewCard
