
import React from 'react';
import { REVIEWS } from '../constants.tsx';

const Reviews: React.FC = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Avaliações deste produto 💜</h2>
      <div className="space-y-6">
        {REVIEWS.map((review) => (
          <div key={review.id} className="pb-6 border-b border-gray-200 last:border-0">
            <h3 className="text-lg font-semibold text-gray-800">{review.title}</h3>
            <div className="flex gap-1 my-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <i key={i} className={`fa-solid fa-star text-sm ${i < review.rating ? '' : 'text-gray-300'}`}></i>
              ))}
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
              {review.comment}
            </p>
            <div className="text-xs text-gray-400 italic">
              {review.author} em {review.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
