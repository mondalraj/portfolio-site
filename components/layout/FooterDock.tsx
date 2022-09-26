import React from 'react'

const FooterDock = () => {
  return (
    <div className="bg-slate-700 absolute w-full bottom-0 flex justify-center items-center">
      <div className="relative h-12 px-5 mb-2 bg-slate-400/50 flex justify-center items-center gap-4 z-10">
        <div className="relative w-10 h-10 bg-slate-400 hover:scale-150 z-50"></div>
        <div className="w-10 h-10 bg-slate-400"></div>
        <div className="w-10 h-10 bg-slate-400"></div>
        <div className="w-10 h-10 bg-slate-400"></div>
      </div>
    </div>
  )
}

export default FooterDock
