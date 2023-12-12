//eslint-disable-next-line
const Search = ({ value, onChange }) => {
  return (
    <div className="flex drop-shadow-lg text-black">
      <input
        className="w-[50%] text-xl h-10 bg-white rounded-xl p-4"
        placeholder="Cari Surah"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
