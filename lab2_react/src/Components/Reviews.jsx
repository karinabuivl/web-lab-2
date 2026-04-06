import { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/3/comments')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data); 
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Помилка при завантаженні відгуків:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border border-slate-200 dark:border-slate-700 transition-all duration-300">
      
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white border-b-2 border-slate-100 dark:border-slate-700 pb-2 mb-4 transition-colors">
        Employer Reviews
      </h2>
      
      {isLoading ? (
        <p className="text-slate-500 dark:text-slate-400">Loading reviews...</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-slate-100 dark:border-slate-700 pb-4 last:border-0 last:pb-0 transition-colors">
              
              <h3 className="font-semibold text-slate-700 dark:text-slate-200 transition-colors">{review.name}</h3>
              
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 transition-colors">
                <strong>Email:</strong>{' '}
                <a href={`mailto:${review.email}`} className="text-blue-500 dark:text-blue-400 hover:underline transition-colors">
                  {review.email}
                </a>
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm transition-colors">"{review.body}"</p>
              
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;