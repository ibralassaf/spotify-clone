import { HomeIcon, LibraryIcon, SearchIcon } from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div>
      <div>
        <button>
          <HomeIcon className="w-5 h-5" />
          <p>Home</p>
        </button>
        <button>
          <SearchIcon className="w-5 h-5" />
          <p>Search</p>
        </button>
        <button>
          <LibraryIcon className="w-5 h-5" />
          <p>Library</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
