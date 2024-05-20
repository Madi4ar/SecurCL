import Title from '@/components/Title';
import { Reports } from '@/data/reports';

export default function Events() {
  return (
    <>
      <div className="px-5 mt-5 ml-3 mr-3 bg-white rounded-xl">
        <Title title="Events" />
        <div className="flex flex-col py-10">
          {Reports.map((report) => {
            return (
              <div className="rounded-xl bg-white shadow-md p-4 mt-3">
                <p className="text-black">{report.date}</p>
                <p className="text-black">{report.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
