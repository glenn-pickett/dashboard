import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { useEffect } from 'react';

const Needs = () => {
    let allWithClass = [];
    useEffect(() => {
        allWithClass = Array.from(
            document.querySelectorAll('.e-kanban .e-kanban-table .e-header-cells')
        );
        console.log('allWithClass called', allWithClass)
        addColor(allWithClass);
    }, [window.onload]);

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
        for(let key in i){
            i[key].style['background-color']=styles[key];
            //console.log('addColor', i[key], styles[key], key);
        }
    }

    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Needs" />
            <KanbanComponent id='Needs' dataSource={kanbanData} cardSettings={{ contentField: 'Summary', headerField: 'id' }} keyField='Status'>
                <ColumnsDirective>
                    {kanbanGrid.map((item, index) => {
                        return <ColumnDirective key={index} {...item} />
                    })}
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    )
}

export default Needs