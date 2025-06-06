export function CsvValidator() {
  return (
    <>
      <div className="flex w-full h-screen justify-center border-b-[1.5px] border-lime-800">
        <div className="flex h-3/6 items-center justify-center gap-3 hover:border-lime-300">
          <input
            type="text"
            placeholder="Enter CSV filename"
            className="border rounded py-2 px-2"
          />
          <button type="submit" className="border cursor-pointer bg-lime-700 border-green-700 rounded px-3 py-1.5 text-xl text-white font-semibold hover:bg-lime-800">
            Validate
          </button>
        </div>
      </div>
    </>
  );
}
