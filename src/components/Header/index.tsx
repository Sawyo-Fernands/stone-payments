export function Header() {
  return (
    <header>
      <div className="flex items-center gap-6">
        <div>
          <img src="logo.svg" alt="" />
        </div>
        <div className="h-full flex flex-col justify-between gap-1">
          <div className="flex item-center gap-2 justify-between w-60">
            <div>
              <span className="font-bold text-gray-600">
                {"14 de janeiro 2021"}
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-600">{"|"}</span>
            </div>
            <div>
              <span className="font-bold text-gray-600">{"21:00 UTC"}</span>
            </div>
          </div>
          <div>
            <span className="text-gray-400">
              {"Dados de câmbio disponibilizados pela Morningstar."}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
