import Image from 'next/image';

export default function ResumeUser({ firstName, lastName, email, img }) {
  return (
    <>
      <div className="p-5 rounded-xl flex flex-col items-center bg-white w-64 ml-5 mt-10">
        <Image
          className="rounded-full h-32 w-32 object-cover"
          src={img}
          width={300}
          height={300}
        />
        <p className="font-bold text-lg">
          {firstName} {lastName}
        </p>
        <p className="font-light text-base">{email}</p>
      </div>
    </>
  );
}
