import React from 'react'

function Card({uname,myarr,skill1,skill2,skill3}) {
    console.log(uname,myarr);
    
  return (
    <div class="max-w-sm rounded-xl overflow-hidden shadow-lg p-5">
  <img class="w-full" src="https://picsum.photos/200" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-white-500-xl mb-2">{uname}</div>
    <p class="text-white-700 text-base">
      {myarr}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill1}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill2}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill3}</span>
  </div>
</div>
  )
}

export default Card