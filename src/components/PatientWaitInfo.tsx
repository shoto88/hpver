// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// const PatientWaitInfo: React.FC = () => {
//   const { data: treatmentData, status: treatmentStatus } = useQuery({
//     queryKey: ['treatment'],
//     queryFn: async () => {
//       const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/treat`);
//       return data;
//     },
//   });

//   const { data: examinationTimeData, status: examinationTimeStatus } = useQuery({
//     queryKey: ['examinationTime'],
//     queryFn: async () => {
//       const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/examination-time`);
//       return data;
//     },
//   });

//   if (treatmentStatus === 'pending' || examinationTimeStatus === 'pending') {
//     return <div className="text-center py-8 text-gray-600">Loading...</div>;
//   }

//   if (treatmentStatus === 'error' || examinationTimeStatus === 'error') {
//     return <div className="text-center py-8 text-red-500">Error fetching data</div>;
//   }

//   const waitingCount = Math.max(0, (treatmentData?.waiting || 0) - (treatmentData?.treatment || 0));
//   const estimatedWaitTime = Math.max(0, waitingCount * (examinationTimeData?.minutes || 0));

//   return (
//     <div className="bg-[#f5f5f3] p-6 rounded-lg shadow-md max-w-4xl mx-auto my-8">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-[#ffebee] p-6 rounded-lg shadow-sm">
//           <p className="text-lg font-semibold text-center text-black mb-4">現在の待ち人数</p>
//           <h3 className="text-6xl font-bold text-center text-black">
//             {waitingCount}
//           </h3>
//         </div>
        
//         <div className="bg-[#e8f5e9] p-6 rounded-lg shadow-sm">
//           <p className="text-lg font-semibold text-center text-black mb-4">待ち時間目安</p>
//           <h3 className="text-6xl font-bold text-center text-black">
//             {`${estimatedWaitTime}分`}
//           </h3>
//         </div>
        
//         <div className="bg-[#e3f2fd] p-6 rounded-lg shadow-sm">
//           <p className="text-lg font-semibold text-center text-black mb-4">現在呼び出し中の番号</p>
//           <h3 className="text-6xl font-bold text-center text-black">
//             {treatmentData?.treatment || 0}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientWaitInfo;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CircleSlashIcon } from 'lucide-react';

const PatientWaitInfo: React.FC = () => {
  const { data: treatmentData, status: treatmentStatus } = useQuery({
    queryKey: ['treatment'],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/treat`);
      return data;
    },
  });

  const { data: examinationTimeData, status: examinationTimeStatus } = useQuery({
    queryKey: ['examinationTime'],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/examination-time`);
      return data;
    },
  });

  if (treatmentStatus === 'pending' || examinationTimeStatus === 'pending') {
    return <div className="text-center py-8 text-gray-600">Loading...</div>;
  }

  if (treatmentStatus === 'error' || examinationTimeStatus === 'error') {
    return <div className="text-center py-8 text-red-500">Error fetching data</div>;
  }

  const waitingCount = Math.max(0, (treatmentData?.waiting || 0) - (treatmentData?.treatment || 0));
  const estimatedWaitTime = Math.max(0, waitingCount * (examinationTimeData?.minutes || 0));

  return (
    <div className="max-w-4xl mx-auto my-12 px-4 space-y-12">
      <div className="bg-[#f5f5f3] p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#ffebee] p-6 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-center text-black mb-4">現在の待ち人数</p>
            <h3 className="text-6xl font-bold text-center text-black">
              {waitingCount}
            </h3>
          </div>
          
          <div className="bg-[#e8f5e9] p-6 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-center text-black mb-4">待ち時間目安</p>
            <h3 className="text-6xl font-bold text-center text-black">
              {`${estimatedWaitTime}分`}
            </h3>
          </div>
          
          <div className="bg-[#e3f2fd] p-6 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-center text-black mb-4">現在呼び出し中の番号</p>
            <h3 className="text-6xl font-bold text-center text-black">
              {treatmentData?.treatment || 0}
            </h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 p-8 bg-gradient-to-br from-green-100 to-blue-100 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">LINEで簡単予約！</h3>
              <p className="text-gray-700 mb-4">友だち追加して、スムーズな予約をはじめましょう。</p>
              <a 
                href="https://line.me/R/ti/p/@123abc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
              >
                <img 
                  src="/1485482196-line_78675.svg" 
                  alt="LINE Logo" 
                  className="w-6 h-6 mr-2"
                />
                LINEで友だち追加
              </a>
            </div>
            
            <div >
              <h3 className="text-2xl font-bold text-blue-800 mb-4">LINEで待ち状況確認！</h3>
              <p className="text-gray-700 mb-4">LINEから簡単に現在の待ち状況を確認できます。</p>
            </div>
            
            <div className="hidden lg:block">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">LINEから順番予約し、来院時間を調整🕰️</h3>
              <p className="text-gray-700">
                LINEで順番を予約。自分の番号が近づいたら来院されてください🙇‍♂️。
                待合室での長時間待機を避けることができます。
              </p>
            </div>
          </div>
          <div className="md:w-1/3 p-2 flex items-center justify-center">
            <img 
              src="https://imagedelivery.net/62NdOt7RZaAeX8DsUaXPcg/6e599460-8fd3-4589-ba46-f113b4f07600/public"
              alt="現在の待ち状況"
              className="w-full h-auto object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientWaitInfo;