import { type FormEvent, useEffect, useState } from 'react';
import { Film, Search } from 'lucide-react';
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function getInitialSearchValue(pathname: string, params: URLSearchParams): string {
  return pathname === '/search' ? params.get('q') ?? '' : '';
}

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(getInitialSearchValue(location.pathname, searchParams));

  useEffect(() => {
    setSearchValue(getInitialSearchValue(location.pathname, searchParams));
  }, [location.pathname, searchParams]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedValue = searchValue.trim();

    if (!normalizedValue) {
      navigate('/');
      return;
    }

    navigate(`/search?q=${encodeURIComponent(normalizedValue)}&page=1`);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-surface-900/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/20 text-brand-500">
              <Film size={20} />
            </span>
            <span>
              Movie<span className="text-accent-400">DB</span>
            </span>
          </NavLink>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full max-w-xl items-center gap-3 rounded-full border border-slate-700 bg-surface-800 px-4 py-3 shadow-card">
          <Search size={18} className="text-slate-400" />
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Buscar filmes..."
            className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
          />
        </form>

        <nav className="flex items-center gap-2 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-xl px-4 py-2 transition ${isActive ? 'bg-brand-500 text-white' : 'text-slate-300 hover:bg-surface-800'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `rounded-xl px-4 py-2 transition ${isActive ? 'bg-brand-500 text-white' : 'text-slate-300 hover:bg-surface-800'}`
            }
          >
            Favoritos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
