import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { useEffect, useState } from 'react';

const Needs = () => {
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

    /*
    const addColor = (i) => {
        for (let key in i) {
            if(i[key])
            //i[key].style['background-color'] = styles[key];
            i[key].class = 'red';
            //console.log('addColor', i[key], styles[key], key);
        }
    }*/

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