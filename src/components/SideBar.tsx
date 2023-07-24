const SideBar = () => {
    return (
        <div id="Sidebar" className="flex h-screen items-center absolute left-0 flex-col w-64">


            <div id="AccountDescription" className="flex flex-col m-5 mb-7">

                <div id="FirstPart" className="flex mb-4">

                    <div id="NameAndCod" className="flex flex-col mr-4">
                        <p className="JaneJoe text-black text-3xl font-semibold">Jane Joe</p>
                        <p className=" -mt-2 JaneJoe text-black text-2xl font-normal">@jane.joe</p>
                    </div>

                    <div className="Ellipse127 w-20 h-16 bg-emerald-400 rounded-full" />
                
                </div>

                <p className="text-black text-xl font-normal break-words">Este é um texto descritivo de exemplo para conterá uma descrição editável pelo usuário portador do perfi </p>

            </div>

            <div className="MainNavbar h-96 flex gap-3 text-base font-medium flex-col w-full ">
            
                <button className="Dashboard w-64 h-14 bg-cyan-900 rounded-tr-2xl rounded-br-2xl ">
                    <div className="  Dashboard text-slate-200 ">Inicio</div>
                </button>
            
                <button className="Devices w-64 h-14 bg-slate-200 rounded-tr-2xl rounded-br-2xl ">
                    <div className="Pesquisar text-cyan-900 ">Pessoas</div>
                </button>

                <button className="Lights w-64 h-14 bg-slate-200 rounded-tr-2xl rounded-br-2xl ">
                    <div className="Lights  text-cyan-900  whitespace-nowrap">Nova Imagem</div>
                </button>

                <button className="Temperature w-64 h-14 bg-slate-200 rounded-tr-2xl rounded-br-2xl        ">
                    <div className="Temperature  text-cyan-900 ">Configurações</div>
                </button>

                <button className="Sair w-64 h-14 bg-slate-200 rounded-tr-2xl rounded-br-2xl">
                    <div className="Sair text-cyan-900 ">Sair</div>
                </button>

            </div>
      
      </div>
      
    )
}

/*
          <div id="temperature" className="Temperature w-64 h-14 bg-slate-200 rounded-tr-2xl rounded-br-2xl ">
            <div id="temperature-container" className="Temperature text-cyan-900 text-base font-medium">Configurações</div>
            <div id="temperature-icon" className="IconTemperature w-6 h-6">
              <img className="Union w-2.5 h-5 rounded-sm border border-cyan-900" src="https://via.placeholder.com/11x19" />
              <div className="Ellipse68 w-1.5 h-1.5 rounded-full border border-cyan-800" />
            </div>
          </div>
      
          <div id="devices" className="Devices w-64 h-14 bg-slate-200 rounded-tr-2xl rounded-br-2xl ">
            <div id="devices-container" className="Pesquisar text-cyan-900 text-base font-medium">Pessoas</div>
            <div id="devices-icon" className="IconDevices w-6 h-6">
              <div className="Rectangle4016 w-3 h-5 rounded-sm border border-cyan-800" />
              <div className="Ellipse126 w-0.5 h-0.5 bg-cyan-800 rounded-full" />
            </div>
          </div>
      
          <div id="lights" className="Lights w-64 h-14 bg-slate-200 rounded-tr-2xl rounded-br-2xl ">
            <div id="lights-container" className="Lights text-cyan-900 text-base font-medium">Nova Imagem</div>
            <div id="lights-icon" className="IconLights w-6 h-6">
              <img className="Union w-3 h-4 rounded-sm border border-cyan-900" src="https://via.placeholder.com/13x17" />
            </div>
          </div>
*/

export { SideBar }