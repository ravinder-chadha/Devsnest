const Templates = ({templates, setMeme}) => {
    return (
        <div className="templates">
            {
                templates.map((tempLate) => (
                  <div key={tempLate.id} className="template" onClick={() => {
                      setMeme(tempLate);
                  }}>
                    <div style={{backgroundImage:`url(${tempLate.url})`}} className="image"></div>
                  </div>
                ))
            }
        </div>
    );
};

export default Templates;