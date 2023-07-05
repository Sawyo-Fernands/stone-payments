export function Header() {
  return (
    <header>
      <div className="flex items-center gap-6  w-full sm:flex-col sm:gap-3">
      {/* min-w-max se ajusta de acordo com o tamanho do conteudo */}
        <div className="min-w-max">
          <img src="logo.svg" alt="" />
        </div>
        <div className="h-full flex flex-col justify-between gap-1">
          <div className="flex item-center gap-2 justify-between w-60 sm:justify-between w-full">
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
          <div className="sm:text-justify">
            <span className="text-gray-400">
              {"Dados de câmbio disponibilizados pela Morningstar."}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
