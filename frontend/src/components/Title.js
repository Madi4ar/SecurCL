export default function Title({ title }) {
  return (
    <>
      <div className="flex flex-col mt-10">
        <h1 className="uppercase text-[#180D5B] text-3xl font-bold">{title}</h1>

        <svg
          className="mt-1"
          width="71"
          height="7"
          viewBox="0 0 71 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="71" height="7" rx="3.5" fill="#180D5B" />
        </svg>
      </div>
    </>
  );
}
