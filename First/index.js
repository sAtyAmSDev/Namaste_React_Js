const Parent = React.createElement('h1', { id: "header", className: "header" },
     [React.createElement('div', 
        { id: "Child1", className: "Child1" },
        [React.createElement('h1', 
            { id: "h1", className: "h1" },
             "hello world with React Js!"),React.createElement('h2', 
                { id: "h2", className: "h2" },
                 "hello world with React Js!")]), 
                 React.createElement('div', 
                    { id: "Child2", className: "Child2" },
                    [React.createElement('h1', 
                        { id: "h1", className: "h1" },
                         "hello world with React Js!"),React.createElement('h2', 
                            { id: "h2", className: "h2" },
                             "hello world with React Js!")])
            ],[React.createElement('div', 
                { id: "Child1", className: "Child1" },
                [React.createElement('h1', 
                    { id: "h1", className: "h1" },
                     "hello world with React Js!"),React.createElement('h2', 
                        { id: "h2", className: "h2" },
                         "hello world with React Js!")]), 
                         React.createElement('div', 
                            { id: "Child2", className: "Child2" },
                            [React.createElement('h1', 
                                { id: "h1", className: "h1" },
                                 "hello world with React Js!"),React.createElement('h2', 
                                    { id: "h2", className: "h2" },
                                     "hello world with React Js!")])
                    ])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Parent)