
function App() {

  let dowload = ()=>{window.location.href = "itms-services://?action=download-manifest&url=./app/bdvapp.plist";};

  return 
  (
    <div>
        <h1>Test</h1>
        <button
            type="button"
            onClick={dowload}
        >
            Download V296 TDC v2
        </button>
    </div>
  );
  
}

export default App
