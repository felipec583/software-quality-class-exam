export default function Feed() {
  
  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md max-w-6xl mx-auto gap-3">
        <li className="p-4 pb-2 text-xl opacity-60 tracking-wide">
          Comentarios de la semana
        </li>

        <li className="list-row border border-primary rounded-lg shadow-sm bg-base-100 hover:bg-base-200 transition-all duration-200">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
              alt="Perfil de Dio Lupa"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Influencer
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            Su reseña del tema “Remaining Reason” se hizo viral en Reels y
            generó un pico de interacción. Destacó el “hook” y la estética del
            video, impulsando la tendencia durante la semana.
          </p>
        </li>

        <li className="list-row border border-primary rounded-lg shadow-sm bg-base-100 hover:bg-base-200 transition-all duration-200">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/4@94.webp"
              alt="Perfil de Ellie Beilish"
            />
          </div>
          <div>
            <div>Ellie Beilish</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Cantante
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            “Bears of a Fever” cautivó por su energía y letras enigmáticas. Tras
            presentarlo en vivo, el sencillo escaló en reproducciones y recibió
            elogios de la crítica independiente.
          </p>
        </li>

        <li className="list-row border border-primary rounded-lg shadow-sm bg-base-100 hover:bg-base-200 transition-all duration-200">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/3@94.webp"
              alt="Perfil de Sabrino Gardener"
            />
          </div>
          <div>
            <div>Sabrino Gardener</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Escritora
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            Su crónica “Cappuccino” ganó lectores por su prosa directa y temas
            cotidianos. La pieza se compartió en clubes de lectura y elevó su
            perfil como nueva voz literaria.
          </p>
        </li>
      </ul>
    </>
  );
}
