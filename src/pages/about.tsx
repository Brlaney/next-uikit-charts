import Link from 'next/link';

export default function about () {
  return (
    <>
      <h2>About page</h2>
      <div className='uk-flex uk-flex-middle uk-flex-around'>
        <Link href='https://github.com/Brlaney'>
          <a target='_blank' rel='noopener noreferrer'>
            Designed by
            <span className='uk-text-primary uk-padding-small uk-text-large'>
              Brendan Laney
            </span>
            &copy; 2021
          </a>
        </Link>
      </div>
    </>
  )
};
