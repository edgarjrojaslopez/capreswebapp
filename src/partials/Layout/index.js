import React from 'react'

export default function index() {
  return (
    <div id="container" className="flex flex-col ">
    <div id="header" className="relative md:absolute z-20 w-full p-4 bg-gray-400 flex flex-col md:flex-row">
      <button>
        Item 1
      </button>
      <button>
        Item 2
      </button>
      <button>
        Item 3
        </button>
      <button>
        Item 4
      </button>
    </div>

    <div id="main" className="flex flex-col relative md:absolute w-full md:flex-row  flex-grow">
        <div className="p-4 bg-gray-300 flex md:h-screen">
            Sidebar
        </div>
        <div className="p-4 bg-gray-100 flex-grow md:h-screen">
            Content
        </div>
    </div>

    <div id="footer" className="p-4 bg-gray-500">Footer</div>
</div>
  )
}
