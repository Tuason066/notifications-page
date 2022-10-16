import { useReducer } from 'react';

/* I'm sorry for this setup I know that this is not a very good idea */
/* I think the output will be good if there is a data coming from the internet or setup locally */
/* So I can display them dynamically as well as the functionalities */
/* In conclusion, the main objectives in this challenge is just to show the notification toggles affecting the notifications count */
/* The reason why I used Reactjs in this challenge is just to learn it and to be confident using it because I'm new to React */

const initialState = {
  count: 3,
  people: [
    { mark: { read: false } },
    { angela: { read: false } },
    { jacob: { read: false } },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ALL_READ':
      return {
        ...state,
        count: 0,
        people: [
          { mark: { read: true } },
          { angela: { read: true } },
          { jacob: { read: true } },
        ],
      };

    case 'MARK_READ':
      if (state.people[0].mark.read) {
        return state;
      }

      state.people[0] = { mark: { read: true } };

      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };

    case 'ANGELA_READ':
      if (state.people[1].angela.read) {
        return state;
      }

      state.people[1] = { angela: { read: true } };

      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };

    case 'JACOB_READ':
      if (state.people[2].jacob.read) {
        return state;
      }

      state.people[2] = { jacob: { read: true } };

      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='font-plusJakartaSans text-base font-medium bg-neutral-200 min-h-screen min-w-full md:pt-8 md:pb-12'>
      {/* container */}
      <div className='bg-neutral-100 p-4 md:p-8 md:rounded-lg grid gap-2 md:gap-3 max-w-3xl mx-auto md:shadow-md'>
        <header className='flex justify-between md:mb-4'>
          <div className='flex font-bold'>
            <h1>Notifications</h1>
            <h2 className='ml-2 px-2 bg-primary-200 text-neutral-100 rounded'>
              {state.count}
            </h2>
          </div>
          <button
            onClick={() => dispatch({ type: 'ALL_READ' })}
            type='button'
            className='text-neutral-500 hover:text-primary-200 transition-all'
          >
            Mark all as read
          </button>
        </header>
        {/* mark webber */}
        <article
          onClick={() => dispatch({ type: 'MARK_READ' })}
          className={`${!state.people[0].mark.read && 'bg-neutral-200'} notif`}
        >
          <a href='/' className='block w-11'>
            <img
              className='w-full'
              src='./assets/images/avatar-mark-webber.webp'
              alt='angela'
            />
          </a>
          <div>
            <h2 className='inline'>
              <a
                href='/'
                className='font-bold text-neutral-600 mr-2 capitalize hover:text-primary-200 transition-all'
              >
                mark webber
              </a>
            </h2>
            <p className='inline text-neutral-400'>
              reacted to your recent post
            </p>
            <a
              href='/'
              className='ml-2 font-bold text-neutral-500 hover:text-primary-200 transition-all'
            >
              My first tournament today!
            </a>
            {!state.people[0].mark.read && (
              <div className='inline-flex items-center'>
                <div className='inline-block ml-2 bg-primary-100 p-1 rounded-full'></div>
              </div>
            )}

            <p className='text-neutral-400 text-sm'>1m ago</p>
          </div>
        </article>
        {/* angela gray */}
        <article
          onClick={() => dispatch({ type: 'ANGELA_READ' })}
          className={`${
            !state.people[1].angela.read && 'bg-neutral-200'
          } notif`}
        >
          <a href='/' className='block w-11'>
            <img
              className='w-full'
              src='./assets/images/avatar-angela-gray.webp'
              alt='angela'
            />
          </a>
          <div>
            <h2 className='inline'>
              <a
                href='/'
                className='font-bold text-neutral-600 mr-2 capitalize hover:text-primary-200 transition-all'
              >
                angela gray
              </a>
            </h2>
            <p className='inline text-neutral-400'>followed you</p>
            {!state.people[1].angela.read && (
              <div className='inline-flex items-center'>
                <div className='inline-block ml-2 bg-primary-100 p-1 rounded-full'></div>
              </div>
            )}
            <p className='text-neutral-400 text-sm'>5m ago</p>
          </div>
        </article>
        {/* jacob thompson */}
        <article
          onClick={() => dispatch({ type: 'JACOB_READ' })}
          className={`${!state.people[2].jacob.read && 'bg-neutral-200'} notif`}
        >
          <a href='/' className='block w-11'>
            <img
              className='w-full'
              src='./assets/images/avatar-jacob-thompson.webp'
              alt='jacob thompson'
            />
          </a>
          <div>
            <h2 className='inline'>
              <a
                href='/'
                className='font-bold text-neutral-600 mr-2 capitalize hover:text-primary-200 transition-all'
              >
                jacob thompson
              </a>
            </h2>
            <p className='inline text-neutral-400'>has joined your group</p>
            <a href='/' className='ml-2 font-bold text-primary-200'>
              Chess Club
            </a>
            {!state.people[2].jacob.read && (
              <div className='inline-flex items-center'>
                <div className='inline-block ml-2 bg-primary-100 p-1 rounded-full'></div>
              </div>
            )}
            <p className='text-neutral-400 text-sm'>1 day ago</p>
          </div>
        </article>
        {/* rizky hasanuddin */}
        <article className='notif'>
          <a href='/' className='block w-11'>
            <img
              className='w-full'
              src='./assets/images/avatar-rizky-hasanuddin.webp'
              alt='rizky hasanuddin'
            />
          </a>
          <div className='text-neutral-400'>
            <h2 className='inline'>
              <a
                href='/'
                className='font-bold text-neutral-600 mr-2 capitalize hover:text-primary-200 transition-all'
              >
                rizky hasanuddin
              </a>
            </h2>
            <p className='inline'>sent you a private message</p>
            <p className='text-sm'>5 days ago</p>
            <a
              href='/'
              className='block p-4 border border-neutral-400 mt-4 rounded hover:text-neutral-500 hover:bg-neutral-300 transition-all'
            >
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </a>
          </div>
        </article>
        {/* kimberly smith */}
        <article className='notif'>
          <a href='/' className='block w-11'>
            <img
              className='w-full'
              src='./assets/images/avatar-kimberly-smith.webp'
              alt='kimberly smith'
            />
          </a>
          <div>
            <div className='grid grid-cols-[1fr_auto]'>
              <div>
                <h2 className='inline'>
                  <a
                    href='/'
                    className='font-bold text-neutral-600 mr-2 capitalize hover:text-primary-200 transition-all'
                  >
                    kimberly smith
                  </a>
                </h2>
                <p className='inline text-neutral-400'>
                  commented on your picture
                </p>
              </div>
              <a
                href='/'
                className='block w-10 hover:outline hover:outline-offset-2 hover:outline-1 rounded transition-all'
              >
                <img
                  className='w-full'
                  src='./assets/images/image-chess.webp'
                  alt='chess'
                />
              </a>
            </div>
            <p className='text-neutral-400 text-sm'>1 week ago</p>
          </div>
        </article>
        {/* nathan peterson */}
        <article className='notif'>
          <a href='/' className='block w-11'>
            <img
              className='w-full'
              src='./assets/images/avatar-nathan-peterson.webp'
              alt='nathan peterson'
            />
          </a>
          <div>
            <h2 className='inline'>
              <a
                href='/'
                className='font-bold text-neutral-600 mr-2 capitalize hover:text-primary-200 transition-all'
              >
                nathan peterson
              </a>
            </h2>
            <p className='inline text-neutral-400'>
              reacted to your recent post
            </p>
            <a
              href='/'
              className='inline ml-2 font-bold text-neutral-500 hover:text-primary-200 transition-all'
            >
              5 end-game strategies to increase your win rate
            </a>

            <p className='text-neutral-400 text-sm'>2 weeks ago</p>
          </div>
        </article>
        {/* anna kim */}
        <article className='notif'>
          <a href='/' className='block w-11'>
            <img
              className='w-full'
              src='./assets/images/avatar-anna-kim.webp'
              alt='anna kim'
            />
          </a>
          <div>
            <h2 className='inline'>
              <a
                href='/'
                className='font-bold text-neutral-600 mr-2 capitalize hover:text-primary-200 transition-all'
              >
                anna kim
              </a>
            </h2>
            <p className='inline text-neutral-400'>left the group</p>
            <a href='/' className='inline ml-2 font-bold text-primary-200'>
              Chess Club
            </a>

            <p className='text-neutral-400 text-sm'>2 weeks ago</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
