import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { useEffect, useState } from 'react';

const Needs = () => {
    /*
    const [state, setstate] = useState();

    let allWithClass = null;
    //let allWithClass = [];
    useEffect(() => {
        allWithClass = document.getElementById('Needs');

        let theHole = null;

        if(allWithClass.firstElementChild && allWithClass.firstElementChild.nextSibling){
            theHole = allWithClass.firstElementChild.nextSibling.firstChild.firstChild.lastChild.firstChild.firstChild;
        }
        //.firstElementChild.nextSibling.firstChild.firstChild.lastChild.firstChild.firstChild
        
        let newI = allWithClass.querySelectorAll('tr');
        const fetchData = async () => {
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
        }

        setstate(theHole);
        console.log('allWithClass called', allWithClass, newI, state, theHole)
        addColor(state);
    }, [allWithClass, state]);

    /*
    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
            let needArray = null;
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            needArray = await Array.from(document.querySelectorAll('.e-kanban .e-kanban-table .e-header-cells')) && Array.from(document.querySelectorAll('.e-kanban .e-kanban-table .e-header-cells')) != undefined ? Array.from(document.querySelectorAll('.e-kanban .e-kanban-table .e-header-cells')) : [];
            console.log('needArray',needArray, 'fetchData',fetchData, 'state',state);
            //setstate(needArray);

        };

        const result = fetchData()
            // make sure to catch any error
            .catch(console.error);;

        // what will be logged to the console?
        console.log('Result', result);
    }, [])*/

    const styles = {
        0: [
            'bisque'
        ],
        1: [
            'orange'
        ],
        2: [
            'lightblue'
        ],
        3: [
            'pink'
        ],
    }

    const addColor = (i) => {
        for (let key in i) {
            if(i[key])
            //i[key].style['background-color'] = styles[key];
            i[key].class = 'red';
            //console.log('addColor', i[key], styles[key], key);
        }
    }

    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Needs" />
            <KanbanComponent id='Needs' dataSource={kanbanData} cardSettings={{ contentField: 'Summary', headerField: 'Id' }} keyField='Status' style={{ backgroundColor: 'light-gray'}}>
                <ColumnsDirective>
                    {kanbanGrid.map((item, index) => {
                        return <ColumnDirective key={index} {...item} style={{ background: styles[item] }} />
                    }
                    )}
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    )
}

export default Needs