import React from 'react';

function Card({ id, title, body, image }) {
  const bodyLines = body.split('\n').map((line, index) => (
    <p key={index} className="text-base text-gray-200">{line}</p>
  ));

  return (
    <div className="bg-slate-50/10 backdrop-filter backdrop-blur-sm rounded-3xl shadow-md overflow-hidden text-gray-200 h-full flex flex-col border border-slate-50/20">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <div>{bodyLines}</div>
      </div>
    </div>
  );
}

export default Card;