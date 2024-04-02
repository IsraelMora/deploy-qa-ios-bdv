import React from 'react';

const App: React.FC = () => (
    <div>
        <h1>Test</h1>
        <button
            type="button"
            onClick={() => {
                window.location.href = "itms-services://?action=download-manifest&url=./app/bdvapp.plist";
            }}
        >
            Download V296 TDC v2
        </button>
    </div>
);

export default App;
