import ResumeUser from '@/components/ResumeUser';
import { persons } from '@/data/persons';

export default function Friends() {
  return (
    <>
      <div className="flex flex-wrap">
        {persons.map((person) => {
          return <ResumeUser {...person} />;
        })}
      </div>
    </>
  );
}
