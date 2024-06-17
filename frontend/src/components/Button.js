export default function Button({ title, onClick }) {
  return (
    <>
      <button
        type="submit"
        onClick={onClick}
        class="bg-[#488BD7] rounded text-white py-2 mt-5 uppercase font-bold">
        {title}
      </button>
    </>
  );
}
