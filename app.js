const { useState } = React

const App = () => {

    // URL
    const URL = '';

    // initial data
    const initialData = {
        company: {
            col1: '',
            col2: '',
            col3: '',
            col4: '',
            col5: ''
        },
        position: {
            col1: '',
            col2: '',
            col3: '',
            col4: '',
            col5: ''
        },
        link: {
            col1: '',
            col2: '',
            col3: '',
            col4: '',
            col5: ''
        },
        date: {
            col1: '',
            col2: '',
            col3: '',
            col4: '',
            col5: ''
        },
        note: {
            col1: '',
            col2: '',
            col3: '',
            col4: '',
            col5: ''
        },
    };

    // subit button
    const submitBtn = () => {
        console.log("tableData: ", tableData);
        // fetch()
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tableData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Response: ", data);
            })
            .catch(err => {
                if (URL === '') {
                    console.error("Custom Error: Add URL first");
                }
                else{
                    console.log("Error occured: ", err);
                }
            })
    }

    // state to save table data
    const [tableData, setTableData] = useState(initialData);

    // handle input change
    const handleInputChange = (col_num, e) => {
        const { name, value } = e.target;
        let col = 'col' + (col_num + 1)
        const temp = { ...tableData };
        temp[name][col.toString(2)] = value
        setTableData(temp)
    };

    return (
        <div>
            <h1>Hello</h1>
            <table>
                <th>
                    Test
                </th>
                {Object.keys(tableData).map((keyName, i) => (
                    <tr>
                        <td>{keyName}</td>
                        {Object.keys(tableData[keyName]).map((subkey, col_num) => (
                            <input key={col_num} name={keyName} value={tableData[keyName][subkey]} onChange={(e) => handleInputChange(col_num, e)} />
                        ))}
                    </tr>
                ))}
            </table>
            <br />
            <button onClick={submitBtn}>Go</button>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));