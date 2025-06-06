
export function Header() {
  return (
    <>  
    <div className="flex w-full items-center justify-center border-b-[1.5px] border-lime-800">
    <header className=" text-[#9e5513] mt-1 flex items-center gap-7">
      <img
        src="/wt_logo.png"
        alt="Woodland Trust Logo"
        className="h-16 w-auto mb-2"
      />
      <h1 className="text-4xl font-bold pb-3">WoodLand Trust</h1>
    </header>
    </div>
    </>
  );
}
