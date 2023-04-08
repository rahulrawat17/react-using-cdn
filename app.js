const { useState } = React

const App = () => {

    // URL
    const URL = '';

    // initial data
    const initialData = {
        onBoardingCall: {
            name: 'OnBoarding Call',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        googleSearchControlAccess: {
            name: 'Google Search Control Access',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        googleAnalyticsAccess: {
            name: 'Google Analytics Access',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        websiteAccess: {
            name: 'Website Access',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        technicalAudit: {
            name: 'Technical Audit',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        anchorTextAndSemanticAnalysis: {
            name: 'Anchor Text And Semantic Analysis',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        competitorAnalysis: {
            name: 'Competitor Analysis',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        anchorTextURLMapping: {
            name: 'Anchor Text/ URL Mapping',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        googleDataStudioReportLocalReportingSuite: {
            name: 'Google Data Studio Report + Local Reporting Suite',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        siteLevelOptimization: {
            name: 'Site Level Optimization',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        onPageOptimizationContentCreation: {
            name: 'On Page Optimization Content Creation',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        contentPublishing: {
            name: 'Content Publishing',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        premiumPressRelease: {
            name: 'Premium Press Release',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
                col6: ''
            }
        },
        authorityNichePlacements: {
            name: 'Authority Niche Placements',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        reviewManagement: {
            name: 'Review Management',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        indexLinks: {
            name: 'Index Links',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
        },
        videoRecap: {
            name: 'Video Recap',
            data: {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: ''
            }
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
                    console.log("Custom Error: Add URL first");
                }
                else {
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
        temp[name]['data'][col.toString(2)] = value
        setTableData(temp)
    };

    return (
        <div>
            <h1>Task-1</h1>
            <table>
                <th>
                    Month 1
                </th>
                {Object.keys(tableData).map((keyName, i) => (
                    <tr>
                        <td>{tableData[keyName]['name']}</td>
                        {Object.keys(tableData[keyName]['data']).map((subkey, col_num) => (
                            <input key={col_num} name={keyName} value={tableData[keyName]['data'][subkey]} onChange={(e) => handleInputChange(col_num, e)} />
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