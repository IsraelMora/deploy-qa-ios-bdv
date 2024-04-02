import React from 'react';

const App: React.FC = () => (
  <div className='flex flex-row items-center justify-evenly h-screen'>

    <div className="card w-96 bg-neutral shadow-xl">
      <figure className="px-10 pt-10">
        <img src="https://uploads-ssl.webflow.com/61e85cc986ecb91892f9f6d9/620c73147e787451fe3bb62c_apple-logo.png" alt="ios" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">App Ios</h2>
        <div className="card-actions">
          <a
            href="./app/bdvapp.plist"
            download="BDVApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary"
            >
              Download
            </button>
          </a>
        </div>
      </div>
    </div>


    <div className="card w-96 bg-neutral shadow-xl">
      <figure className="px-10 pt-10">
        <img src="https://logodownload.org/wp-content/uploads/2015/05/android-logo-1-2.png" alt="android" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">App Android</h2>
        <div className="card-actions">
          <a
            href="./app/bdvapp.apk"
            download="BDVApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary"
            >
              Download
            </button>
          </a>
        </div>
      </div>
    </div>


  </div>
);

export default App;
