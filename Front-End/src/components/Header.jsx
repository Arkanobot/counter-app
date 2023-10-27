function Header({ title, name = undefined }) {
  //header component
  return (
    <div
      className={`w-full bg-teal-500 text-white h-[10vh] border-b-[1px] border-teal-600 rounded-b-md flex ${
        name === undefined ? "justify-center" : "justify-between"
      } items-center`}
    >
      <div className="h-full flex justify-center items-center ml-10">
        <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-white">
          {title}
        </h1>
      </div>
      {name === undefined ? null : (
        <div className="mr-10">
          <h2 className="mb-2 mt-0 text-3xl font-medium leading-tight text-white">
            {name}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Header;
